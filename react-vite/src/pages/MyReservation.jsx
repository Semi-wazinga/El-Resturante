import { useEffect, useState } from "react";
import axios from "axios";

const MyReservation = () => {
  const [myReservations, setMyReservations] = useState([]);

  useEffect(() => {
    const fetchMyReservations = async () => {
      try {
        const res = await axios.get("http://localhost:3000/reservation/my", {
          withCredentials: true,
        });
        setMyReservations(res.data);
      } catch (err) {
        console.error("Failed to load reservations", err);
      }
    };
    fetchMyReservations();
  }, []);

  return (
    <div className='mt-5 pt-5'>
      <h2>My Reservations</h2>
      {myReservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        <ul>
          {myReservations.map((r) => (
            <li key={r._id}>
              {r.date} at {r.time} for {r.guestSize} guests (status: {r.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservation;
