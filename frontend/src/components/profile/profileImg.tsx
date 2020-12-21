import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './profileBody.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 230,
        maxHeight: 230,
        borderRadius: 600
    },
    media: {
        height: 165
    },
    name: {
        textAlign: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function MediaCard({ user, image, uploadImage }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography
                    className={classes.name}
                    gutterBottom
                    variant="h5"
                    component="h2"
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
            </CardContent>
        </Card>
    );
}
