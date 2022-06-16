import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import { SettingsInputComponent } from "@material-ui/icons";

export default function UserProfileDialog({ open, setOpen, user }) {
  //   const [open, setOpen] = React.useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <ClearIcon
        onClick={closeModal}
        style={{ alignSelf: "flex-end", color: "red", cursor: "pointer" }}
      />
      <DialogTitle>Profile Information</DialogTitle>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={<>{`${user.email}`}</>}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText secondary={<>{`Nickname : ${user.nickname}`}</>} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={<>{`Locale : ${user.locale}`}</>} />
        </ListItem>
        <ListItem>
          <ListItemText
            secondary={
              <>{`Email verified : ${user.email_verified ? "Yes" : "No"}`}</>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText secondary={<>{`${user.sub}`}</>} />
        </ListItem>
      </List>
    </Dialog>
  );
}
