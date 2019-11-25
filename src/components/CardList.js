import React from 'react';
import './CardList.css'
import StatusCard from './StatusCard';
import CourtCardList from './CourtCardList';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Simple card for displaying court types and signups. Made need to split to different types later.

const StyledDiv = withStyles({

})

class CardList extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card-list-div'>
                <StatusCard user={this.props.user}/>
                <CourtCardList />
            </div>
        )
    }
}

export default CardList;