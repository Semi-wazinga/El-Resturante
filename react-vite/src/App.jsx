import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminLayout from "./layout/AdminLayout";
import AdminMenuForm from "../components/AdminMenuForm";
import AdminReservation from "../components/AdminReservation";
import AdminLogin from "../components/AdminLogin";
import { Home, Menu, Reservation, About, OrderPage, MealOrder } from "./pages";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/meals' element={<MealOrder />} />
          <Route path='/login' element={<AdminLogin />} />

          {/* admin routing */}
          <Route
            path='/admin'
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route path='menu' element={<AdminMenuForm />} />
            <Route path='reservation' element={<AdminReservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
