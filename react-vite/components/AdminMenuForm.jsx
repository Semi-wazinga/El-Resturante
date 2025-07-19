import { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { useMenu } from "../context/MenuContext";

const AdminMenuForm = () => {
  const { menuItems, setMenuItems } = useMenu();
  const [formData, setFormData] = useState({
    item: "",
    price: "",
    category: "",
    image: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // use effect for debugging
  useEffect(() => {
    console.log("✅ Saved to localStorage:", menuItems);
  }, [menuItems]);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...formData }; // Copy to prevent stale state issues
    console.log("Submitting:", newItem);

    if (editIndex !== null) {
      const updated = [...menuItems];
      updated[editIndex] = formData;
      setMenuItems(updated);
      setEditIndex(null); // exit null mode
    } else {
      setMenuItems([...menuItems, newItem]);
    }

    setFormData({ item: "", price: "", category: "", image: "" });
  };

  const handleEdit = (index) => {
    setFormData(menuItems[index]);
    setEditIndex(index);
  };

  const handleDelete = (indexToDelete) => {
    const updatedItems = menuItems.filter(
      (_, index) => index !== indexToDelete
    );
    setMenuItems(updatedItems);
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Row lg={4} md={4} sm={2} xs={2}>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type='text'
                  name='item'
                  value={formData.item}
                  onChange={handleChange}
                  placeholder='e.g Chicken Burger'
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Price($)</Form.Label>
                <Form.Control
                  type='number'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  placeholder='15.80'
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Categoty</Form.Label>
                <Form.Control
                  type='text'
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                  placeholder='e.g Dinner'
                />
              </Form.Group>
            </Col>

            <Col>
              <Button className='mt-4' type='submit'>
                {editIndex !== null ? "update" : "submit"}
              </Button>
            </Col>

            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (file.size > 100 * 1024) {
                      alert("Image must be under 100KB");
                      return;
                    }

                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          image: reader.result,
                        }));
                      };
                      reader.readAsDataURL(file); // ✅ This line is crucial
                    }
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <Form.Select
          className='mb-3'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </Form.Select>
      </div>

      <div>
        {menuItems.length === 0 ? (
          <p>No entries yet</p>
        ) : (
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.item}</td>
                  <td>
                    {entry.image ? (
                      <img
                        src={entry.image}
                        alt='thumbnail'
                        height='40'
                        style={{ objectFit: "cover", borderRadius: "4px" }}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>${parseFloat(entry.price).toFixed(2)}</td>
                  <td>{entry.category}</td>
                  <td>
                    <Button onClick={() => handleEdit(index)}>Edit</Button>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default AdminMenuForm;
