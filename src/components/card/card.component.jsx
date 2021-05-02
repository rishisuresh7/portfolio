import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const CustomCard = ({ content: {title = '', period= '', description= '', technologies=[], color, html_url, image, left, selected, index}}) => {
  const classes = makeStyles(() => ({
    root: {
      maxWidth: 400,
      width: 400,
      minWidth: 400,
      marginTop: 40,
      background: "black",
      color: "cyan",
      border: selected ? '1px solid darkturquoise' : '1px solid white' ,
      opacity: 1 + index*0.1,
      margin: 10,
      height: 500,
      zIndex: index,
      position: 'absolute',
      left: `${left}%`,
      transform: `translateX(${-1*left}%) scale(${1 + index*0.1})`,
      transition: 'all 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
    },
    media: {
      height: 0,
      color: 'cyan',
      paddingTop: '56.25%',
    },
    description: {
      color: 'white',
    },
    subHeader : {
        color: 'white',
    },
    avatar: {
      backgroundColor: 'red',
    },
  }))();

  return (
    <Card className={classes.root}>
      <CardHeader className = {classes.subHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0] && title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <i className="fa fa-github" aria-hidden="true"></i>
          </IconButton>
        }
        title={title}
        subheader={period}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
            technologies.map((item, i) => 
                (<Button key={i} size="small" color="primary">
                   {item}
                </Button>))
        }
      </CardActions>
    </Card>
  );
}

export default CustomCard;