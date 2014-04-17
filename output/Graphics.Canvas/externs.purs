module Graphics.Canvas where
import Prelude ()
import Control.Monad.Eff ()
type Transform  = { m32 :: Prim.Number, m31 :: Prim.Number, m22 :: Prim.Number, m21 :: Prim.Number, m12 :: Prim.Number, m11 :: Prim.Number }
type TranslateTransform  = { translateY :: Prim.Number, translateX :: Prim.Number }
type ScaleTransform  = { scaleY :: Prim.Number, scaleX :: Prim.Number }
type Rectangle  = { h :: Prim.Number, w :: Prim.Number, y :: Prim.Number, x :: Prim.Number }
type Arc  = { end :: Prim.Number, start :: Prim.Number, r :: Prim.Number, cy :: Prim.Number, cx :: Prim.Number }
foreign import data Context2D :: *
foreign import data CanvasElement :: *
foreign import data Canvas :: !
foreign import withContext :: forall eff a. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a
foreign import restore :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import save :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import transform :: forall eff. Graphics.Canvas.Transform -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import translate :: forall eff. Graphics.Canvas.TranslateTransform -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import rotate :: forall eff. Prim.Number -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import scale :: forall eff. Graphics.Canvas.ScaleTransform -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import clearRect :: forall eff. Graphics.Canvas.Context2D -> Graphics.Canvas.Rectangle -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import strokeRect :: forall eff. Graphics.Canvas.Context2D -> Graphics.Canvas.Rectangle -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import fillRect :: forall eff. Graphics.Canvas.Context2D -> Graphics.Canvas.Rectangle -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import rect :: forall eff. Graphics.Canvas.Context2D -> Graphics.Canvas.Rectangle -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import arc :: forall eff. Graphics.Canvas.Context2D -> Graphics.Canvas.Arc -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import fillPath :: forall eff a. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a
foreign import strokePath :: forall eff a. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) a
foreign import moveTo :: forall eff. Graphics.Canvas.Context2D -> Prim.Number -> Prim.Number -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import lineTo :: forall eff. Graphics.Canvas.Context2D -> Prim.Number -> Prim.Number -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import clip :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import fill :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import stroke :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import beginPath :: forall eff. Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setShadowOffsetY :: forall eff. Prim.Number -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setShadowOffsetX :: forall eff. Prim.Number -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setShadowBlur :: forall eff. Prim.Number -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setShadowColor :: forall eff. Prim.String -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setStrokeStyle :: forall eff. Prim.String -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setFillStyle :: forall eff. Prim.String -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import setLineWidth :: forall eff. Prim.Number -> Graphics.Canvas.Context2D -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D
foreign import getContext2D :: forall eff. Graphics.Canvas.CanvasElement -> Control.Monad.Eff.Eff (canvas :: Graphics.Canvas.Canvas | eff) Graphics.Canvas.Context2D