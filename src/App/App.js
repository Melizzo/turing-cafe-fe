import React, { Component } from 'react';
import './App.css';
import { fetchReservations, deleteReservation } from '../ApiCalls'
import Reservations from '../Reservation/Reservations'

class App extends Component {
  constructor() {
    super()
      this.state = {
        reservations: []
      }
  }

  componentDidMount() {
    fetchReservations()
    .then(data => {
      this.setState({
        reservations: data
      })
    })
    .catch((error) => console.error(error));
  }

  removeReservations(id) {
    deleteReservation(id)
  }

  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations custReservations={this.state.reservations} removeReservations={this.removeReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
