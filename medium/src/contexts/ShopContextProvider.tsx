import React, { useState } from "react"
import { ShopContext } from "."
import { Picture } from "../entities/Picture"
import { PictureGenre } from "../services/PictureService"

export const ShopContextProvider = ({ children }) => {
    const [ genre, setGenre ] = useState<PictureGenre>(PictureGenre.Kitties)
    const [ items, setItems ] = useState<Picture[]>([])
    const context = { genre, setGenre, items, setItems }

    return (
      <ShopContext.Provider value={ context }> 
        { children }
      </ShopContext.Provider>
    )
}
