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

function CreateSchool({ role }: any) {
  const classes = useStyles();

  const [name, setSubject] = useState("");

  function submit(e: any) {
    e.preventDefault();

    let options: any = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ name, schoolID: 2 }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/subject/"
        : "http://localhost:8000/subject/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        alert(`${data.name} added successfully`);
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
          Add A Subject
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="subjectname"
                variant="outlined"
                required
                fullWidth
                id="subjectname"
                label="Subject Name"
                autoFocus
                onChange={(e) => {
                  setSubject(e.target.value);
                  console.log(name);
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
            Add A Subject
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default CreateSchool;
