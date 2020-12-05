import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = makeStyles({
  flex: {
    zIndex: 6,
    display: `flex`,
    justifyContent: `space-between`,
  },
  links: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});
const nav = [
  { title: "signup", path: "/signup" },
  { title: "signin", path: "/signin" },
  { title: "profile", path: "/profile" },
];
function Header() {
  const classes = styles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container className={classes.flex}>
          <Link to="/">
            <img
              src="./logo2.png"
              alt="logo"
              style={{ width: "50px", margin: "5px" }}
            />
          </Link>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.flex}
          >
            {nav.map(({ title, path }) => (
              <a href={path} key={title} className={classes.links}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
