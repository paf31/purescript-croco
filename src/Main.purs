module Main where

import Data.Array
import Data.Maybe
import Data.Tuple
import qualified Data.String as S
import Data.Foldable (mconcat)
import Data.Traversable
import Data.Monoid
import Data.Monoid.First

import Control.Monad.Eff
import Control.Monad.Eff.Ref

import Graphics.Canvas

import qualified Data.Map as M

data Brick 
  = White 
  | Green
  | Red

instance showBrick :: Show Brick where
  show White = "White"
  show Green = "Green"
  show Red = "Red"

instance eqBrick :: Eq Brick where
  (==) White White = true
  (==) Green Green = true
  (==) Red Red = true
  (==) _ _ = false
  (/=) x y = not (x == y)
 
type Time = Number
 
type Speed = Number
 
type Coord = Number

type KeyCode = Number

type Maze = M.Map (Tuple Number Number) Brick 
 
data GameStatus = InProgress | GameOver
 
data Direction = MovingLeft | MovingRight
 
data KeyState = MovingUp | MovingDown | NoKeyState
 
type GameState = 
  { lastTime  :: Maybe Time
  , maze      :: Maze
  , posX      :: Coord
  , posY      :: Coord
  , speed     :: Speed
  , status    :: GameStatus
  , keyState  :: KeyState
  , direction :: Direction 
  }

defaultGameState :: GameState
defaultGameState =
  { lastTime   : Nothing
  , maze       : defaultMaze
  , posX       : 4.0
  , posY       : 4.0
  , speed      : 10.0
  , status     : InProgress 
  , keyState   : NoKeyState
  , direction  : MovingLeft
  }

defaultMaze :: Maze
defaultMaze = parseMaze 
  [ "######################################################################"
  , "#G                  #R         G#GG   RRR                            #"
  , "#G       R#R        #          G#GG         #########                #"
  , "#G        #         #          G#############RGG    #########        #"
  , "#G        #                                                          #"
  , "#G        #         #R         G#############       #########        #"
  , "#G       R#R        #          G#GG         #########                #"
  , "#G                  #          G#GG   RRR                            #"
  , "#################################GG###################################"
  , "#G                             G#GG                                 R#"
  , "#G       R#R        #          G#RRRRRRRRRR                ###########"
  , "#G        #G       G#                                            GGGG#"
  , "#G        #        R#          G#RRRRRRRRRR                ###########"
  , "#G       R#G       G#          G#                                GGGG#"
  , "#R                             G#GGGGGG                          GGGG#"
  , "###########################################RRRRRRRRRRRRRRRR###########" ]

parseMaze :: [String] -> Maze
parseMaze ls = 
  let
    go :: Number -> Maze -> [String] -> Maze
    go _ m [] = m
    go r m (s : ss) = go (r + 1) (lineToMaze r 0 m s) ss

    lineToMaze :: Number -> Number -> Maze -> String -> Maze
    lineToMaze _ c m s | c >= S.length s = m
    lineToMaze r c m s = lineToMaze r (c + 1) (updateMaze r c m s) s
      
    updateMaze :: Number -> Number -> Maze -> String -> Maze
    updateMaze r c m s = 
      let brick = charToBrick (S.charAt c s)
      in maybe m (\b -> M.insert (Tuple c r) b m) brick

    charToBrick :: String -> Maybe Brick
    charToBrick "#" = Just White
    charToBrick "R" = Just Red
    charToBrick "G" = Just Green
    charToBrick _ = Nothing
  in go 0 M.empty ls 

checkCollision :: GameState -> Tuple Coord Coord -> Maybe (Tuple (Tuple Number Number) Brick)
checkCollision state (Tuple x y) = 
  let
    nearestBrick :: Direction -> Number -> Number -> Tuple Number Number
    nearestBrick MovingLeft  x y = Tuple (Math.floor x) (Math.round y)
    nearestBrick MovingRight x y = Tuple (Math.ceil x)  (Math.round y)
    
    checkCollision' :: GameState -> Tuple Coord Coord -> Maybe (Tuple (Tuple Number Number) Brick)
    checkCollision' state p@(Tuple ix iy) = 
      let 
        dx = ix - x
        dy = iy - y
        dist = Math.sqrt $ dx * dx + dy * dy 
      in if dist >= 0.7 then 
        Nothing 
      else 
        Tuple p <$> M.lookup p state.maze
  in case nearestBrick state.direction x y of
       Tuple ix iy -> runFirst <<< mconcat $ 
         map First [ checkCollision' state (Tuple ix iy)
                   , checkCollision' state (Tuple ix (iy - 1))
                   , checkCollision' state (Tuple ix (iy + 1))
                   ]

