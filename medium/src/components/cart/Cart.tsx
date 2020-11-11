import React, { useContext, useState } from "react"
import { ShopContext } from "../../contexts"
import { CartItem } from "./CartItem"
import "./Cart.css"
import { Box, Button, Typography } from "@material-ui/core"
import ClearIcon from '@material-ui/icons/Clear'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PaymentIcon from '@material-ui/icons/Payment'
import { Link } from "react-router-dom"

type CartProps = {
    isCheckout?: boolean,
}

export const Cart = (props: CartProps = {isCheckout: false}) => {
    const { items, setItems } = useContext(ShopContext)
    const [ visible, setVisible ] = useState<boolean>(true)
    const isCheckout = props.isCheckout

    return (
        <div className="cart">
            { !isCheckout &&
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setVisible(!visible)}
                    >
                        { visible ? '🙈 Hide cart' : '🐵 Show cart' }
                    </Button>
                    <Box m={3} />
                </>
            }
            { visible &&
            <>
                <Typography variant="h5">
                    <ShoppingCartIcon /> Cart
                </Typography>
                <Box m={1} />
                { (!!items.length && !isCheckout) &&
                    <>
                        <Link to="/checkout">
                            <Button
                                variant="contained"
                                color="primary"
                                className="inlineBtn"
                            >
                                <PaymentIcon /> Checkout
                            </Button>
                        </Link>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => setItems([])}
                            className="inlineBtn"
                        >
                            <ClearIcon /> Clear cart
                        </Button>
                    </>
                }  
                <ul className="cartList">
                    { items.map(item => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </ul>
            </>
            }
        </div>
    )
}
