module Prelude where
infixr 9 >>>
infixr 9 <<<
infixr 0 $
infixl 0 #
infixr 6 :
infixl 4 <$>
infixl 4 <*>
infixl 3 <|>
infixl 1 >>=
infixl 7 *
infixl 7 /
infixl 7 %
infixl 6 -
infixl 6 +
infix 4 ==
infix 4 /=
infixl 4 <
infixl 4 >
infixl 4 <=
infixl 4 >=
infixl 10 &
infixl 10 |
infixl 10 ^
infixr 2 ||
infixr 3 &&
infixr 5 <>
infixr 5 ++
data Ordering  = LT  | GT  | EQ 
class Semigroup a where
  (<>) :: a -> a -> a
class BoolLike b where
  (&&) :: b -> b -> b
  (||) :: b -> b -> b
  not :: b -> b
class Bits b where
  (&) :: b -> b -> b
  (|) :: b -> b -> b
  (^) :: b -> b -> b
  shl :: b -> Prim.Number -> b
  shr :: b -> Prim.Number -> b
  zshr :: b -> Prim.Number -> b
  complement :: b -> b
class (Prelude.Eq a) <= Ord a where
  compare :: a -> a -> Prelude.Ordering
class Eq a where
  (==) :: a -> a -> Prim.Boolean
  (/=) :: a -> a -> Prim.Boolean
class Num a where
  (+) :: a -> a -> a
  (-) :: a -> a -> a
  (*) :: a -> a -> a
  (/) :: a -> a -> a
  (%) :: a -> a -> a
  negate :: a -> a
class (Prelude.Applicative m, Prelude.Bind m) <= Monad m where
class (Prelude.Apply m) <= Bind m where
  (>>=) :: forall a b. m a -> (a -> m b) -> m b
class Alternative f where
  empty :: forall a. f a
  (<|>) :: forall a. f a -> f a -> f a
class (Prelude.Apply f) <= Applicative f where
  pure :: forall a. a -> f a
class (Prelude.Functor f) <= Apply f where
  (<*>) :: forall a b. f (a -> b) -> f a -> f b
class Functor f where
  (<$>) :: forall a b. (a -> b) -> f a -> f b
class Show a where
  show :: a -> Prim.String
class (Prelude.Semigroupoid a) <= Category a where
  id :: forall t. a t t
class Semigroupoid a where
  (<<<) :: forall b c d. a c d -> a b c -> a b d
foreign import (++) :: forall s. (Prelude.Semigroup s) => s -> s -> s
foreign import concatString :: Prim.String -> Prim.String -> Prim.String
foreign import boolNot :: Prim.Boolean -> Prim.Boolean
foreign import boolOr :: Prim.Boolean -> Prim.Boolean -> Prim.Boolean
foreign import boolAnd :: Prim.Boolean -> Prim.Boolean -> Prim.Boolean
foreign import numComplement :: Prim.Number -> Prim.Number
foreign import numXor :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numOr :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numAnd :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numZshr :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numShr :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numShl :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numCompare :: Prim.Number -> Prim.Number -> Prelude.Ordering
foreign import (>=) :: forall a. (Prelude.Ord a) => a -> a -> Prim.Boolean
foreign import (<=) :: forall a. (Prelude.Ord a) => a -> a -> Prim.Boolean
foreign import (>) :: forall a. (Prelude.Ord a) => a -> a -> Prim.Boolean
foreign import (<) :: forall a. (Prelude.Ord a) => a -> a -> Prim.Boolean
foreign import refIneq :: forall a. a -> a -> Prim.Boolean
foreign import refEq :: forall a. a -> a -> Prim.Boolean
foreign import numNegate :: Prim.Number -> Prim.Number
foreign import numMod :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numDiv :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numMul :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numSub :: Prim.Number -> Prim.Number -> Prim.Number
foreign import numAdd :: Prim.Number -> Prim.Number -> Prim.Number
foreign import ap :: forall m a b. (Prelude.Monad m) => m (a -> b) -> m a -> m b
foreign import liftM1 :: forall m a b. (Prelude.Monad m) => (a -> b) -> m a -> m b
foreign import return :: forall m a. (Prelude.Monad m) => a -> m a
foreign import liftA1 :: forall f a b. (Prelude.Applicative f) => (a -> b) -> f a -> f b
foreign import showArrayImpl :: forall a. (a -> Prim.String) -> [a] -> Prim.String
foreign import showNumberImpl :: Prim.Number -> Prim.String
foreign import showStringImpl :: Prim.String -> Prim.String
foreign import cons :: forall a. a -> [a] -> [a]
foreign import (:) :: forall a. a -> [a] -> [a]
foreign import (#) :: forall a b. a -> (a -> b) -> b
foreign import ($) :: forall a b. (a -> b) -> a -> b
foreign import (>>>) :: forall a b c d. (Prelude.Semigroupoid a) => a b c -> a c d -> a b d
foreign import asTypeOf :: forall a. a -> a -> a
foreign import const :: forall a b. a -> b -> a
foreign import flip :: forall a b c. (a -> b -> c) -> b -> a -> c
foreign import instance semigroupoidArr :: Prelude.Semigroupoid Prim.Function
foreign import instance categoryArr :: Prelude.Category Prim.Function
foreign import instance showString :: Prelude.Show Prim.String
foreign import instance showBoolean :: Prelude.Show Prim.Boolean
foreign import instance showNumber :: Prelude.Show Prim.Number
foreign import instance showArray :: (Prelude.Show a) => Prelude.Show [a]
foreign import instance numNumber :: Prelude.Num Prim.Number
foreign import instance eqString :: Prelude.Eq Prim.String
foreign import instance eqNumber :: Prelude.Eq Prim.Number
foreign import instance eqBoolean :: Prelude.Eq Prim.Boolean
foreign import instance eqArray :: (Prelude.Eq a) => Prelude.Eq [a]
foreign import instance eqOrdering :: Prelude.Eq Prelude.Ordering
foreign import instance showOrdering :: Prelude.Show Prelude.Ordering
foreign import instance ordNumber :: Prelude.Ord Prim.Number
foreign import instance bitsNumber :: Prelude.Bits Prim.Number
foreign import instance boolLikeBoolean :: Prelude.BoolLike Prim.Boolean
foreign import instance semigroupString :: Prelude.Semigroup Prim.String