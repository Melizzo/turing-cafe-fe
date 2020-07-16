import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../ApiCalls'

class App extends Component {
  constructor() {
    super()
      this.state = {
        custReservations : []
      }
  }

  componentDidMount() {
    fetchReservations()
    .then(result => console.log(result))
    .then(result => {
      this.setState({
        custReservations: result
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
