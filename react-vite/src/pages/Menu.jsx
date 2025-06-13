import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import "./Menu.css";
import { Category } from "../../components/Category";

const Menu = () => {
  const URL1 =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=burger";
  const URL3 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  const [chikenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const response = await fetch(URL1);
        const data = await response.json();
        setChickenRecipe(data.meals[0]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchBurgerRecipe = async () => {
      try {
        const response = await fetch(URL2);
        const data = await response.json();
        setBurgerRecipe(data.meals[0]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBurgerRecipe();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(URL3);
        const data = await response.json();
        setRecipes(data.meals.slice(0, 9));
        console.log(data.meals.slice(0, 9));
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <Container className='body mt-5' fluid>
        <Row xs={1} md={2} className='g-0'>
          {/* leftside */}
          <Col>
            <div
              className='menu text-center'
              style={{
                margin: "100px auto",
                padding: "20px",
              }}
            >
              <div>
                <h1 className='menu-title'>Craving meals!</h1>
              </div>
              <div>
                <p className='menu-description'>
                  At [Restaurant Name], we take pride in offering a diverse menu
                  that celebrates the art of culinary excellence. Our dishes are
                  crafted with the freshest ingredients, bringing you a
                  delightful blend of flavors and textures. From savory
                  appetizers to mouthwatering main courses and decadent
                  desserts.
                </p>
              </div>
              <div className='menu-button'>
                <Button
                  className='btn btn-primary'
                  onClick={() => console.log("Dark")}
                >
                  Get Started
                </Button>
                <Button className='btn2' onClick={() => console.log("Dark")}>
                  Explore Recipes
                </Button>
              </div>
            </div>
          </Col>

          {/* rightside */}

          <Col className='menu-images'>
            <div className='imgContainer'>
              <Image
                className='main-image'
                variant='top'
                src={chikenRecipe.strMealThumb}
                alt=''
              />
              <Image
                className='top-right-image'
                src={burgerRecipe.strMealThumb}
                alt=''
                roundedCircle
              />
              <Image
                className='bottom-left-image'
                src={burgerRecipe.strMealThumb}
                alt=''
                roundedCircle
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='likedRecipe' fluid>
        <Carousel fade>
          {recipes.map((recipe, index) => (
            <Carousel.Item key={index}>
              <div className='carousel-title mt-5'>
                <h5 className='text-center'>
                  Recipe's liked by people the most
                </h5>
                <h2 className='text-center mb-0 p-0'>
                  Our Client's favourite recipes
                </h2>
              </div>
              <Image
                className='carousel-image'
                src={recipe.strMealThumb}
                text='First slide'
              />
              <div className='carousel-text'>
                <h3 className='carousel-caption'>{recipe.strMeal}</h3>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Category />
    </>
  );
};

export default Menu;
