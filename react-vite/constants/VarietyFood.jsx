// Note: This file contains the data for the variety of food items available in the restaurant.
import images from "./images";

const VarietyFood = {
  Pizza: {
    realname: "Pizza",
    description: "Indulge in our medley of flavors",
    image: images.pizza,
    price: "$9.99",
  },
  Burger: {
    realname: "Burger",
    image: images.burger1,
    price: "$4.99",
    description: "A juicy beef patty topped with lettuce, tomato, and cheese",
  },
  Sharwama: {
    realname: "Sharwama",
    image: images.sharwama,
    price: "$14.99",
    description:
      "A flavorful wrap filled with lamb or chicken, topped with veggies and tahini sauce",
  },
  Fries: {
    realname: "Fries",
    image: images.fries,
    price: "$14.99",
    description: "Crispy fries cooked to a golden brown",
  },
  Milkshake: {
    realname: "Milkshake",
    image: images.pizza,
    price: "$7.99",
    description: "A creamy blend of ice cream and your choice of flavor",
  },
  Friedchicken: {
    realname: "Chicken",
    image: images.pizza,
    price: "$19.99",
    description:
      "Crispy fried chicken tenders served with your choice of dipping sauce",
  },
};

export default VarietyFood;
