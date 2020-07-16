const URL = `http://localhost:3001/api/v1/reservations`;

export const fetchReservations = () => {
  return fetch(`${URL}`).then((res) => res.json());
};

export const postNewReservations = (stringifiedBody) => {
  return fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifiedBody,
    // {name: <String>, date: <String>, time: <String>, number: <Number>}
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong with with your reservation");
    }
  });
};

export const deleteReservation = async (id) => {
  const response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response;
  return data;
};
