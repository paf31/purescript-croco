module Data.String.Regex where
import Prelude ()
foreign import data Regex :: *
foreign import search :: Data.String.Regex.Regex -> Prim.String -> Prim.Number
foreign import replaceR :: Data.String.Regex.Regex -> Prim.String -> Prim.String -> Prim.String
foreign import match :: Data.String.Regex.Regex -> Prim.String -> [Prim.String]
foreign import test :: Data.String.Regex.Regex -> Prim.String -> Prim.Boolean
foreign import regex :: Prim.String -> Prim.String -> Data.String.Regex.Regex