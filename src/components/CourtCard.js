import React from 'react';
import './CourtCard.css';
import { Card } from '@material-ui/core';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class CourtCard extends React.Component {

    constructor(props)
    {
        super(props);
        
    }


    render() {
        return (
            <div className='court-card'>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Court 1: Open Play
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Reo and Dima
                        </Typography>
                        <Typography variant="h6" component="h2">
                            vs.
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Jared and Travis
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CourtCard;