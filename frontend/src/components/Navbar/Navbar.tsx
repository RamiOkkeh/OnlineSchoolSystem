import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"
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


function Navbar({ user , userDetails }: any) {
  const classes = styles();
  console.log("homepageUser", userDetails)



  const navItems =
    userDetails.role === "Student" ?
      [{ title: "DashBoard", path: "/dashboard" },
      { title: "Schedule", path: "/schedule" },
      { title: "Stats", path: "/stats" },
      { title: "Tests", path: "/tests" },
      { title: "Bills", path: "/bills" },
      { title: "Options", path: "/options" },
      { title: "Classes", path: "/classes" }]
      :
      userDetails.role === "Teacher" ?
      [{ title: "DashBoard", path: "/dashboard" },
      { title: "Tests", path: "/tests" },
      { title: "Options", path: "/options" },
      { title: "Classes", path: "/classes" }]
      : userDetails.role === "Principal" ?
      [{ title: "DashBoard", path: "/dashboard" },
      { title: "Schedule", path: "/schedule" },
      { title: "Bills", path: "/bills" },
      { title: "Options", path: "/options" },
      { title: "Classes", path: "/classes" }]
      :[{ title: "DashBoard", path: "/dashboard" },]


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

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
  };
};
export default connect(mapStateToProps)(Navbar);