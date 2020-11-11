import React, { useContext, useEffect, useState } from "react"
import { PictureService } from "../../services/PictureService"
import { Picture } from "../../entities/Picture"
import { PictureListItem } from "./PictureListItem"
import { ShopContext } from "../../contexts"
import "./PictureList.css"

export const PictureList: React.FC = () => {
    const service = PictureService()
    const { genre } = useContext(ShopContext)
    const [ pictures, setPictures ] = useState<Picture[]>([])

    useEffect(() => {
        setPictures(service.list(genre))
    }, [genre])

    return (
        <ul className="pictureList">
            { pictures.map(picture => (
                <PictureListItem picture={picture} key={picture.id} />
            )) }
        </ul>
    )
}
