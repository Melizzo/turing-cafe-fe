import React from 'react'
import Card from '../Card/Card'

const Reservations = ( { custReservations, removeReservation }) => {

  const reservationCards = custReservations.map(appoint => {
    return(
      <Card 
      key = {appoint.indexOf}
      id = {appoint.id}
      name = {appoint.name}
      date = {appoint.date}
      time = {appoint.time}
      number = {appoint.number}
      removeReservation={removeReservation}
      />
    )
  })

  return(
    <div> {reservationCards} </div>
  )
  
}


export default Reservations