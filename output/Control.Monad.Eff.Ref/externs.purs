module Control.Monad.Eff.Ref where
import Prelude ()
import Control.Monad.Eff ()
foreign import data RefVal :: * -> *
foreign import data Ref :: !
foreign import writeRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) {  }
foreign import modifyRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> (s -> s) -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) {  }
foreign import readRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) s
foreign import newRef :: forall s r. s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) (Control.Monad.Eff.Ref.RefVal s)