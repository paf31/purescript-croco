module Data.Map where
import Prelude ()
import Data.Array ()
import Data.Foldable ()
import Data.Maybe ()
import Data.Tuple ()
data Map k v
foreign import map :: forall k v1 v2. (Prelude.Eq k, Prelude.Ord k) => (v1 -> v2) -> Data.Map.Map k v1 -> Data.Map.Map k v2
foreign import union :: forall k v. (Prelude.Eq k, Prelude.Ord k) => Data.Map.Map k v -> Data.Map.Map k v -> Data.Map.Map k v
foreign import fromList :: forall k v. (Prelude.Eq k, Prelude.Ord k) => [Data.Tuple.Tuple k v] -> Data.Map.Map k v
foreign import toList :: forall k v. Data.Map.Map k v -> [Data.Tuple.Tuple k v]
foreign import alter :: forall k v. (Prelude.Eq k, Prelude.Ord k) => (Data.Maybe.Maybe v -> Data.Maybe.Maybe v) -> k -> Data.Map.Map k v -> Data.Map.Map k v
foreign import delete :: forall k v. (Prelude.Eq k, Prelude.Ord k) => k -> Data.Map.Map k v -> Data.Map.Map k v
foreign import lookup :: forall k v. (Prelude.Eq k, Prelude.Ord k) => k -> Data.Map.Map k v -> Data.Maybe.Maybe v
foreign import insert :: forall k v. (Prelude.Eq k, Prelude.Ord k) => k -> v -> Data.Map.Map k v -> Data.Map.Map k v
foreign import singleton :: forall k v. k -> v -> Data.Map.Map k v
foreign import empty :: forall k v. Data.Map.Map k v
foreign import instance eqMap :: (Prelude.Eq k, Prelude.Eq v) => Prelude.Eq (Data.Map.Map k v)
foreign import instance showMap :: (Prelude.Show k, Prelude.Show v) => Prelude.Show (Data.Map.Map k v)