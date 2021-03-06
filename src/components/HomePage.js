import React, { useEffect, useState } from "react";
import "../styles.css";
import Styles from "../styles/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserCard } from "./UserCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import AppDrawer from "./AppDrawer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginForm() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const loginStatusState = useSelector((state) => state.LoginStatusReducer);
  //logout
  const { logout, user, isAuthenticated } = useAuth0();
  const LogoutApp = () => {
    logout();
  };
  //logut end
  // gloabl states
  const state = useSelector((state) => state.ConfigurationsReducer);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // const {user,isAuthenticated} =useAuth0();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    setOpen(true);
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div className={Styles.HomePage}>
          <AppDrawer></AppDrawer>
        </div>
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Welcome {user?.name}.
        </Alert>
      </Snackbar>
    </>
  );
}
