module Data.Monoid where
import Prelude ()
class (Prelude.Semigroup m) <= Monoid m where
  mempty :: m
foreign import instance monoidString :: Data.Monoid.Monoid Prim.String