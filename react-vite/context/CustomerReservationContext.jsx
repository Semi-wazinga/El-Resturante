import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";

const CustomerReservationContext = createContext();

export const useCustomerReservations = () => {
  const context = useContext(CustomerReservationContext);
  if (!context) {
    throw new Error(
      "useCustomerReservations must be used within CustomerReservationProvider"
    );
  }
  return context;
};

export const CustomerReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const API_BASE = "http://localhost:3000"; // ✅ corrected (was localhost/3000)

  // Add reservation
  const addReservation = async (reservationData) => {
    try {
      const res = await axios.post(`${API_BASE}/reservation`, reservationData, {
        withCredentials: true, //sends JWT cookie
      });
      setReservations((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Error adding reservation:", err);
    }
  };

  return (
    <CustomerReservationContext.Provider
      value={{
        reservations,
        addReservation,
      }}
    >
      {children}
    </CustomerReservationContext.Provider>
  );
};
