module Math where
import Prelude ()
type Radians  = Prim.Number
foreign import sqrt2 :: Prim.Number
foreign import sqrt1_2 :: Prim.Number
foreign import pi :: Prim.Number
foreign import log10e :: Prim.Number
foreign import log2e :: Prim.Number
foreign import ln10 :: Prim.Number
foreign import ln2 :: Prim.Number
foreign import e :: Prim.Number
foreign import tan :: Math.Radians -> Prim.Number
foreign import sqrt :: Prim.Number -> Prim.Number
foreign import sin :: Math.Radians -> Prim.Number
foreign import round :: Prim.Number -> Prim.Number
foreign import pow :: Prim.Number -> Prim.Number -> Prim.Number
foreign import min :: Prim.Number -> Prim.Number -> Prim.Number
foreign import max :: Prim.Number -> Prim.Number -> Prim.Number
foreign import log :: Prim.Number -> Prim.Number
foreign import floor :: Prim.Number -> Prim.Number
foreign import exp :: Prim.Number -> Prim.Number
foreign import cos :: Math.Radians -> Prim.Number
foreign import ceil :: Prim.Number -> Prim.Number
foreign import atan2 :: Prim.Number -> Prim.Number -> Math.Radians
foreign import atan :: Prim.Number -> Math.Radians
foreign import asin :: Prim.Number -> Math.Radians
foreign import acos :: Prim.Number -> Math.Radians
foreign import abs :: Prim.Number -> Prim.Number