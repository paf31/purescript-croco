module Data.Function where
import Prelude ()
foreign import on :: forall a b c. (b -> b -> c) -> (a -> b) -> a -> a -> c