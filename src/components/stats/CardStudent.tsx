/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ChartComp from './Chart'
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



// 


function RecipeReviewCardd({ exam, user }: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [details, setDetails] = useState([]);
  // const [] = useState("")
  // console.log(data)




  return (
    // console.log(post)
    <div>
      <Card className={classes.root} style={{ marginLeft: "6rem", marginTop: "2rem", width: "22rem", marginBottom: "3rem" }} >
        <div style={{ display: "flex" }}>
          <CardHeader/>
            <div style={{ display: "flex" }}>
              <div>
              <div style={{ paddingTop: "2rem" }}>
                Subject : {exam.subjectName}
              </div>
              </div>
              <div style={{ paddingTop: "2rem", paddingLeft: "1.5rem" }}>
                Avg. Mark = {((exam.firstGrade + exam.secondGrade + exam.finalGrade) / 3).toFixed(2)}%
            </div>
            </div>
        </div>
        <CardContent>
          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
            <div>
            <ChartComp exam={exam} />
            </div>
          {/* </Typography> */}
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
        </CardActions> */}
      </Card>
    </div>
  );
}


const mapStateToProps = (state: State) => {
  return {
    schoolID: state.schoolID,
    user: state.user,
  };
};

export default connect(mapStateToProps)(RecipeReviewCardd);
