import React from 'react';
import CardList from './components/CardList'
import TopAppBar from './components/TopAppBar'

class AnotherApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='main-div'>
            <TopAppBar />
            <CardList />
        </div>
    }
}

export default AnotherApp;