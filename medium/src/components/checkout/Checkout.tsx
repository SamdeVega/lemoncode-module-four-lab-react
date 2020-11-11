import { Button, FormControl, Input, InputLabel, Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import React from "react"

export const Checkout = () => {
    return (
        <div style={{marginLeft: '20px', width: '100%'}}>
            <Typography variant="h5">Checkout</Typography>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" />
            </FormControl>
            <Box m={3} />
            <Typography>Credit Card</Typography>
            <span style={{marginRight: '10px'}}>
                <FormControl>
                    <InputLabel htmlFor="cardNumber">Number</InputLabel>
                    <Input id="cardNumber" />
                </FormControl>
            </span>
            <span style={{marginRight: '10px'}}>
                <FormControl>
                    <InputLabel htmlFor="cardFirstName">First name</InputLabel>
                    <Input id="cardFirstName" />
                </FormControl>
            </span>
            <FormControl>
                <InputLabel htmlFor="cardLastName">Last name</InputLabel>
                <Input id="cardLastName" />
            </FormControl>
            <Box m={1} />
            <span style={{marginRight: '10px'}}>
                <FormControl>
                    <InputLabel htmlFor="cardExpiration">Expiration Date</InputLabel>
                    <Input id="cardExpiration" />
                </FormControl>
            </span>
            <FormControl>
                <InputLabel htmlFor="cardCVV">CVV</InputLabel>
                <Input id="cardCVV" />
            </FormControl>
            <Box m={3} />
            <Button variant="contained" color="primary">Pay</Button>
        </div>
    )
}
