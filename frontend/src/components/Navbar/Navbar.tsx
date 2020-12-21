import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = makeStyles({
  root: {
    display: "flex",
  },
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

function Navbar({ user, userDetails }: any) {
  const [navItems, setNavItems] = useState<any[]>([]);
  const classes = styles();
  console.log("navItems >>>>", userDetails, navItems);

  useEffect(() => {
    setNavItems(
      userDetails.role === undefined
        ? [
            { title: "DashBoard", path: "/dashboard" },
            { title: "Stats", path: "/stats" },
            { title: "Schedule", path: "/schedule" },
            { title: "Tests", path: "/tests" },
            { title: "Bills", path: "/bills" },
            // { title: "Options", path: "/options" },
            // { title: "Classroom", path: "/classroom" }, //for chat page
          ]
        : userDetails.role === "Teacher"
        ? [
            { title: "DashBoard", path: "/dashboard" },
            { title: "Tests", path: "/tests" },
            { title: "Classes", path: "/classes" },
            // { title: "Options", path: "/options" },
          ]
        : userDetails.role === "Principal"
        ? [
            { title: "DashBoard", path: "/dashboard" },
            { title: "Schedule", path: "/schedule" },
            { title: "Bills", path: "/bills" },
            { title: "Classes", path: "/classes" },
            // { title: "Options", path: "/options" },
          ]
        : [{ title: "DashBoard", path: "/dashboard" }]
    );
  }, [userDetails]);

  return (
    <div className={classes.root}>
      <CssBaseline />
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
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
  };
};
export default connect(mapStateToProps)(Navbar);
