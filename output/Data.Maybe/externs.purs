module Data.Maybe where
import Prelude ()
data Maybe a = Nothing  | Just a
foreign import isNothing :: forall a. Data.Maybe.Maybe a -> Prim.Boolean
foreign import isJust :: forall a. Data.Maybe.Maybe a -> Prim.Boolean
foreign import fromMaybe :: forall a. a -> Data.Maybe.Maybe a -> a
foreign import maybe :: forall a b. b -> (a -> b) -> Data.Maybe.Maybe a -> b
foreign import instance functorMaybe :: Prelude.Functor Data.Maybe.Maybe
foreign import instance applyMaybe :: Prelude.Apply Data.Maybe.Maybe
foreign import instance applicativeMaybe :: Prelude.Applicative Data.Maybe.Maybe
foreign import instance alternativeMaybe :: Prelude.Alternative Data.Maybe.Maybe
foreign import instance bindMaybe :: Prelude.Bind Data.Maybe.Maybe
foreign import instance monadMaybe :: Prelude.Monad Data.Maybe.Maybe
foreign import instance showMaybe :: (Prelude.Show a) => Prelude.Show (Data.Maybe.Maybe a)
foreign import instance eqMaybe :: (Prelude.Eq a) => Prelude.Eq (Data.Maybe.Maybe a)
foreign import instance ordMaybe :: (Prelude.Ord a) => Prelude.Ord (Data.Maybe.Maybe a)