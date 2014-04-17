module Data.Tuple where
import Prelude ()
import Data.Array ()
import Data.Monoid ()
data Tuple a b = Tuple a b
foreign import swap :: forall a b. Data.Tuple.Tuple a b -> Data.Tuple.Tuple b a
foreign import unzip :: forall a b. [Data.Tuple.Tuple a b] -> Data.Tuple.Tuple [a] [b]
foreign import zip :: forall a b. [a] -> [b] -> [Data.Tuple.Tuple a b]
foreign import uncurry :: forall a b c. (a -> b -> c) -> Data.Tuple.Tuple a b -> c
foreign import curry :: forall a b c. (Data.Tuple.Tuple a b -> c) -> a -> b -> c
foreign import snd :: forall a b. Data.Tuple.Tuple a b -> b
foreign import fst :: forall a b. Data.Tuple.Tuple a b -> a
foreign import instance showTuple :: (Prelude.Show a, Prelude.Show b) => Prelude.Show (Data.Tuple.Tuple a b)
foreign import instance eqTuple :: (Prelude.Eq a, Prelude.Eq b) => Prelude.Eq (Data.Tuple.Tuple a b)
foreign import instance ordTuple :: (Prelude.Ord a, Prelude.Ord b) => Prelude.Ord (Data.Tuple.Tuple a b)
foreign import instance functorTuple :: Prelude.Functor (Data.Tuple.Tuple a)
foreign import instance applyTuple :: (Prelude.Semigroup a) => Prelude.Apply (Data.Tuple.Tuple a)
foreign import instance applicativeTuple :: (Data.Monoid.Monoid a) => Prelude.Applicative (Data.Tuple.Tuple a)
foreign import instance bindTuple :: (Prelude.Semigroup a) => Prelude.Bind (Data.Tuple.Tuple a)
foreign import instance monadTuple :: (Data.Monoid.Monoid a) => Prelude.Monad (Data.Tuple.Tuple a)