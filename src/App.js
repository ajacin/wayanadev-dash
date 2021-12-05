import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo"><h2 className="main-logo-part1 font-effect-3d">= wayana</h2>
          <h2 className="main-logo-part2">dev</h2></div>

        <nav className="app-nav">
          <ul className="nav-links">
            <li className="nav-link">Blog</li>
            <li className="nav-link ">About</li>
          </ul>
        </nav>
        {/* <LoginStatus></LoginStatus> */}
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="app-content ">
                <LoginForm className="LoginForm "></LoginForm>
              </div>
            }
          ></Route>
          <Route
            path="/login"
            exact
            element={
              <div className="app-content ">
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
    </div>
  );
}

export default App;
