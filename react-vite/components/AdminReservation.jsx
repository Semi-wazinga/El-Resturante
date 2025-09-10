import { Table, Button, Form } from "react-bootstrap";
import { useReservations } from "../context/ReservationContext";

const AdminReservation = () => {
  const { reservations, updateReservation, deleteReservation } =
    useReservations();

  // Call context update function (talks to backend + updates state)
  const handleChange = (id, e) => {
    updateReservation(id, { status: e.target.value });
  };

  // Call context delete function
  const handleDelete = (id) => {
    deleteReservation(id);
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
              <th>Guests</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((entry, index) => (
              <tr key={entry._id || index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{new Date(entry.date).toLocaleDateString()}</td>
                <td>{entry.time}</td>
                <td>{entry.guestSize}</td>
                <td>{entry.phone}</td>
                <td>
                  <Form.Select
                    value={entry.status}
                    onChange={(e) => handleChange(entry._id, e)}
                  >
                    <option value='pending'>Pending</option>
                    <option value='confirmed'>Confirmed</option>
                    <option value='canceled'>Canceled</option>
                  </Form.Select>
                </td>
                <td>
                  <Button onClick={() => handleDelete(entry._id)}>
                    Delete
                  </Button>
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
