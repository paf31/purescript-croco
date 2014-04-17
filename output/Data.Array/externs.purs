module Data.Array where
import Prelude ()
import Data.Maybe ()
import Data.Monoid ()
import Prelude.Unsafe ()
infixl 8 !!
foreign import sort :: forall a. (Prelude.Ord a) => [a] -> [a]
foreign import nubBy :: forall a. (a -> a -> Prim.Boolean) -> [a] -> [a]
foreign import nub :: forall a. (Prelude.Eq a) => [a] -> [a]
foreign import zipWith :: forall a b c. (a -> b -> c) -> [a] -> [b] -> [c]
foreign import range :: Prim.Number -> Prim.Number -> [Prim.Number]
foreign import filter :: forall a. (a -> Prim.Boolean) -> [a] -> [a]
foreign import concatMap :: forall a b. (a -> [b]) -> [a] -> [b]
foreign import updateAt :: forall a. Prim.Number -> a -> [a] -> [a]
foreign import deleteAt :: forall a. Prim.Number -> Prim.Number -> [a] -> [a]
foreign import insertAt :: forall a. Prim.Number -> a -> [a] -> [a]
foreign import slice :: forall a. Prim.Number -> Prim.Number -> [a] -> [a]
foreign import take :: forall a. Prim.Number -> [a] -> [a]
foreign import drop :: forall a. Prim.Number -> [a] -> [a]
foreign import reverse :: forall a. [a] -> [a]
foreign import concat :: forall a. [[a]] -> [a]
foreign import append :: forall a. [a] -> [a] -> [a]
foreign import elemLastIndex :: forall a. [a] -> a -> Prim.Number
foreign import elemIndex :: forall a. [a] -> a -> Prim.Number
foreign import elem :: forall a. [a] -> a -> Prim.Boolean
foreign import length :: forall a. [a] -> Prim.Number
foreign import map :: forall a b. (a -> b) -> [a] -> [b]
foreign import null :: forall a. [a] -> Prim.Boolean
foreign import init :: forall a. [a] -> Data.Maybe.Maybe [a]
foreign import tail :: forall a. [a] -> Data.Maybe.Maybe [a]
foreign import last :: forall a. [a] -> Data.Maybe.Maybe a
foreign import head :: forall a. [a] -> Data.Maybe.Maybe a
foreign import singleton :: forall a. a -> [a]
foreign import snoc :: forall a. [a] -> a -> [a]
foreign import (!!) :: forall a. [a] -> Prim.Number -> Data.Maybe.Maybe a
foreign import instance functorArray :: Prelude.Functor Prim.Array
foreign import instance applyArray :: Prelude.Apply Prim.Array
foreign import instance applicativeArray :: Prelude.Applicative Prim.Array
foreign import instance bindArray :: Prelude.Bind Prim.Array
foreign import instance monadArray :: Prelude.Monad Prim.Array
foreign import instance semigroupArray :: Prelude.Semigroup [a]
foreign import instance monoidArray :: Data.Monoid.Monoid [a]
foreign import instance alternativeArray :: Prelude.Alternative Prim.Array