module Data.Set where
import Prelude ()
import Data.Array ()
import Data.Foldable ()
import Data.Maybe ()
import Data.Tuple ()
data Set a
foreign import union :: forall a. (Prelude.Eq a, Prelude.Ord a) => Data.Set.Set a -> Data.Set.Set a -> Data.Set.Set a
foreign import fromList :: forall a. (Prelude.Eq a, Prelude.Ord a) => [a] -> Data.Set.Set a
foreign import toList :: forall a. Data.Set.Set a -> [a]
foreign import delete :: forall a. (Prelude.Eq a, Prelude.Ord a) => a -> Data.Set.Set a -> Data.Set.Set a
foreign import member :: forall a. (Prelude.Eq a, Prelude.Ord a) => a -> Data.Set.Set a -> Prim.Boolean
foreign import insert :: forall a. (Prelude.Eq a, Prelude.Ord a) => a -> Data.Set.Set a -> Data.Set.Set a
foreign import singleton :: forall a. a -> Data.Set.Set a
foreign import empty :: forall a. Data.Set.Set a
foreign import instance eqSet :: (Prelude.Eq a) => Prelude.Eq (Data.Set.Set a)
foreign import instance showSet :: (Prelude.Show a) => Prelude.Show (Data.Set.Set a)