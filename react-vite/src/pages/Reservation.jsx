import React from "react";
import "./Reservation.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import images from "../../constants/images";
import {
  FaArrowDown,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Reservation = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(inputs);

    // Reset the form after submission
    setInputs({
      name: "",
      surname: "",
      phone: "",
      email: "",
      guests: "",
      date: "",
      time: "",
    });
  };

  const handleClick = () => {
    // Handle button click logic here
    alert("Button clicked!");
  };

  const reservationImage = images.ingredients; // Change this to the desired image for the reservation page
  if (!reservationImage) return null;

  return (
    <>
      <div className='mt-5 bg-dark'>
        <div
          className='reservation-message'
          style={{
            backgroundImage: `url(${reservationImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
          }}
        >
          <Container className='reservation-text text-center'>
            <div>
              <h1 className=''>Reservation</h1>
              <p>
                We are delighted to host you at our restaurant! To ensure a
                smooth dining experience. we look forward to welcoming you to
                our resturant and creating an unforgettable dining experience
                together.
              </p>
              <span className='reservation-arrow'>
                <FaArrowDown />
              </span>
            </div>
          </Container>
        </div>
        <div className='reservation-form'>
          <Container fluid>
            <div className='reservation-description'>
              <h3 className='text-center mb-4'>
                In order to secure your reservation, we kindly request a deposit
                of 50 euros
              </h3>
              <p className='text-white text-center'>
                The deposit acts as a confirmation of your booking and will be
                deducted from your final bill
              </p>
            </div>
          </Container>
          <Container fluid>
            <div className='form-details'>
              <Form onSubmit={handleSubmit}>
                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='Name'
                      name='name'
                      value={inputs.name}
                      onChange={handleChange}
                      placeholder='Enter Name'
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridSurname'>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type='Surname'
                      name='surname'
                      value={inputs.surname}
                      onChange={handleChange}
                      placeholder='Surname'
                      required
                    />
                  </Form.Group>
                </Row>

                <Form.Group className='mb-3' controlId='formGridPhone'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type='tel'
                    name='phone'
                    value={inputs.phone}
                    onChange={handleChange}
                    placeholder='+234 ...'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='Email'
                    name='email'
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formGridGuests'>
                  <Form.Label>Guests</Form.Label>
                  <Form.Control
                    type='Guests'
                    name='guests'
                    value={inputs.guests}
                    onChange={handleChange}
                    placeholder='Guests'
                    required
                  />
                </Form.Group>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formGridDate'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type='date'
                      name='date'
                      value={inputs.date}
                      onChange={handleChange}
                      placeholder='Date'
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridTime'>
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type='time'
                      name='time'
                      value={inputs.time}
                      onChange={handleChange}
                      placeholder='Time'
                      required
                    />
                  </Form.Group>
                </Row>
                <div className='d-grid mb-3'>
                  <Button variant='primary' onClick={handleClick} type='submit'>
                    Submit
                  </Button>
                </div>
              </Form>
            </div>

            <div className='pt-5 pb-5'>
              <p className='text-center text-white'>
                Thank you for choosing us
              </p>
            </div>
          </Container>
        </div>

        <div className='reservation-space'>
          <Container className='pb-5'>
            <div className='faded-line'></div>
            <p className='text-white text-center p-3'>
              PLEASE NOTE THAT DEPOSIT IS NON-REFUNDABLE IN THE CASE OF NO SHOW
              OR CANCELATION
            </p>
            <div className='faded-line'></div>
          </Container>
          <div className='p-5 footer'>
            <Container className='container' fluid>
              <Row xs={2} md={4} lg={4}>
                <Col>
                  <p className='mb-0 brand'>El Resturante</p>
                </Col>
                <Col className='mb-0 text-center text-white'>
                  <div>
                    <h5>Reservations</h5>
                    <div className='footer-column'>
                      <span>
                        <a href='http://'>Booking</a>
                      </span>
                      <span>
                        <a href='http://'>Contact</a>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className='mb-0 text-center text-white'>
                  <div>
                    <h5>Call us</h5>
                    <div className='footer-column'>
                      <span>
                        <span>
                          <FaWhatsapp />
                        </span>
                        <span>+234 912 2322 328</span>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className='mb-0 text-center text-white'>
                  <div>
                    <h5>Join Us</h5>
                    <div className='footer-column'>
                      <span>
                        <span>
                          <FaFacebook />
                        </span>
                      </span>
                      <span>
                        <span>
                          <FaInstagram />
                        </span>
                      </span>
                      <span>
                        <span>
                          <FaTiktok />
                        </span>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
