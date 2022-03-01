import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";


const ApplicationRoutes = () =>{
    return (
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="app-content-login">
                <LoginForm className="LoginForm "></LoginForm>
              </div>
            }
          ></Route>
          <Route
            path="/login"
            exact
            element={
              <div className="app-content-login">
                <LoginForm className="LoginForm "></LoginForm>
              </div>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <div className="app-content ">
                <HomePage className="HomePage "></HomePage>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default ApplicationRoutes;