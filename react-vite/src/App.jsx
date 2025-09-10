import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminLayout from "./layout/AdminLayout";
import AdminMenuForm from "../components/AdminMenuForm";
import MyReservation from "./pages/MyReservation";
import AdminReservation from "../components/AdminReservation";
import AdminLogin from "../components/AdminLogin";
import {
  Home,
  Menu,
  Reservation,
  About,
  OrderPage,
  MealOrder,
  ReservationConfirmed,
} from "./pages";
import RequireAdmin from "./utils/RequireAdmin";
import RequireAuth from "./utils/RequireAuth";

import { ReservationProvider } from "../context/ReservationContext";
import { CustomerReservationProvider } from "../context/CustomerReservationContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        {/* customer routes */}
        <CustomerReservationProvider>
          <ReservationProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route
                path='/reservation'
                element={
                  <RequireAuth>
                    <Reservation />
                  </RequireAuth>
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='/order' element={<OrderPage />} />
              <Route path='/meals' element={<MealOrder />} />
              <Route path='/login' element={<AdminLogin />} />
              <Route
                path='/my-reservations'
                element={
                  <RequireAuth>
                    <MyReservation />
                  </RequireAuth>
                }
              />
              <Route
                path='/reservation-confirmed'
                element={<ReservationConfirmed />}
              />

              {/* admin routing */}

              <Route
                path='/admin'
                element={
                  <RequireAdmin>
                    <AdminLayout />
                  </RequireAdmin>
                }
              >
                <Route path='menu' element={<AdminMenuForm />} />
                <Route path='reservation' element={<AdminReservation />} />
              </Route>
            </Routes>
          </ReservationProvider>
        </CustomerReservationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
