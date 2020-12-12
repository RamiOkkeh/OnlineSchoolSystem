import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = makeStyles({
  nav: {
    position: "fixed",
    width: "13%",
    height: "100%",
    backgroundColor: "lightGreen",
    zIndex: 5,
    paddingTop: "100px",
    left: "0px",
  },
  flex: {
    // float: "left",
    display: "flex",
    flexFlow: "column",
  },
  links: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});
const navItems = [
  { title: "DashBoard", path: "/dashboard" },
  { title: "Schedule", path: "/schedule" },
  { title: "Classes", path: "/classes" },
  { title: "Tests", path: "/tests" },
  { title: "Stats", path: "/stats" },
  { title: "Bills", path: "/bills" },
  { title: "Options", path: "/options" },
];

function Navbar() {
  const classes = styles();
  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.flex}
        >
          {navItems.map(({ title, path }) => (
            <Link to={path} key={title} className={classes.links}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
