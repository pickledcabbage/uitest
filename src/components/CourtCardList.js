import React from 'react';
import axios from 'axios'
import './CourtCardList.css';
import CourtCard from './CourtCard';

// Class for storing court cards specifically. Keeps code simple in the main div.

class CourtCardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courts: []
        }
        this.namePlayers = this.namePlayers.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getcourtdata')
        .then( resp => {
            this.setState({courts: resp.data})
            console.log(resp.data)
        })
    }

    namePlayers(listOfPLayers) {
        return listOfPLayers.map((x, i) => {
            return {key:i,  name: x}
        })
    }

    render() {
        return (
            <div>
                {this.state.courts.map((item) => <CourtCard key={item.id} name={item.name} players={item.players} />)}
            </div>
        )
    }
}

export default CourtCardList;