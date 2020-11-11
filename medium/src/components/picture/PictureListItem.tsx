import { Checkbox } from "@material-ui/core"
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel"
import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../contexts"
import { Picture } from "../../entities/Picture"
import { CartService } from "../../services/CartService"
import { PictureDetail } from "./PictureDetail"
import "./PictureListItem.css"

interface PictureProps {
    picture: Picture
}

export const PictureListItem = (props: PictureProps) => {
    const { isSelected, toggleItem } = CartService()
    const { picture } = props
    const [ selected, setSelected ] = useState<boolean>(isSelected(picture))
    const { items } = useContext(ShopContext)

    useEffect(() => {
        setSelected(isSelected(picture))
    }, [items])

    return (
        <li className="pictureItem">
            <PictureDetail picture={picture} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={selected}
                        onChange={() => toggleItem(picture)}
                        color="primary"
                    />
                }
                label="Buy"
            />
        </li>
    )
}
