module Data.Either where
import Prelude ()
data Either a b = Left a | Right b
foreign import isRight :: forall a b. Data.Either.Either a b -> Prim.Boolean
foreign import isLeft :: forall a b. Data.Either.Either a b -> Prim.Boolean
foreign import either :: forall a b c. (a -> c) -> (b -> c) -> Data.Either.Either a b -> c
foreign import instance functorEither :: Prelude.Functor (Data.Either.Either a)
foreign import instance applyEither :: Prelude.Apply (Data.Either.Either e)
foreign import instance applicativeEither :: Prelude.Applicative (Data.Either.Either e)
foreign import instance bindEither :: Prelude.Bind (Data.Either.Either e)
foreign import instance monadEither :: Prelude.Monad (Data.Either.Either e)
foreign import instance showEither :: (Prelude.Show a, Prelude.Show b) => Prelude.Show (Data.Either.Either a b)
foreign import instance eqEither :: (Prelude.Eq a, Prelude.Eq b) => Prelude.Eq (Data.Either.Either a b)