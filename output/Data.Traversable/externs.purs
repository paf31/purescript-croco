module Data.Traversable where
import Prelude ()
import Data.Array ()
import Data.Either ()
import Data.Eq ()
import Data.Foldable ()
import Data.Maybe ()
import Data.Tuple ()
class Traversable t where
  traverse :: forall a b m. (Prelude.Functor m, Prelude.Applicative m) => (a -> m b) -> t a -> m (t b)
  sequence :: forall a m. (Prelude.Functor m, Prelude.Applicative m) => t (m a) -> m (t a)
foreign import zipWithA :: forall m a b c. (Prelude.Functor m, Prelude.Applicative m) => (a -> b -> m c) -> [a] -> [b] -> m [c]
foreign import for :: forall a b m t. (Prelude.Functor m, Prelude.Applicative m, Data.Traversable.Traversable t) => t a -> (a -> m b) -> m (t b)
foreign import instance traversableArray :: Data.Traversable.Traversable Prim.Array
foreign import instance traversableEither :: Data.Traversable.Traversable (Data.Either.Either a)
foreign import instance traversableRef :: Data.Traversable.Traversable Data.Eq.Ref
foreign import instance traversableMaybe :: Data.Traversable.Traversable Data.Maybe.Maybe
foreign import instance traversableTuple :: Data.Traversable.Traversable (Data.Tuple.Tuple a)