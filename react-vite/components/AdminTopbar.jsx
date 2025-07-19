import { Navbar, Container, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const AdminTopbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      className='shadow-sm mt-5 pt-5'
    >
      <Container fluid>
        <Button
          variant='outline-light'
          className='d-lg-none'
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </Button>
        <Navbar.Brand className='ms-2'>Admin Dashboard</Navbar.Brand>
        <Button variant='outline-light' onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default AdminTopbar;
