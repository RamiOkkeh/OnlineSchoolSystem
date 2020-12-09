import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favourite , setFavourite]= useState("")

  return (
      <div >
    <Card className={classes.root} style={{marginLeft:"13rem",marginTop:"5rem",width:"65rem" ,marginBottom:"3rem"}} >
     <div style={{display:"flex" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        />
        <div>
        <div style={{paddingTop:"1.7rem"}}>
      Ameed Asmah 
        </div>
        <div>
      December 9, 2020
        </div>
        </div>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Hey Hey Hackers
It's time to write some blogging :grin:
so today we will ask you some questions <br /> "good ones "
questions that need deep thinking from you 
so grab your coffee  and answer these questions <br/>
What are your current goals in life? 
How do you plan to reach your goals?
How often do you set goals for yourself?<br/>
What goals have you set and achieved in the past?
How do you feel when you reach your goals?<br/>
:pushpin:always remember to HAVE FUN and add your links here 
        </Typography>
      </CardContent>
      <CardActions disableSpacing> 
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        </CardActions>
    </Card>
    </div>
  );
}