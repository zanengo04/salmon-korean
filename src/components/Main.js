import React from 'react'

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Profile from './Profile';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Main() {
    const classes = useStyles();
    return (
        <main>
            <div className="cardAlign">
                <h1>New to Korean?</h1>
                <div className="startHere">
                    <Link to="/alphabet">Start here</Link>
                </div>
                <div className ="introCard">
                    <Card className={classes.root}>
                        <Link to={'/alphabet'}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Korean Alphabet"
                                height="140"
                                image={require("./Pages/content/alphabet.jpg")}
                                title="Korean Alphabet"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Korean Alphabet
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Jump start your Korean by learning how to read and write
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Link to="/alphabet">
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </Link>
                    </CardActions>
                    </Card>
                </div>
                <div className ="introCard">
                <Card className={classes.root}>
                    <Link to={'/survival-korean'}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Survival Korean"
                            height="140"
                            image={require("./Pages/content/survival.jpg")}
                            title="Survival Korean"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Survival Korean
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Want to travel to Korea? Learn these words and phrases
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Link to="/survival-korean">
                       <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
                </Card>
            </div>
                <div className ="introCard">
                <Card className={classes.root}>
                    <Link to={'/grammar'}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Grammar"
                            height="140"
                            image={require("./Pages/content/grammar.jpg")}
                            title="Grammar"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Grammar
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                After this lesson you will learn how to say: "I am", "It is", "She is", "They are", etc.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Link to="/grammar">
                       <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
                </Card>
            </div>
            </div>
        </main>
    
    )
}
