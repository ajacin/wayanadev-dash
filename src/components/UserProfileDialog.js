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

export default function UserProfileDialog({ open, user }) {
  //   const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open}>
      <DialogTitle>Profile Information</DialogTitle>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {user.nickname}
                </Typography>
                {` | ${user.email}`}
              </React.Fragment>
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        {`>>>>>>> CLOSE PROFILE INFORMATION !!!`}
      </List>
    </Dialog>
  );
}
