module Control.Monad.ST where
import Prelude ()
import Control.Monad.Eff ()
foreign import data STArray :: * -> * -> *
foreign import data STRef :: * -> * -> *
foreign import data ST :: * -> !
foreign import runSTArray :: forall a r. (forall h. Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) (Control.Monad.ST.STArray h a)) -> Control.Monad.Eff.Eff r [a]
foreign import runST :: forall a r. (forall h. Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a) -> Control.Monad.Eff.Eff r a
foreign import pokeSTArray :: forall a h r. Control.Monad.ST.STArray h a -> Prim.Number -> a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a
foreign import peekSTArray :: forall a h r. Control.Monad.ST.STArray h a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a
foreign import newSTArray :: forall a h r. Prim.Number -> a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) (Control.Monad.ST.STArray h a)
foreign import writeSTRef :: forall a h r. Control.Monad.ST.STRef h a -> a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a
foreign import modifySTRef :: forall a h r. Control.Monad.ST.STRef h a -> (a -> a) -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a
foreign import readSTRef :: forall a h r. Control.Monad.ST.STRef h a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) a
foreign import newSTRef :: forall a h r. a -> Control.Monad.Eff.Eff (st :: Control.Monad.ST.ST h | r) (Control.Monad.ST.STRef h a)