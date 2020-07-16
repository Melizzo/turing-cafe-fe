import React from 'react'
import Card from '../Card/Card'

const Reservations = ( { custReservations, removeReservations }) => {

  const reservationCards = custReservations.map(appoint => {
    return(
      <Card 
      key = {appoint.indexOf}
      id = {appoint.id}
      name = {appoint.name}
      date = {appoint.date}
      time = {appoint.time}
      number = {appoint.number}
      removeReservations={removeReservations}
      />
    )
  })

  return(
    <div> {reservationCards} </div>
  )
  
}


export default Reservations