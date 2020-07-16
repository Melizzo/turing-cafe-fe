import React from 'react'
import Card from '../Card/Card'
import "@testing-library/jest-dom"
import { render, fireEvent, getByText } from "@testing-library/react"

const mockReservationCard = {
  id: 1,
  name: "Melissa V",
  date: "12/12/12",
  time: "07:40",
  number: 47,
}

describe("Card", () => {
  it('Should render a Card correctly', () => {
     // Setup
    const { getByText } = render( <Card {...mockReservationCard} />)

    // execution
    const name = getByText("Melissa V")
    const date = getByText("12/12/12")
    const time = getByText("07:40")
    
    // assertion
    expect(name).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  })

  it('should cancel a reservation', () => {
    // Setup
    const mockDeleteBtn = jest.fn()
    const { getByRole } = render( <Card {...mockReservationCard} />)

    // execution
    const cancelBtn = getByRole("button")
    fireEvent.click(cancelBtn)

    // assertion
    expect(mockDeleteBtn).toBeCalledTimes(1)
  })
})