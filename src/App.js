import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="app-header ">
        <nav className="app-nav">
          <h2 className="main-logo-part1">= wayana</h2>
          <h2 className="main-logo-part2">dev ></h2>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
