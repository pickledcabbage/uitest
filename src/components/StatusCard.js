import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './StatusCard.css';
import { Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


// Main status card at the top of the app. Gonna be a copy and paste shit show here.

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class StatusCard extends React.Component {

    
    constructor(props) {
        super(props);
        this.classes = makeStyles({
            card: {
              minWidth: 50,
              borderRadius: 50,
              background: '#000FFF',
            },
            bullet: {
              display: 'inline-block',
              margin: '0 2px',
              transform: 'scale(0.8)',
            },
            title: {
              fontSize: 14,
            },
            pos: {
              marginBottom: 12,
            },
          });
        this.bull = <span className={this.classes.bullet}>•</span>;
    }

    render() {
        return (
            <div className='status-card'>
                <Card className={this.classes.card}>
                    <CardContent>
                        <Typography className={this.classes.title} color="textSecondary" gutterBottom>
                            Status
                        </Typography>
                        <Typography variant="h5" component="h2">
                            You're up next on Court 1!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="secondary" size="large">
                            <CloseIcon />
                            Drop
                        </IconButton>
                        <IconButton variant='contained' color="primary" size="large">
                            <KeyboardArrowRightIcon />
                            Start
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default StatusCard;