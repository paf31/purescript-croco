module Data.Eq where
import Prelude ()
data Ref a = Ref a
foreign import liftRef :: forall a b. (a -> a -> b) -> Data.Eq.Ref a -> Data.Eq.Ref a -> b
foreign import instance eqRef :: Prelude.Eq (Data.Eq.Ref a)