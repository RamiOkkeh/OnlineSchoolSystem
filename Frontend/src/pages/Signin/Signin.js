import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setRole, setUser } from "../../actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Online School System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  BG: {
    backgroundColor: "#fef3f3",
    marginTop: "100px",
  },
}));

function SignIn({ user, setRole, setUser }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  console.log(user);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, remember);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/auth/jwt/create/"
        : "http://localhost:8000/auth/jwt/create/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("Authorization", `JWT ${data.access}`);
          let token = `JWT ${data.access}`;
          let options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          };
          let path =
            process.env.NODE_ENV === "production"
              ? "/auth/users/me/"
              : "http://localhost:8000/auth/users/me/";
          fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
              console.log("><>", data);
              setRole(data.role);
              let options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("Authorization"),
                },
                body: JSON.stringify({ userID: data.id }),
              };
              let path =
                process.env.NODE_ENV === "production"
                  ? `/${data.role.toLowerCase()}/`
                  : `http://localhost:8000/${data.role.toLowerCase()}/details`;
              fetch(path, options)
                .then((data) => data.json())
                .then((data) => {
                  console.log(">>", data[0]);
                  setUser(data[0]);
                  return <Redirect to="dashboard" />;
                });
            });
        } else {
          alert("incorrect credentials");
        }
      });
  };
  if (user.userID) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container className={classes.BG} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value.toLocaleLowerCase());
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={(e) => setRemember(e.target.checked)}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handelSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRole: (z) => dispatch(setRole(z)),
    setUser: (z) => dispatch(setUser(z)),
  };
};

const mapSateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(SignIn);
