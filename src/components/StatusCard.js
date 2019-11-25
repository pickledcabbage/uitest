import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { borderRadius } from '@material-ui/system';
import './StatusCard.css';
import { Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Axios from 'axios';


// Main status card at the top of the app. Gonna be a copy and paste shit show here.

const StyledCard = withStyles({
  root: {
    borderRadius: 15,
    maxWidth: 500,
    marginBottom: 25,
  }
})(Card);

const StyledIconButton = withStyles({
  root: {
    borderRadius: 15
  }
})(IconButton)

class StatusCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          user: props.user,
          userState: 'IDLE',
          court: ''
        }
        this.idleState = this.idleState.bind(this);
        this.inQueueState = this.inQueueState.bind(this);
        this.onCourtState = this.onCourtState.bind(this);
        this.sendDropRequest = this.sendDropRequest.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }

    idleState() {
      return "Hi, " + this.state.user + ", what would you like to do?"
    }

    inQueueState() {

    }

    onCourtState() {
      return this.state.user + " you're up on " + this.state.court +"!"
    }

    getStatus(event) {
      axios.post('http://localhost:5000/playerstatus', JSON.stringify({ user: this.state.user}), {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        console.log(res)
        this.setState({
          userState: res.data.status,
          court: res.data.court
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

    sendDropRequest(event) {
      axios.post('http://localhost:5000/drop', JSON.stringify({ user: this.state.user}), {headers: {'Content-Type': 'application/json'}})
    }

    componentDidMount() {
      this.getStatus()
    }

    render() {
      var message = this.idleState()
      if (this.state.userState === "IN_QUEUE") {
        message = this.inQueueState()
      }
      else if (this.state.userState === "ON_COURT") {
        message = this.onCourtState()
      }
        return (
            <div className='status-card'>
                <StyledCard className='styled-card'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Status
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {message}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <StyledIconButton color="secondary" onClick={this.sendDropRequest}>
                            <CloseIcon />
                            Drop
                        </StyledIconButton>
                        <StyledIconButton variant='contained' color="primary">
                            <KeyboardArrowRightIcon />
                            Start
                        </StyledIconButton>
                        <StyledIconButton variant='contained' color="default">
                            <QueryBuilderIcon />
                            Queue Up
                        </StyledIconButton>
                    </CardActions>
                </StyledCard>
            </div>
        )
    }
}

export default StatusCard;