applyKeyState :: GameState -> Number -> Coord
applyKeyState state d = case state.keyState of
  MovingUp -> 
    let 
      nearestBrick x y = Tuple (Math.round x) (Math.floor y)
      newY = state.posY - d
      location = nearestBrick state.posX newY 
      brick = M.lookup location state.maze
      clipped = if brick == Just White then Math.max newY (Math.floor newY + 0.7) else newY 
    in clipped
  MovingDown ->
    let 
      nearestBrick x y = Tuple (Math.round x) (Math.ceil y)
      newY = state.posY + d
      location = nearestBrick state.posX newY 
      brick = M.lookup location state.maze 
      clipped = if brick == Just White then Math.min newY (Math.ceil newY - 0.7) else newY
    in clipped
  NoKeyState -> state.posY

moveBall :: GameState -> Time -> Tuple Coord Coord
moveBall state elapsed =
  let 
    d = elapsed * state.speed / 1000.0
    newY = applyKeyState state d
  in case state.direction of 
    MovingLeft  -> Tuple (state.posX - d) newY
    MovingRight -> Tuple (state.posX + d) newY

collide :: GameState -> Tuple Number Number -> Tuple Coord Coord -> Brick -> GameState
collide state _ (Tuple x y) White =
  case state.direction of
    MovingLeft  -> state { direction = MovingRight }
    MovingRight -> state { direction = MovingLeft }
collide state _ _ Red = 
  state { status = GameOver }
collide state key _ Green = 
  let 
    newMaze = M.delete key state.maze
    newStatus = if null <<< filter ((==) Green) <<< map snd $ M.toList state.maze then GameOver else InProgress 
  in case state.direction of
    MovingLeft  -> state { maze = newMaze, direction = MovingRight, status = newStatus }
    MovingRight -> state { maze = newMaze, direction = MovingLeft, status = newStatus }

updateGameState :: GameState -> Time -> GameState
updateGameState state elapsed = 
  case moveBall state elapsed of
    p@(Tuple newX newY) -> case checkCollision state p of 
      Nothing -> state { posX = newX, posY = newY }
      Just (Tuple key brick) -> collide state key (Tuple newX newY) brick
   
tick :: GameState -> Time -> GameState
tick state elapsedTime = do 
  case state.status of
    GameOver -> state
    InProgress -> updateGameState state elapsedTime

changeKeyState :: forall eff. RefVal GameState -> KeyState -> Eff (ref :: Ref | eff) Unit 
changeKeyState stateRef newState = do
  state <- readRef stateRef
  case state.status of 
    InProgress -> modifyRef stateRef $ \st -> st { keyState = newState }
    _ -> return unit

handleKeyDown :: forall eff. RefVal GameState -> KeyCode -> Eff (ref :: Ref | eff) Boolean
handleKeyDown stateRef 38 = do
  changeKeyState stateRef MovingUp
  return false
handleKeyDown stateRef 40 = do
  changeKeyState stateRef MovingDown 
  return false
handleKeyDown _ _ = return true

handleKeyUp :: forall eff. RefVal GameState -> KeyCode -> Eff (ref :: Ref | eff) Boolean
handleKeyUp stateRef _ = do
  changeKeyState stateRef NoKeyState
  return false

-- |
-- Rendering
--

square :: forall eff. Context2D -> Eff (canvas :: Canvas | eff) Context2D 
square ctx = fillRect ctx
  { x: negate 1
  , y: negate 1
  , w: 2
  , h: 2 
  }

