import React from 'react';
import './CourtCard.css';
import { Card } from '@material-ui/core';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const StyledCard = withStyles({
    root: {
      borderRadius: 15,
      maxWidth: 500,
      marginTop: 25,
      marginBottom: 25
    }
  })(Card);

class CourtCard extends React.Component {

    constructor(props)
    {
        super(props);
        console.log(props.players)
        
    }


    render() {
        return (
                <StyledCard>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {this.props.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.players[0] + " and " + this.props.players[1]}
                        </Typography>
                        <Typography variant="h6" component="h2">
                            vs.
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.players[2] + " and " + this.props.players[3]}
                        </Typography>
                    </CardContent>
                </StyledCard>
        )
    }
}

export default CourtCard;