import React from 'react'
import './Card.css';

const Card = ({ id, name, date, time, number, removeReservation }) => {
  return (
    <div className="card">
      <h2>{ name }</h2>
      <h3>{ date }</h3>
      <h3>{ time }</h3>
      <h3> Number of Guests: { number }</h3>
      <button role="button" onClick={() => removeReservation(id)}>Cancel</button>
    </div>
  )
 }

export default Card;