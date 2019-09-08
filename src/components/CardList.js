import React from 'react';
import './CardList.css'
import StatusCard from './StatusCard';
import CourtCardList from './CourtCardList';

// Simple card for displaying court types and signups. Made need to split to different types later.

class CardList extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-div'>
                <StatusCard />
                <CourtCardList />
            </div>
        )
    }
}

export default CardList;