import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="app-nav">
          <h4>= wayanadev ></h4>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
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
