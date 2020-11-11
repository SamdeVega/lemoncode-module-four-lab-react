import React from "react"
import { Cart } from "../components/cart/Cart"
import { Checkout } from "../components/checkout/Checkout"
import { Menu } from "../components/menu/Menu"
import "./ShopPage.css"

export const CheckoutPage: React.FC = () => {
    return (
        <>
            <Menu isCheckout={true} />
            <div className="shop">
                <Cart isCheckout={true} />
                <Checkout />
            </div>
        </>
    )
}
