import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import { setUser } from "../../actions/actions";
import { Dispatch } from "redux";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  BG: {
    backgroundColor: "#fef3f3",
    marginTop: "100px",
  },
  school: {
    width: "100px",
  },
}));

const schoolCoder = function (string: any) {
  var hash = 0;
  if (string.length === 0) {
    return hash;
  }
  for (var i = 0; i < string.length; i++) {
    var char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return Math.abs(hash);
};

function CreateSchool({ role, user, setUser }: any) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function submit(e: any) {
    e.preventDefault();

    let options: any = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ name, address, schoolCode: schoolCoder(name) }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/school/"
        : "http://localhost:8000/school/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data, user);
        let options: any = {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify({ schoolID: data.id, userID: user.id }),
        };
        let path =
          process.env.NODE_ENV === "production"
            ? "/principal/"
            : "http://localhost:8000/principal/";
        fetch(path, options)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setUser(data);
          });
      });
  }
  if (role !== "Principal") {
    return <Redirect to="Dashboard" />;
  }

  return (
    <Container className={classes.BG} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create School
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="schoolname"
                variant="outlined"
                required
                fullWidth
                id="schoolname"
                label="School Name"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="School Address"
                name="address"
                autoComplete="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                  console.log(address);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
            className={classes.submit}
          >
            Create School
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (z: any) => dispatch(setUser(z)),
  };
};

const mapPropsToState = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(CreateSchool);
