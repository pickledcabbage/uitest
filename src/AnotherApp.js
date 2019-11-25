import React from 'react';
import CardList from './components/CardList'
import TopAppBar from './components/TopAppBar'
import SignInPage from './components/SignIn'
import axios from 'axios';

class AnotherApp extends React.Component {

    constructor(props) {
        super(props);
        this.printDataFromChild = this.printDataFromChild.bind(this);
        this.signInPlayer = this.signInPlayer.bind(this);
        this.state = {
            user: "",
            loggedIn: false
        }
    }

    printDataFromChild(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        this.setState({user: event.target['username'].value, loggedIn: true});
    }

    signInPlayer() {
        axios.post({

        })
    }

    render() {
        let main = <SignInPage  postFunction={this.printDataFromChild}/>
        if (this.state.loggedIn) {
            main = <CardList user={this.state.user} />
        }
        return <div className='main-div'>
            <TopAppBar />
            {main}
        </div>
    }
}

export default AnotherApp;