import { useContext, createContext, useEffect, useState } from "react";

const ReservationContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be within menu provider");
  }
  return context;
};

export const ReservationProvider = ({ children }) => {
  // const [reservations, setReservations] = useState([]);

  // useEffect(() => {
  //   const stored = localStorage.getItem("reservations");
  //   if (stored) {
  //     setReservations(JSON.parse(stored));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("reservations", JSON.stringify(reservations));
  // }, [reservations]);
  const [reservations, setReservations] = useState(() => {
    const stored = localStorage.getItem("reservations");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  return (
    <ReservationContext.Provider value={{ reservations, setReservations }}>
      {children}
    </ReservationContext.Provider>
  );
};
