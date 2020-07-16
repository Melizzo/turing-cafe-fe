const URL = `http://localhost:3001/api/v1/reservation`

export const fetchReservations = () => {
  return fetch(`${URL}`)
  .then(res => res.json())
}