import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
const ReservationConfirmed = () => {
  return (
    <div>
      <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h2>🎉 Reservation Submitted!</h2>
        <p className='mb-4'>
          We’ve received your request and will confirm shortly.
        </p>
        <Link to='/'>
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </div>
  );
};

export default ReservationConfirmed;
