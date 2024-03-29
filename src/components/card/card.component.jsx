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
import './card.styles.scss';

const CustomCard = ({ content: {title = '', period= '', description= '', technologies=[], repoLink, deploymentLink, image, left, selected, index}}) => {
  const classes = makeStyles(() => ({
    root: {
      maxWidth: 400,
      width: 400,
      minWidth: 400,
      marginTop: 40,
      background: "linear-gradient(to top, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
      color: "cyan",
      border: selected && '1px solid darkturquoise',
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
      color: 'azure',
      paddingTop: '56.25%',
    },
    description: {
      color: 'darkturquoise',
      textAlign: 'justify',
    },
    subHeader : {
        color: '#5cb3b3',
    },
    avatar: {
      backgroundColor: '#534d58',
    },
  }))();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0] && title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <React.Fragment>
            {
              deploymentLink === '' ? null :
                <IconButton aria-label="settings">
                <a style={{color: 'white', fontSize: 18}} href={deploymentLink} target='_blank' rel='noreferrer'>
                  <i className="fas fa-external-link-alt" aria-hidden="true" />
                </a>
                </IconButton>
            }
            <IconButton aria-label="settings">
              <a style={{color: 'white'}} href={repoLink} target='_blank' rel='noreferrer'>
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </IconButton>
          </React.Fragment>
        }
        title={title}
        subheader={<span className = {classes.subHeader}>{period}</span>}
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
            technologies.map((item, i) => i > 2 ? null :
                (<Button key={i} size="small" color="primary">
                   <span className={classes.subHeader}>{item}</span>
                </Button>))
        }
      </CardActions>
    </Card>
  );
}

export default CustomCard;