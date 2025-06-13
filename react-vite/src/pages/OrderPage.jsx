import React, { useState, useEffect } from "react";
import mealPrices from "../../components/mealPrices"; // Adjust the import path as necessary
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import { FaTrash } from "react-icons/fa";
import "./OrderPage.css"; // Import your custom CSS file

const OrderPage = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [order, setOrder] = useState({ meals: [], total: 0 });
  const [prices, setPrices] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    instructions: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const pricesMap = mealPrices.reduce((acc, meal) => {
          acc[meal.idMeal] = meal.price; // Store the price object directly
          return acc;
        }, {});

        setPrices(pricesMap);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const orderDetails = { ...order, ...formData };
    console.log("Order Details:", orderDetails);
    alert("Order placed successfully!");
    // Reset the order and form data after placing the order
    setOrder({ meals: [], total: 0 });
    setFormData({
      name: "",
      phone: "",
      address: "",
      instructions: "",
    });
    setSelectedMeal(null);
    setOrder({ meals: [], total: 0 });
  };

  const handleMealSelect = (mealId) => {
    const selectedMeal = mealPrices.find((meal) => meal.idMeal === mealId);
    if (selectedMeal) {
      setSelectedMeal(selectedMeal);
      updateOrder(selectedMeal);
    }
  };

  const updateOrder = (meal) => {
    const mealPrice = prices[meal.idMeal];
    const updatedOrder = { ...order };
    updatedOrder.meals.push({
      meal: meal.strMeal,
      price: parseFloat(mealPrice.amount),
      quantity: 1,
    });
    updatedOrder.total += parseFloat(mealPrice.amount);
    setOrder(updatedOrder);
  };

  const deleteMealFromOrder = (mealToRemove) => {
    // Create a copy of the current meals
    const updatedMeals = [...order.meals];

    // Find the index of the first occurrence of the meal to remove
    const mealIndex = updatedMeals.findIndex(
      (meal) => meal.meal === mealToRemove.meal
    );

    if (mealIndex !== -1) {
      // If the meal is found, remove it
      updatedMeals.splice(mealIndex, 1); // Remove one instance of the meal
    }

    const updatedTotal = updatedMeals.reduce(
      (total, meal) => total + meal.price,
      0
    );
    setOrder({ meals: updatedMeals, total: updatedTotal });
  };

  return (
    <>
      <Container className='order-page mt-5 pt-5' fluid>
        <h1 className='text-center mb-4'>Order Page</h1>
        <Row>
          <Col md={6}>
            <h2>Select Your Meal</h2>
            <ListGroup>
              {mealPrices.map((meal) => (
                <ListGroup.Item
                  key={meal.idMeal}
                  onClick={() => handleMealSelect(meal.idMeal)}
                  style={{ cursor: "pointer" }}
                  className='meal-item'
                >
                  <strong>{meal.strMeal}</strong>
                  <div>
                    Price:{" "}
                    {prices[meal.idMeal]
                      ? `${prices[meal.idMeal].amount} ${
                          prices[meal.idMeal].currency
                        }`
                      : "Price not available"}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {selectedMeal && (
              <div className='selected-meal-info mt-3'>
                <h2>Selected Meal:</h2>
                <p>Meal: {selectedMeal.strMeal}</p>
                <p>
                  Price:{" "}
                  {prices[selectedMeal.idMeal]
                    ? `${prices[selectedMeal.idMeal].amount} ${
                        prices[selectedMeal.idMeal].currency
                      }`
                    : "Price not available"}
                </p>
              </div>
            )}

            <h2>Order Summary:</h2>
            <ul>
              {order.meals.map((meal, index) => (
                <li key={index}>
                  {meal.meal} - ${meal.price.toFixed(2)}
                  <span
                    onClick={() => deleteMealFromOrder(meal)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      display: "inline-flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }} // Add marginLeft here
                  >
                    <FaTrash style={{ fontSize: "0.8em" }} />
                  </span>
                </li>
              ))}
            </ul>
            <p>Total: ${order.total.toFixed(2)}</p>
          </Col>
          <Col md={6}>
            <h2>Your Information</h2>
            <Form onSubmit={handlePlaceOrder}>
              <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder='Enter your name'
                  required
                />
              </Form.Group>
              <Form.Group controlId='formPhone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  name='phone'
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder='Enter your phone number'
                  required
                />
              </Form.Group>
              <Form.Group controlId='formAddress'>
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder='Enter your delivery address'
                  required
                />
              </Form.Group>
              <Form.Group controlId='formInstructions'>
                <Form.Label>Special Instructions</Form.Label>
                <Form.Control
                  as='textarea'
                  name='instructions'
                  value={formData.instructions}
                  onChange={handleFormChange}
                  rows={3}
                  placeholder='Any special requests?'
                />
              </Form.Group>
              <Button
                className='orderButton mt-3'
                variant='primary'
                type='submit'
              >
                Place Order
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderPage;
