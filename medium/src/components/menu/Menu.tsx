import React, { useContext } from "react"
import { ShopContext } from "../../contexts"
import { PictureGenre } from "../../services/PictureService"
import { AppBar, Box, Button, Toolbar } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./Menu.css"

type MenuProps = {
    isCheckout?: boolean,
}

export const Menu = (props: MenuProps) => {
    const { setGenre } = useContext(ShopContext)
    const isCheckout = props.isCheckout

    return (
        <>
            <AppBar className="menu" position="static">
                <Toolbar>
                    { isCheckout
                        ? <Link to="/">
                            <Button
                                onClick={() => setGenre(PictureGenre.Kitties)}
                            >Continue shopping</Button>
                        </Link>
                        :
                        <>
                            <Button
                            color="inherit"
                            onClick={() => setGenre(PictureGenre.Kitties)}
                            >🐱 Kitties</Button>
                            <Button
                                color="inherit"
                                onClick={() => setGenre(PictureGenre.Puppies)}
                            >🐶 Puppies</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
            <Box m={3} />
        </>
    )
}
