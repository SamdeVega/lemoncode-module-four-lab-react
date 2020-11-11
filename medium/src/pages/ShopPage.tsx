import React from "react"
import { Cart } from "../components/cart/Cart"
import { Menu } from "../components/menu/Menu"
import { PictureList } from "../components/picture/PictureList"
import "./ShopPage.css"

export const ShopPage: React.FC = () => {
    return (
        <>
            <Menu />
            <div className="shop">
                <PictureList />
                <Cart />
            </div>
        </>
    )
}
