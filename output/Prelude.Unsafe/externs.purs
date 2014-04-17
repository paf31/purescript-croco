module Prelude.Unsafe where
import Prelude ()
foreign import unsafeIndex :: forall a. [a] -> Prim.Number -> a