import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";
import Button from "react-bootstrap/esm/Button";
import images from "../../constants/images";

const About = () => {
  return (
    <>
      <Container className='about mt-5 pt-5 pb-5' fluid>
        <div className='about'>
          <h1 className='text-center'>About Us</h1>
          <h3 className='text-center'>
            Ensuring 100% satisfaction and a delightful experience for all food
            lovers.
          </h3>
          <p className='text-center'>
            Welcome to our Recipe App! We are passionate about food and cooking,
            and we believe that everyone should have access to delicious and
            easy recipes. Our app is designed to help you discover new recipes,
            learn cooking techniques, and create memorable meals for yourself
            and your loved ones. Whether you're a beginner in the kitchen or an
            experienced chef, our app has something for everyone. From quick
            weeknight dinners to elaborate holiday feasts, we have a wide
            variety of recipes to suit your needs. We also provide helpful tips
            and tricks to make cooking easier and more enjoyable.
          </p>
          <div className=' align-items-center d-flex flex-column mt-5'>
            <Button className='button'>
              <a className='link' href='#'>
                View Menu
              </a>
            </Button>
          </div>
        </div>
      </Container>

      <div>
        <div
          className='reservation-message'
          style={{
            backgroundImage: `url(${images.meal})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container className='circle'>
            <div className='inside-div'>
              <div class='faded-white'></div>
              <div class='faded-white mt-1'></div>
              <p className='text-center text-white mt-2'>Breakfast</p>
              <div class='faded-white'></div>
            </div>
          </Container>
          <Container className='circle'>
            <div className='inside-div'>
              <div class='faded-white'></div>
              <div class='faded-white mt-1'></div>
              <p className='text-center text-white mt-2'>Lunch</p>
              <div class='faded-white'></div>
            </div>
          </Container>

          <Container className='circle'>
            <div className='inside-div'>
              <div class='faded-white'></div>
              <div class='faded-white mt-1'></div>
              <p className='text-center text-white mt-2'>Dinner</p>
              <div class='faded-white'></div>
            </div>
          </Container>
        </div>
      </div>

      <Container className='mt-3' fluid>
        <div className='review-header'>
          <h1 className='text-center'>
            What are people saying about our resturant
          </h1>
          <h5 className='text-center text-bold'>
            Anyone who visits us leaves our place well fed and in a great mood
          </h5>
        </div>

        <div>
          <Row md={3} className='g-4 p-5'>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>“Amazing experience!”</p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- Alex Johnson</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>“The best food in town!”</p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- Sarah Lee</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>“I love the ambiance!”</p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- Mark Wilson</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>
                  “Great food, great service!. They're doing spectacularly well”
                </p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- John Doe</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>
                  “Great food, great service!. They're doing spectacularly well”
                </p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- John Doe</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>
                  “Great food, great service!. They're doing spectacularly well”
                </p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- John Doe</p>
              </div>
            </Col>
            <Col className='col-6'>
              <div className='review-card'>
                <p className='text-center'>“I love the variety of dishes!”</p>
                <Image src={images.chef} className='w-25' roundedCircle />
                <p className='text-center'>- Jane Smith</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div
        style={{
          backgroundImage: `url(${images.burger})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container className='description'>
          <div className='description-text'>
            <h1 className='text-center text-white'>Our story</h1>
            <p className='text-white'>
              Our story begins with a love for food and a passion for cooking.
              We believe that food is not just about sustenance; it's about
              bringing people together, creating memories, and celebrating life.
              Our team of chefs and food enthusiasts are dedicated to crafting
              delicious recipes that inspire and delight.
            </p>
            <p className='text-white'>
              We are committed to using only the freshest ingredients and
              creating recipes that are not only delicious but also healthy and
              easy to prepare. Our goal is to make cooking accessible to
              everyone, regardless of skill level.
            </p>
          </div>
        </Container>
      </div>

      <Container className='about-footer text-white pt-5 ' fluid>
        <Row sm={2} md={4}>
          <Col>
            <h3>Address</h3>
            <span>
              <p>4949 mamora Rd</p>
            </span>
            <span>
              <p>Abuja, Nigeria</p>
            </span>
            <span>
              <p>+1 233 333 564</p>
            </span>
            <span>
              <p>Email: resturante@gmail.com</p>
            </span>
          </Col>
          <Col>
            <h3>Hours of operation</h3>
            <span>
              <p>Happy hour: 4:30PM-6:30PM Wed-Sat</p>
            </span>
            <span>
              <p>Dinner: 5:30PM-10:00PM Wed-Mon </p>
            </span>
            <span>
              <p>Lunch: 11:00AM-3:00PM Wed-Sat</p>
            </span>
            <span>
              <p>Brunch: 10:30AM-3:00PM Wed-Sat</p>
            </span>
          </Col>
          <Col>
            <h3>Useful Information</h3>
            <span>
              <p>Gift Card</p>
            </span>
            <span>
              <p>Sign Up for our newsletter</p>
            </span>
            <span>
              <p>Big Spoon Blog</p>
            </span>
          </Col>
          <Col>
            <h3>Testimonials</h3>
            <span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                molestias odio explicabo. Aliquam quae amet exercitationem,
                nihil ad assumenda facere corrupti?
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
