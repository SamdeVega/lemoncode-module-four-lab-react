import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import React from "react";
import { Picture } from "../../entities/Picture"
import { CartService } from "../../services/CartService"
import { PictureDetail } from "../picture/PictureDetail"
import "./CartItem.css"

interface ItemProps {
    item: Picture
}

export const CartItem = (props: ItemProps) => {
    const { toggleItem } = CartService()
    const { item } = props

    return (
        <li className="cartItem">
            <PictureDetail picture={item} />
            <Button
                variant="contained"
                color="secondary"
                className="removeBtn"
                onClick={() => toggleItem(item)}
            >
                <DeleteIcon />
            </Button>
        </li>
    )
}
