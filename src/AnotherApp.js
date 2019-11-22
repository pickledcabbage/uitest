import React from 'react';
import CardList from './components/CardList'

class AnotherApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='main-div'>
            <CardList />
        </div>
    }
}

export default AnotherApp;