module Data.Array.Unsafe where
import Prelude ()
foreign import tail :: forall a. [a] -> [a]
foreign import head :: forall a. [a] -> a