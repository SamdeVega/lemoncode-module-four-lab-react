import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ShopContextProvider } from "./contexts/ShopContextProvider"
import { CheckoutPage } from "./pages/CheckoutPage"
import { ShopPage } from "./pages/ShopPage"

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShopContextProvider>
            <ShopPage />
          </ShopContextProvider>
        </Route>
        <Route exact path="/checkout">
          <ShopContextProvider>
            <CheckoutPage />
          </ShopContextProvider>
        </Route>
      </Switch>
    </Router>
  )
}
