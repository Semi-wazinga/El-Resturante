import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useReservations } from "../context/ReservationContext";

const AdminReservation = () => {
  const { reservations, setReservations } = useReservations();

  const handleDelete = (indexToDelete) => {
    const updatedReservation = reservations.filter(
      (_, index) => index !== indexToDelete
    );
    setReservations(updatedReservation);
  };

  return (
    <div>
      {reservations.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>time</th>
              <th>Email</th>
              <th>Guests</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.email}</td>
                <td>{entry.guests}</td>
                <td>{entry.phone}</td>
                <td>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminReservation;
