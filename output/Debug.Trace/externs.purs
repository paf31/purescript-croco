module Debug.Trace where
import Prelude ()
import Control.Monad.Eff ()
foreign import data Trace :: !
foreign import print :: forall a r. (Prelude.Show a) => a -> Control.Monad.Eff.Eff (trace :: Debug.Trace.Trace | r) {  }
foreign import trace :: forall r. Prim.String -> Control.Monad.Eff.Eff (trace :: Debug.Trace.Trace | r) {  }