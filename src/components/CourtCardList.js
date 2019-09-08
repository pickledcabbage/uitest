import React from 'react';
import './CourtCardList.css';
import CourtCard from './CourtCard';

// Class for storing court cards specifically. Keeps code simple in the main div.

class CourtCardList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
            </div>
        )
    }
}

export default CourtCardList;