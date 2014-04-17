module Data.Graph where
import Prelude ()
import Data.Maybe ()
import Data.Array ()
import Data.Foldable ()
import Data.Traversable ()
import Control.Monad ()
import Control.Monad.Eff ()
import Control.Monad.ST ()
import Data.Map ()
import Data.Set ()
data Graph v = Graph [v] [Data.Graph.Edge v]
data Edge v = Edge v v
foreign import topSort :: forall v. (Prelude.Eq v, Prelude.Ord v) => Data.Graph.Graph v -> [v]
foreign import scc :: forall v. (Prelude.Eq v, Prelude.Ord v) => Data.Graph.Graph v -> [[v]]