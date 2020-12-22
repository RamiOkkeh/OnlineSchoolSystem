import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
import { Paper, TextField } from '@material-ui/core';

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

function SimpleCard({ user }: any) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    console.log(user)
    return (

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex"  , paddingTop:"2rem"}}>
                <div style={{ paddingRight:"2rem"}}>
                    <Rotate top left>
                        <Card className={classes.root} style={{ marginLeft: "0rem", height: "300px", width: "450px",marginTop:"2rem",backgroundColor:"#89CB48" }}>
                            <CardContent>
                                <Typography style={{ textAlign: "left" }} className={classes.title} color="textSecondary" gutterBottom>
                                    <h3>Rigester No:{user.userID}</h3>
                                    <h3>studentName : {user.studentName}</h3>
                                    <h3>father Name : <TextField style={{ width: "150px" }} /> </h3>
                                    <h3>Mother Name : <TextField style={{ width: "140px" }} /></h3>
                                    <h3>Date of admission : <TextField style={{ width: "100px" }} /></h3>
                                    <h3> Class : <TextField style={{ width: "200px" }} /></h3>


                                </Typography>
                            </CardContent>
                        </Card>
                    </Rotate>
                </div>

                <div>
                    <Rotate top left>
                        <Card className={classes.root} style={{marginLeft: "0rem", height: "300px", width: "450px",marginTop:"2rem",backgroundColor:"#89CB48"}}>
                            <CardContent>
                                <Typography style={{ textAlign: "left" }} className={classes.title} color="textSecondary" gutterBottom>
                                    <h3>Date Of Birth:<TextField style={{ width: "200px" }} /></h3>
                                    <h3>Gender : <TextField style={{ width: "290x" }} /></h3>
                                    <h3>B-Form:<TextField style={{ width: "260px" }} /> </h3>
                                    <h3>Religion : <TextField style={{ width: "240px" }} /></h3>
                                    <h3>OS : <TextField style={{ width: "280px" }} /></h3>
                                  


                                </Typography>
                            </CardContent>
                        </Card>
                    </Rotate>
                </div>
            </div>


        </div>
    );
}
const mapStateToProps = (state: State) => {
    return {
        user: state.user,
        userDetails: state.userDetails,
    };
};
export default connect(mapStateToProps)(SimpleCard);