circle :: forall eff. Context2D -> Eff (canvas :: Canvas | eff) Context2D
circle ctx = fillPath ctx $ arc ctx 
  { cx : 0.0
  , cy : 0.0
  , r  : 1.0
  , start : 0.0
  , end   : 2 * Math.pi
  }

box :: forall eff. Context2D -> String -> String -> Eff (canvas :: Canvas | eff) Context2D
box ctx c1 c2 = do
  setFillStyle c1 ctx
  square ctx
  setFillStyle c2 ctx
  withContext ctx $ do
    scale { scaleX: 0.8, scaleY: 0.8 } ctx
    square ctx

brick :: forall eff. Context2D -> Brick -> Eff (canvas :: Canvas | eff) Context2D
brick ctx White = box ctx "#c0c000" "#c08000"
brick ctx Red   = box ctx "#00ff00" "#008000"
brick ctx Green = box ctx "#ff0000" "#0000ff"
  
maze :: forall eff. Context2D -> Maze -> Eff (canvas :: Canvas | eff) Context2D
maze ctx m = do
  foreachE (M.toList m) $ \(Tuple (Tuple x y) b) -> withContext ctx $ do
    translate { translateX: x, translateY: y } ctx
    scale { scaleX: 0.4, scaleY: 0.4 } ctx
    brick ctx b
    return unit
  return ctx
  
ball :: forall eff. Context2D -> Coord -> Coord -> Eff (canvas :: Canvas | eff) Context2D
ball ctx x y = withContext ctx $ do
  translate { translateX: x, translateY: y } ctx
  setFillStyle "#0080ff" ctx
  scale { scaleX: 0.3, scaleY: 0.3 } ctx
  circle ctx

foreign import data ETime :: !

foreign import getMillis
  "function getMillis() {\
  \  return new Date().getTime();\
  \}" :: forall eff. Eff (time :: ETime | eff) Number

render :: forall eff. Context2D -> RefVal GameState -> Eff (time :: ETime, canvas :: Canvas, ref :: Ref | eff) Unit 
render ctx stateRef = do
  state <- readRef stateRef
  time <- getMillis
  let lastTime = state.lastTime
  let elapsedTime = maybe 0 id $ (-) time <$> lastTime
  let state' = tick state elapsedTime
  let state'' = state' { lastTime = Just time }
  writeRef stateRef state''
  setFillStyle "#000000" ctx
  clearRect ctx { x: 0, y: 0, w: 800, h: 600 } 
  withContext ctx $ do
    translate { translateX: 400, translateY: 300 } ctx
    scale { scaleX: 50, scaleY: 50 } ctx
    translate 
      { translateX: negate (state''.posX)
      , translateY: negate (state''.posY)
      } ctx 
    maze ctx state''.maze
    ball ctx state''.posX state''.posY
  requestAnimationFrame $ render ctx stateRef

foreign import getElementById
  "function getElementById(id) {\
  \  return function() {\
  \    return document.getElementById(id);\
  \  };\
  \}" :: forall eff. String -> Eff eff CanvasElement

foreign import requestAnimationFrame 
  "function requestAnimationFrame(action) {\
  \  return function() {\
  \    window.requestAnimationFrame(action);\
  \  };\
  \}" :: forall eff. Eff eff Unit -> Eff eff Unit

foreign import onKeyDown
  "function onKeyDown(handler) {\
  \  return function() {\
  \    window.onkeydown = function(e) {\
  \      return handler(e.keyCode)();\
  \    };\
  \  };\
  \}" :: forall eff. (KeyCode -> Eff eff Boolean) -> Eff eff Unit 

foreign import onKeyUp
  "function onKeyUp(handler) {\
  \  return function() {\
  \    window.onkeyup = function(e) {\
  \      return handler(e.keyCode)();\
  \    };\
  \  };\
  \}" :: forall eff. (KeyCode -> Eff eff Boolean) -> Eff eff Unit 

main = do
  stateRef <- newRef defaultGameState
  onKeyDown $ handleKeyDown stateRef
  onKeyUp $ handleKeyUp stateRef
  canvas <- getElementById "canvas"
  ctx <- getContext2D canvas
  render ctx stateRef
