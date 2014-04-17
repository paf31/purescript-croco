module Data.Foldable where
import Prelude ()
import Control.Applicative ()
import Data.Either ()
import Data.Eq ()
import Data.Maybe ()
import Data.Monoid ()
import Data.Tuple ()
class Foldable f where
  foldr :: forall a b. (a -> b -> b) -> b -> f a -> b
  foldl :: forall a b. (b -> a -> b) -> b -> f a -> b
  foldMap :: forall a m. (Data.Monoid.Monoid m) => (a -> m) -> f a -> m
foreign import foldlArray :: forall a b. (b -> a -> b) -> b -> [a] -> b
foreign import foldrArray :: forall a b. (a -> b -> b) -> b -> [a] -> b
foreign import find :: forall a f. (Data.Foldable.Foldable f) => (a -> Prim.Boolean) -> f a -> Data.Maybe.Maybe a
foreign import notElem :: forall a f. (Prelude.Eq a, Data.Foldable.Foldable f) => a -> f a -> Prim.Boolean
foreign import elem :: forall a f. (Prelude.Eq a, Data.Foldable.Foldable f) => a -> f a -> Prim.Boolean
foreign import product :: forall f. (Data.Foldable.Foldable f) => f Prim.Number -> Prim.Number
foreign import sum :: forall f. (Data.Foldable.Foldable f) => f Prim.Number -> Prim.Number
foreign import all :: forall a f. (Data.Foldable.Foldable f) => (a -> Prim.Boolean) -> f a -> Prim.Boolean
foreign import any :: forall a f. (Data.Foldable.Foldable f) => (a -> Prim.Boolean) -> f a -> Prim.Boolean
foreign import or :: forall f. (Data.Foldable.Foldable f) => f Prim.Boolean -> Prim.Boolean
foreign import and :: forall f. (Data.Foldable.Foldable f) => f Prim.Boolean -> Prim.Boolean
foreign import mconcat :: forall f m. (Data.Foldable.Foldable f, Data.Monoid.Monoid m) => f m -> m
foreign import sequence_ :: forall a f m. (Prelude.Functor m, Prelude.Applicative m, Data.Foldable.Foldable f) => f (m a) -> m {  }
foreign import for_ :: forall a b f m. (Prelude.Functor m, Prelude.Applicative m, Data.Foldable.Foldable f) => f a -> (a -> m b) -> m {  }
foreign import traverse_ :: forall a b f m. (Prelude.Functor m, Prelude.Applicative m, Data.Foldable.Foldable f) => (a -> m b) -> f a -> m {  }
foreign import fold :: forall f m. (Data.Foldable.Foldable f, Data.Monoid.Monoid m) => f m -> m
foreign import instance foldableArray :: Data.Foldable.Foldable Prim.Array
foreign import instance foldableEither :: Data.Foldable.Foldable (Data.Either.Either a)
foreign import instance foldableMaybe :: Data.Foldable.Foldable Data.Maybe.Maybe
foreign import instance foldableRef :: Data.Foldable.Foldable Data.Eq.Ref
foreign import instance foldableTuple :: Data.Foldable.Foldable (Data.Tuple.Tuple a)