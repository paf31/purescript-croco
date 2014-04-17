module Control.Monad where
import Prelude ()
import Data.Array ()
infixr 1 >=>
infixr 1 <=<
foreign import when :: forall m. (Prelude.Monad m) => Prim.Boolean -> m {  } -> m {  }
foreign import foldM :: forall m a b. (Prelude.Monad m) => (a -> b -> m a) -> a -> [b] -> m a
foreign import join :: forall m a. (Prelude.Monad m) => m (m a) -> m a
foreign import (<=<) :: forall m a b c. (Prelude.Monad m) => (b -> m c) -> (a -> m b) -> a -> m c
foreign import (>=>) :: forall m a b c. (Prelude.Monad m) => (a -> m b) -> (b -> m c) -> a -> m c
foreign import replicateM :: forall m a. (Prelude.Monad m) => Prim.Number -> m a -> m [a]