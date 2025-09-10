import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Carousel,
  Card,
} from "react-bootstrap";
import { useMenu } from "../../context/MenuContext";
import "./Menu.css";

const Menu = () => {
  const { menuItems } = useMenu();
  console.log("Client menu items:", menuItems);

  const URL1 =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=burger";
  const URL3 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  const [chikenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  const [recipes, setRecipes] = useState([]);
  // const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const response = await fetch(URL1);
        const data = await response.json();
        setChickenRecipe(data.meals[0]);
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

      {/* Our Menu from backend */}
      <Container className='mt-3'>
        <Row>
          {menuItems.length === 0 ? (
            <p>No items displayed yet</p>
          ) : (
            menuItems.map((item, index) => (
              <Col md={4} sm={6} xs={12} key={index} className='mb-4'>
                <Card>
                  {item.image && (
                    // console.log("Menu item image:", `${API_BASE}${item.image}`);
                    <Card.Img
                      variant='top'
                      src={item.image}
                      style={{ height: "200px", objectFit: "cover" }}
                      alt={item.name}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <strong>Category:</strong> {item.category} <br />
                      <strong>Price:</strong> $
                      {parseFloat(item.price).toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
