import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../reducers/rootReducer";
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

function Header({ user }: any) {
  const classes = styles();
  const nav = user.userID
    ? [{ title: "profile", path: "/profile" }]
    : [
      { title: "signup", path: "/signup" },
      { title: "signin", path: "/signin" },
    ];
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
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
              <Link to={path} key={title} className={classes.links}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
            {
              user.userID ?
                <Link className={classes.links} to="/signin" onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => localStorage.removeItem("Authorization")}>
                  <ListItem button>
                    <ListItemText primary="signout" />
                  </ListItem>
                </Link>
                : <div></div>
            }
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
