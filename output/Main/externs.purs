module Main where
import Prelude ()
import Data.Array ()
import Data.Maybe ()
import Data.Tuple ()
import Data.String ()
import Data.Foldable ()
import Data.Traversable ()
import Data.Monoid ()
import Data.Monoid.First ()
import Control.Monad.Eff ()
import Control.Monad.Eff.Ref ()
import Graphics.Canvas ()
import Data.Map ()
foreign import data ETime :: !
type GameState  = { direction :: Main.Direction, keyState :: Main.KeyState, status :: Main.GameStatus, speed :: Main.Speed, posY :: Main.Coord, posX :: Main.Coord, maze :: Main.Maze, lastTime :: Data.Maybe.Maybe Main.Time }
data KeyState  = MovingUp  | MovingDown  | NoKeyState 
data Direction  = MovingLeft  | MovingRight 
data GameStatus  = InProgress  | GameOver 
type Maze  = Data.Map.Map (Data.Tuple.Tuple Prim.Number Prim.Number) Main.Brick
type KeyCode  = Prim.Number
type Coord  = Prim.Number
type Speed  = Prim.Number
type Time  = Prim.Number
data Brick  = White  | Green  | Red 
foreign import main :: forall t726. Control.Monad.Eff.Eff (time :: Main.ETime, ref :: Control.Monad.Eff.Ref.Ref, canvas :: Graphics.Canvas.Canvas | t726) {  }
foreign import onKeyUp :: forall eff. (Main.KeyCode -> Control.Monad.Eff.Eff eff Prim.Boolean) -> Control.Monad.Eff.Eff eff {  }
foreign import onKeyDown :: forall eff. (Main.KeyCode -> Control.Monad.Eff.Eff eff Prim.Boolean) -> Control.Monad.Eff.Eff eff {  }
foreign import setInterval :: forall eff. Prim.Number -> Control.Monad.Eff.Eff eff {  } -> Control.Monad.Eff.Eff eff {  }
foreign import getElementById :: forall eff. Prim.String -> Control.Monad.Eff.Eff eff Graphics.Canvas.CanvasElement
foreign import render :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Ref.RefVal Main.GameState -> Control.Monad.Eff.Eff (time :: Main.ETime, ref :: Control.Monad.Eff.Ref.Ref, canvas :: Graphics.Canvas.Canvas | eff) {  }
foreign import getMillis :: forall eff. Control.Monad.Eff.Eff (time :: Main.ETime | eff) Prim.Number
foreign import ball :: forall eff. Graphics.Canvas.Context2D -> Main.Coord -> Main.Coord -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import maze :: forall eff. Graphics.Canvas.Context2D -> Main.Maze -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import brick :: forall eff. Graphics.Canvas.Context2D -> Main.Brick -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import box :: forall eff. Graphics.Canvas.Context2D -> Prim.String -> Prim.String -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import circle :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import square :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import handleKeyUp :: forall eff. Control.Monad.Eff.Ref.RefVal Main.GameState -> Main.KeyCode -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | eff) Prim.Boolean
foreign import handleKeyDown :: forall eff. Control.Monad.Eff.Ref.RefVal Main.GameState -> Main.KeyCode -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | eff) Prim.Boolean
foreign import changeKeyState :: forall eff. Control.Monad.Eff.Ref.RefVal Main.GameState -> Main.KeyState -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | eff) {  }
foreign import tick :: Main.GameState -> Main.Time -> Main.GameState
foreign import updateGameState :: Main.GameState -> Main.Time -> Main.GameState
foreign import collide :: Main.GameState -> Data.Tuple.Tuple Prim.Number Prim.Number -> Data.Tuple.Tuple Main.Coord Main.Coord -> Main.Brick -> Main.GameState
foreign import moveBall :: Main.GameState -> Main.Time -> Data.Tuple.Tuple Main.Coord Main.Coord
foreign import applyKeyState :: Main.GameState -> Prim.Number -> Main.Coord
foreign import checkCollision :: Main.GameState -> Data.Tuple.Tuple Main.Coord Main.Coord -> Data.Maybe.Maybe (Data.Tuple.Tuple (Data.Tuple.Tuple Prim.Number Prim.Number) Main.Brick)
foreign import parseMaze :: [Prim.String] -> Main.Maze
foreign import defaultMaze :: Main.Maze
foreign import defaultGameState :: Main.GameState
foreign import instance showBrick :: Prelude.Show Main.Brick
foreign import instance eqBrick :: Prelude.Eq Main.Brick