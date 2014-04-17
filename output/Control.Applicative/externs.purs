module Control.Applicative where
import Prelude ()
infixl 4 <*
infixl 4 *>
foreign import lift3 :: forall a b c d f. (Prelude.Functor f, Prelude.Applicative f) => (a -> b -> c -> d) -> f a -> f b -> f c -> f d
foreign import lift2 :: forall a b c f. (Prelude.Functor f, Prelude.Applicative f) => (a -> b -> c) -> f a -> f b -> f c
foreign import (*>) :: forall a b f. (Prelude.Functor f, Prelude.Applicative f) => f a -> f b -> f b
foreign import (<*) :: forall a b f. (Prelude.Functor f, Prelude.Applicative f) => f a -> f b -> f a