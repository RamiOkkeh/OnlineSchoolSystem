import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './profileBody.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: 600
    },
    media: {
        height: 200
    },
    name: {
        display: 'flex',
        marginLeft: '2%',
        color: 'white'
    }
});

export default function MediaCard({ user, image, uploadImage }) {
    const classes = useStyles();

    return (
        <div >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                </CardContent>
            </Card>
            <Typography
                className={classes.name}
                gutterBottom
                variant="h6"
                component="p"
            >
                {user.studentName}
                <div className="file-input">
                    <input
                        type="file"
                        id="file"
                        name="file"
                        className="file"
                        onChange={uploadImage}
                    />
                    <label htmlFor="file">
                        <img
                            alt="upload"
                            src="https://static.thenounproject.com/png/625182-200.png"
                            width="20px"
                        />
                    </label>
                </div>
            </Typography>
        </div>
    );
}
