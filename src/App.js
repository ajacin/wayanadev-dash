import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import LoginStatus from './components/LoginStatus'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationRoutes from "./components/ApplicationRoutes";
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo"><h2 className="main-logo-part1 font-effect-3d">= wayana</h2>
          <h2 className="main-logo-part2">dev &gt;</h2></div>

        <nav className="app-nav">
          <ul className="nav-links">
            <li className="nav-link">Blog</li>
            <li className="nav-link ">About</li>
          </ul>
        </nav>
        {/* <LoginStatus></LoginStatus> */}
      </header>
      <ApplicationRoutes></ApplicationRoutes>
      <footer>
        <a href="https://www.linkedin.com/in/ajacin/" target="_blank">arun jacob</a>
      </footer>
    </div>
  );
}

export default App;
