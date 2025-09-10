import { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { useMenu } from "../context/MenuContext";

const AdminMenuForm = () => {
  const { menuItems, updateMenuItem, deleteMenuItem } = useMenu();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const [editId, setEditId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2000 * 1024) {
      // optional size check (1000KB here, adjust as needed)
      alert("Image must be under 2000KB");
      return;
    }
    setFormData({ ...formData, image: file }); // 👈 keep file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateMenuItem(editId, formData); //PUT request to backend
      setEditId(null);
    } else {
      await addMenuItem(formData); //POST request to backend
    }

    setFormData({ name: "", price: "", category: "", image: null });
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      price: item.price,
      category: item.category,
      image: null, // we don’t refill file input
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await deleteMenuItem(id); // DELETE request to backend
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
                  name='name'
                  value={formData.name}
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
                <Form.Label>Category</Form.Label>
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
                {editId ? "update" : "submit"}
              </Button>
            </Col>

            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
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
                  <td>{entry.name}</td>
                  <td>
                    {entry.image ? (
                      <img
                        src={entry.image}
                        alt='thumbnail'
                        height='40'
                        style={{
                          height: "100px",
                          width: "100px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        }}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>${parseFloat(entry.price).toFixed(2)}</td>
                  <td>{entry.category}</td>
                  <td>
                    <Button onClick={() => handleEdit(entry)}>Edit</Button>
                    <Button onClick={() => handleDelete(entry._id)}>
                      Delete
                    </Button>
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
