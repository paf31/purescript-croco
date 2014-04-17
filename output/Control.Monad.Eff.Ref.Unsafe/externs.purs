module Control.Monad.Eff.Ref.Unsafe where
import Prelude ()
import Control.Monad.Eff ()
import Control.Monad.Eff.Ref ()
foreign import unsafeRunRef :: forall eff a. Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | eff) a -> Control.Monad.Eff.Eff eff a