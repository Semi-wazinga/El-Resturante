import { React } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall, MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import VarietyFood from "../../constants/VarietyFood";

import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  if (!VarietyFood) return null;
  const items = Object.values(VarietyFood);

  return (
    <>
      <Container className='mt-5 homeCarouselBackground' fluid>
        <Row className='justify-content-center align-items-center text-center'>
          <Col className='homeCarouselDescription'>
            <div>
              <h4>Our Classic</h4>
              <h1>Burger</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                sed enim esse, mollitia voluptate possimus neque inventore
                officiis magni ab.
              </p>
              <Button size='lg' onClick={() => console.log("Danger")}>
                Visit More
              </Button>
            </div>
          </Col>
          <Col>
            <div>
              <Image src={images.burger1} fluid />
            </div>
          </Col>
          <Col>
            <div className='d-flex'>
              <div className='d-flex flex-column justify-content-center align-items-end gap-2'>
                <Image
                  src={images.burger}
                  className='w-25'
                  fluid
                  style={{ borderRadius: "10px" }}
                />
                <Image
                  src={images.burger}
                  className='w-25'
                  fluid
                  style={{ borderRadius: "10px" }}
                />
                <Image
                  src={images.burger}
                  className='w-25'
                  style={{ borderRadius: "10px" }}
                  fluid
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='hero' fluid>
        <Row
          className='justify-content-center align-items-center'
          xs={2}
          md={2}
        >
          {/* leftside */}
          <Col>
            <div className='leftside'>
              <p className='text-white text-center'>
                Welcome to El Resturante, where the best meals is served. Join
                us for an unforgettable dining experience, and let our passion
                for food and hospitality shine through. Our expertly crafted
                menu features dishes that blend bold flavors, fresh ingredients,
                and creative presentations. Relax, unwind and enjoy some amazing
                food
              </p>
            </div>
          </Col>
          <Col>
            <div className='rightside'>
              <Image src={images.chef} className='w-75 h-75 ' fluid />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mealPreview pt-1' fluid>
        <h4 className='text-center'>
          <span className='text-dark'>Our Menu</span>
        </h4>
        <Row xs={2} md={2} lg={4}>
          {items.map((item, index) => (
            <Col key={index}>
              <Card className='card just border-0'>
                <Card.Img className='img' variant='top' src={item.image} />
                <Card.Body>
                  <Card.Text>{item.realname}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className='footer pt-5 mt-2' fluid>
        <Row className='justify-content-center'>
          <Col>
            <div className='text-black'>
              <h4 className='text-center text-black'>Contact Us</h4>
              <div className='text-center text-black d-flex gap-5 justify-content-center pt-3'>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
                <div>
                  <FaGithub />
                </div>
                <div>
                  <MdOutlineFacebook />
                </div>
              </div>
              <div className='text-center pt-3'>
                <span>
                  <FaLocationDot /> 1234 Main St, City, State
                </span>
              </div>
              <div className='text-center pt-3 pb-4'>
                <MdAddCall /> (123) 456-7890-953
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
