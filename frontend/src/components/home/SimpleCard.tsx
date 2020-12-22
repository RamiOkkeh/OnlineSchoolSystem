import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 360,
  },
  bullet: {
    display: 'inline-block',
    marginTop: ' 2px',
    // marginLeft: "150px",
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   
    <div style={{ display: "flex", flexDirection: "column" ,justifyContent:"center",alignItems:"center"}}>
      <div style={{ display: "flex" }}>
        <div>
        <Rotate top left>
          <Card className={classes.root} style={{ marginLeft: "11.4rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Admin Portal</h2>
              </Typography>
              <Typography variant="body2" component="p">
                An Admin panel with all controls. Admin can manage,
         track and record everything within school <br />
          or organization
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
        <div>
        <Rotate top left>
          <Card className={classes.root} style={{ marginLeft: "1rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Students, Parents Portal</h2>
              </Typography>
              <Typography variant="body2" component="p">
                A portal for students and parents to check all their
                progress, reports, results, home works and also
                communicate with teachers.
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
        <div>
        <Rotate top left>
          <Card className={classes.root} style={{ marginLeft: "1rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Class Management</h2>
              </Typography>
              <Typography variant="body2" component="p">
                This school management software manage your classes in an easy way.
                starts from students to subjects, courses to marks
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
        <div>

        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "2rem", marginLeft: "10.5rem", width: "380px" }}>
        <Rotate top right cascade>
          <Card className={classes.root} style={{ marginLeft: "1rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Class Tests Management</h2>
              </Typography>
              <Typography variant="body2" component="p">
              Managing class tests is a piece of cake with this free school management
                 software. It keeps record of every class test.
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
        <div>
          <Rotate top right cascade>
          <Card className={classes.root} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Exams Management</h2>
              </Typography>
              <Typography variant="body2" component="p">
                eSkooly has a complete solution for exams management
                starting from new exam to final result, reports and result cards.
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
        <div>
        <Rotate top right cascade>
          <Card className={classes.root} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
            <CardContent>
              <AccountCircleIcon style={{ marginTop: "-1rem", width: "100px", height: "70px" }} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <h2>Fees Management</h2>
              </Typography>
              <Typography variant="body2" component="p">
              Our school software opens an account for every student
                to manage its fees and dues. eSkooly manages everything automatically
        </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" style={{ display: 'flex', marginLeft: "8rem" }}>Learn More</Button>
            </CardActions>
          </Card>
          </Rotate>
        </div>
      </div>
    
    </div>
  );
}
