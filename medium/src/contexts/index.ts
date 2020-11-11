import { Context, createContext } from "react";
import { Picture } from "../entities/Picture";
import { PictureGenre } from "../services/PictureService";

type ContextProps = {
    genre: PictureGenre,
    setGenre: React.Dispatch<React.SetStateAction<PictureGenre>>
    items: Picture[],
    setItems: React.Dispatch<React.SetStateAction<Picture[]>>
}

export const ShopContext = createContext<Partial<ContextProps>>({})
