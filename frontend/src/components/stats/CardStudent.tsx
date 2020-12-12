import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Charttwo from './Charttwo'


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCardd({ data , testdata}:any) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [favourite, setFavourite] = useState("")


    // console.log(data)
    console.log('dataaa',testdata)
    return (
        // console.log(post)
        <div >
            <Card className={classes.root} style={{ marginLeft: "2rem", marginTop: "2rem", width: "22rem", height: "600px", marginBottom: "3rem" }} >
                <div style={{ display: "flex" }}>
                    <CardHeader />

                    <div style={{ display: "flex" }}>
                        <div>
                            <div  style={{ paddingTop: "2rem" }}>
                                Subject : {testdata.subjectName}
                            </div>
                        </div>
    <div style={{ paddingTop: "2rem", paddingLeft: "1.5rem" }}> avgMark = {((testdata.first+testdata.second+testdata.final)/3).toFixed(2)}%</div>
                    </div>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div >
                            <Charttwo testdata={testdata}/>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}