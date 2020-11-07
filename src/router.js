import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import NewAccountPage from "./pages/NewAccountPage/index"
import AdminLoginPage from "./pages/AdminLoginPage/index"
import LoginPage from "./pages/LoginPage/index"
import Navigate from "./pages/LoginPage/navbar-loginpage"

function Routes () {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/newaccount">
          <NewAccountPage />
        </Route>
        <Route path="/adminlogin">
          <AdminLoginPage />
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;