module Data.Monoid.First where
import Prelude ()
import Data.Maybe ()
import Data.Monoid ()
data First a = First (Data.Maybe.Maybe a)
foreign import runFirst :: forall a. Data.Monoid.First.First a -> Data.Maybe.Maybe a
foreign import instance showFirst :: (Prelude.Show a) => Prelude.Show (Data.Monoid.First.First a)
foreign import instance semigroupFirst :: Prelude.Semigroup (Data.Monoid.First.First a)
foreign import instance monoidFirst :: Data.Monoid.Monoid (Data.Monoid.First.First a)