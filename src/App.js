import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import LoginStatus from './components/LoginStatus'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationRoutes from "./components/ApplicationRoutes";
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo"><h2 className="main-logo-part1 font-effect-3d">= wayana</h2>
          <h2 className="main-logo-part2">dev &gt;</h2></div>

      <Navigation></Navigation>
        {/* <LoginStatus></LoginStatus> */}
      </header>
      <ApplicationRoutes></ApplicationRoutes>
      <footer>
        <a href="https://www.linkedin.com/in/ajacin/" target="_blank">© 2022 Arun Jacob.  All rights reserved</a>
      </footer>
    </div>
  );
}

export default App;
