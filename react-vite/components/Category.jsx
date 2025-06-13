import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Category.css";

export const Category = () => {
  const URL_CATEGORY = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(URL_CATEGORY);
        const data = await response.json();
        console.log(data.categories);
        setCategories(data.categories.slice(0, 15));
        setActiveCategory(data.categories[0].strCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${URL_RECIPES}&c=${activeCategory}`);
        const data = await response.json();
        setRecipes(data.meals.slice(0, 11));
        console.log(data.meals.slice(0, 11));
      } catch (error) {
        console.error(error);
      }
    };
    activeCategory && fetchRecipes();
  }, [activeCategory]);

  return (
    <div>
      <Container className='mt-5' fluid>
        <div className='d-flex justify-content-center flex-wrap'>
          {categories.map((category) => (
            <button
              key={category.strCategory}
              className='btn m-2'
              onClick={() => setActiveCategory(category.strCategory)}
              style={{
                backgroundColor:
                  activeCategory === category.strCategory
                    ? "#d79734"
                    : "#f8f9fa",
                color:
                  activeCategory === category.strCategory ? "#fff" : "#000",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </Container>
      <Container className='mt-5' fluid>
        <Row xs={2} sm={3} md={4} lg={6} className='g-5'>
          {recipes.map((recipe) => (
            <Col key={recipe.idMeal}>
              <Card className='text-center card'>
                <Card.Img
                  variant='top'
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <div>
                  <div className='mealName'>{recipe.strMeal}</div>
                  <Button className='btn'>
                    <a className='text-decoration-none' href='/order'>
                      Order Now
                    </a>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
