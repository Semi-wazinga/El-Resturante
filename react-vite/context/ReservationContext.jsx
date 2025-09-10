import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";

const ReservationContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservations must be used within ReservationProvider");
  }
  return context;
};

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const API_BASE = "http://localhost:3000"; // ✅ corrected (was localhost/3000)

  // Fetch reservations from backend
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await axios.get(`${API_BASE}/reservation`, {
          withCredentials: true,
        });
        setReservations(res.data);
      } catch (err) {
        console.error("Error fetching reservations:", err);
      }
    };
    fetchReservation();
  }, []);

  // Update reservation
  const updateReservation = async (id, updates) => {
    try {
      const res = await axios.put(
        `${API_BASE}/reservation/${id}/status`,
        updates,
        {
          withCredentials: true,
        }
      );
      setReservations((prev) => prev.map((r) => (r._id === id ? res.data : r)));
    } catch (err) {
      console.error("Error updating reservation:", err);
    }
  };

  // Delete reservation
  const deleteReservation = async (id) => {
    try {
      await axios.delete(`${API_BASE}/reservation/${id}`, {
        withCredentials: true,
      });
      setReservations((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Error deleting reservation:", err);
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        updateReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
