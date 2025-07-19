// src/components/AdminSidebar.jsx
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-dark text-white sidebar`}
      style={{
        width: isOpen ? "220px" : "0px",
        transition: "width 0.3s ease",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {isOpen && (
        <>
          <div style={{ display: isOpen ? "block" : "none", padding: "20px" }}>
            <h4 className='mb-4 mt-5 pt-5'>Admin Panel</h4>
            <Nav className='flex-column text-start'>
              <Nav.Link
                as={NavLink}
                to='/admin/menu'
                className='text-white ps-1'
              >
                <span>Menu</span>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/admin/reservation'
                className='text-white ps-1'
              >
                Reservation
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/admin/settings'
                className='text-white ps-1'
              >
                Settings
              </Nav.Link>
            </Nav>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSidebar;
