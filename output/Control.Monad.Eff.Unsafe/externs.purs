module Control.Monad.Eff.Unsafe where
import Prelude ()
import Control.Monad.Eff ()
foreign import unsafeInterleaveEff :: forall eff1 eff2 a. Control.Monad.Eff.Eff eff1 a -> Control.Monad.Eff.Eff eff2 a