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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { setUser } from "../../actions/actions";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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

const schoolCoder = function (string) {
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

const SignUp = function ({ role, schools, setUser, user, subjects }) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [School, setSchool] = useState({});
  const [Subject, setSubject] = useState({});
  const [schoolCode, setSchoolCode] = useState("");
  const [marketing, setMarketing] = useState(false);

  // useEffect(() => {
  //   console.log(schools);
  // }, []);

  const submit = (e) => {
    e.preventDefault();
    let userInfo;
    if (role === "Teacher") {
      let choice = schoolCoder(School.name);
      console.log(choice);
      if (choice !== Number(schoolCode)) {
        alert("incorrect ID");
        return;
      }
    }
    console.log(e.target);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: firstName + " " + lastName,
        email,
        password: pass,
        marketing,
        role,
        // School,
      }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/auth/users/"
        : "http://localhost:8000/auth/users/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        userInfo = data;
        let options = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password: pass,
          }),
        };
        let path =
          process.env.NODE_ENV === "production"
            ? "/auth/jwt/create/"
            : "http://localhost:8000/auth/jwt/create/";
        fetch(path, options)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("Authorization", `JWT ${data.access}`);
            let options = {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${data.access}`,
              },
            };
            let path =
              process.env.NODE_ENV === "production"
                ? "/auth/users/me/"
                : "http://localhost:8000/auth/users/me/";
            fetch(path, options)
              .then((data) => data.json())
              .then((data) => {
                console.log(data);
                let options = {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("Authorization"),
                  },
                  body: JSON.stringify(
                    role === "Student"
                      ? {
                          userID: userInfo.id,
                          schoolID: School.id,
                          classroomID: 1,
                        }
                      : role === "Teacher"
                      ? {
                          userID: userInfo.id,
                          schoolID: School.id,
                          subjectID: Subject.id,
                        }
                      : { userID: userInfo.id }
                  ),
                };
                let path =
                  process.env.NODE_ENV === "production"
                    ? `/${role.toLowerCase()}/`
                    : `http://localhost:8000/${role.toLowerCase()}/`;
                fetch(path, options)
                  .then((data) => data.json())
                  .then((data) => {
                    console.log(data);
                    setUser(data);
                  });
              });
          });
      });
  };
  if (role !== "Principal" && user.userID) {
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log(firstName);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => {
                  setLastName(e.target.value);
                  console.log(lastName);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPass(e.target.value);
                  console.log(pass);
                }}
              />
            </Grid>
            {role !== "Principal" ? (
              <Grid>
                <InputLabel id="School">School</InputLabel>
                <Select
                  value={School.name}
                  labelId="School"
                  color="primary"
                  className={classes.school}
                  onChange={(e) => setSchool(e.target.value)}
                >
                  <MenuItem value="">----</MenuItem>
                  {subjects.map((elem) => (
                    <MenuItem value={elem}>{elem.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
            ) : (
              ""
            )}
            {role === "Teacher" ? (
              <Grid>
                <InputLabel id="School">Subject</InputLabel>
                <Select
                  value={Subject.name}
                  labelId="Subject"
                  color="primary"
                  // className={classes.school}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <MenuItem value="">----</MenuItem>
                  {subjects.map((elem) => (
                    <MenuItem value={elem}>{elem.name}</MenuItem>
                  ))}
                </Select>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="schoolID"
                  label="schoolID"
                  type="schoolID"
                  id="schoolID"
                  onChange={(e) => {
                    setSchoolCode(e.target.value);
                    console.log("id");
                  }}
                />
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    onChange={(e) => {
                      setMarketing(e.target.checked);
                      console.log(marketing);
                    }}
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (z) => dispatch(setUser(z)),
  };
};

const mapStateToProps = (state) => {
  return {
    schools: state.schools,
    subjects: state.subjects,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
