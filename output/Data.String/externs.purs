module Data.String where
import Prelude ()
foreign import joinWith :: [Prim.String] -> Prim.String -> Prim.String
foreign import trim :: Prim.String -> Prim.String
foreign import toUpper :: Prim.String -> Prim.String
foreign import toLower :: Prim.String -> Prim.String
foreign import substring :: Prim.Number -> Prim.Number -> Prim.String -> Prim.String
foreign import substr :: Prim.Number -> Prim.Number -> Prim.String -> Prim.String
foreign import split :: Prim.String -> Prim.String -> [Prim.String]
foreign import slice :: Prim.Number -> Prim.Number -> Prim.String -> Prim.String
foreign import replace :: Prim.String -> Prim.String -> Prim.String -> Prim.String
foreign import localeCompare :: Prim.String -> Prim.String -> Prim.Number
foreign import length :: Prim.String -> Prim.Number
foreign import lastIndexOf :: Prim.String -> Prim.String -> Prim.Number
foreign import indexOf :: Prim.String -> Prim.String -> Prim.Number
foreign import fromCharCode :: Prim.Number -> Prim.String
foreign import charAt :: Prim.Number -> Prim.String -> Prim.String