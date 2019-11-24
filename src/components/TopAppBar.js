import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/styles';
import './TopAppBar.css'

const StyledToolbar = withStyles({
    root: {
        maxWidth: 1160,
    }
})(Toolbar)

const StyledAppBar = withStyles({
    root: {
        justifyContent: 'center',
    }
})(AppBar)


class TopAppBar extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return <StyledAppBar position="static">
            <div style={{justifyContent: 'center'}}>
            <StyledToolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Husky Court Signup
                </Typography>
                <Button color="inherit">Login</Button>
            </StyledToolbar>
            </div>
        </StyledAppBar>
    }
}

export default TopAppBar;