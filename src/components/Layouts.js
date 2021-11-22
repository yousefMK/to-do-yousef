import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from "date-fns";
import { Avatar } from "@material-ui/core";

const drawerWidth = 240;
const listItem = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
    as: "asdsad",
  },
  {
    text: "Create New",
    icon: <AddCircleOutline color="secondary" />,
    path: "/create",
  },
];
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    activeitem: {
      backgroundColor: "#f4f4f4",
    },
    drawerPaper: { width: drawerWidth },
    title: { padding: theme.spacing(3) },
    appbar: { width: `calc(100% - ${drawerWidth}px) !important` },
    toolbar: theme.mixins.toolbar,
    date: { flexGrow: 1 },
    avatar: { marginLeft: theme.spacing(2) },
  };
});
export default function Layouts({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM yyyy")}
          </Typography>
          <Typography>Me</Typography>
          <Avatar
            className={classes.avatar}
            src="/nintendo_direct_mario.0.0.0.0.jpg"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h6" component="div" className={classes.title}>
          J Notes
        </Typography>
        <List>
          {listItem.map((item) => (
            <ListItem
              button
              onClick={() => history.push(item.path)}
              key={item.text}
              className={
                location.pathname === item.path ? classes.activeitem : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
