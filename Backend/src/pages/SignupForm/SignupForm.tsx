import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import SignUp from "../../components/Signup/Signup";
import { schools, subjects } from "../../actions/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers/rootReducer";
// import { Redirect } from "react-router-dom";
import CreateSchool from "../../components/CreateSchool/CreateSchool";
import AddSubject from "../../components/AddSubject/AddSubject";
import { Link } from "react-router-dom";
// import local_IP from "../../local_IP";
var local_IP;
try {
  local_IP = require("../../local_IP").default;
} catch {
  local_IP = "";
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    position: "relative",
    left: "100px",
    // backgroundColor: "#fef3f3",
    paddingTop: "100px",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function SignupForm({ importSchools, user, importSubjects }: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [role, setRole] = React.useState("Student");
  const [steps, setSteps] = React.useState([
    "Select role",
    "Create an account",
  ]);

  useEffect(() => {
    if (role === "Principal") {
      setSteps([
        "Select role",
        "Create an account",
        "Create a School",
        "Add Subjects",
      ]);
    } else {
      setSteps(["Select role", "Create an account"]);
    }
  }, [role]);

  useEffect(() => {
    let options = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/school/"
        : `${local_IP}/school/`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        importSchools(data);
      });
  }, []);

  const handleNext = () => {
    if (activeStep === 1 && !localStorage.getItem("Authorization")) {
      alert("you are not signed in");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <form>
            <label htmlFor="role:" style={{ marginRight: "2rem" }}>
              What is Your Role?
            </label>
            <Select value={role} onChange={(e: any) => setRole(e.target.value)}>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Principal">Principal</MenuItem>
            </Select>
          </form>
        );
      case 1:
        return <SignUp role={role} user={user}></SignUp>;
      case 2:
        return <CreateSchool role={role} />;
      case 3:
        return <AddSubject role={role} />;
      default:
        return "Unknown stepIndex";
    }
  }
  console.log(user);
  return (
    <div className={classes.root}>
      <Stepper
        style={{ backgroundColor: "#00000000" }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Link to='/dashboard' >
              <Button onClick={handleReset}>Done</Button>
            </Link>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    importSchools: (z: any) => dispatch(schools(z)),
    importSubjects: (z: any) => dispatch(subjects(z)),
  };
};

const mapPropsToState = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(SignupForm);
