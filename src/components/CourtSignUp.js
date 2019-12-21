import React from 'react';

class CourtSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onSubmit: props.onSubmit,
            onClose: props.onClose,
            open: props.open
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleSend(event) {
        this.state.onSubmit([this.state.playerOne, this.state.playerTwo,
        this.state.playerThree, this.state.playerFour])
    }

    handleClose() {

    }

    render() {
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                <DialogTitle id="simple-dialog-title">Court Sign Up</DialogTitle>
                <form onSubmit={this.handleSend} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="playerOne"
                        label="Enter a player"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="playerTwo"
                        label="Enter a player"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="playerThree"
                        label="Enter a player"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="playerfour"
                        label="Enter a player"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    ></Button>
                </form>
            </Dialog>
        )
    }
}