import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import NewAccountPage from "./pages/NewAccountPage/index"
import AdminLoginPage from "./pages/AdminLoginPage/index"
import LoginPage from "./pages/LoginPage/index"
import AdminProfilePage from "./pages/AdminProfilePage"
import Navigation from "./components/Nav"
import TeacherProfilePage from "./pages/TeacherProfilePage"
import WebViewerWindow from "./components/WebViewerWindow/webviewer"

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
        <Route path="/adminprofile">
          <Navigation />
          <AdminProfilePage />
        </Route>
        <Route path="/teacherprofile">
          <Navigation />
          <TeacherProfilePage />
        </Route>
        <Route path="/webviewer">
          <WebViewerWindow />
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;