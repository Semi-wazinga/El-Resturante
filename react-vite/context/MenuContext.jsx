// src/context/MenuContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch menu from backend and database
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://localhost:3000/menu");
        setMenuItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // helper: convert JS object into FormData
  const buildFormData = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    return formData;
  };

  // add item (admin only)
  const addMenuItem = async (item) => {
    const formData = buildFormData(item);
    const res = await axios.post("http://localhost:3000/menu", formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    setMenuItems((prev) => [res.data, ...prev]);
  };
  // update item (admin only)
  const updateMenuItem = async (id, updates) => {
    const formData = buildFormData(updates);
    const res = await axios.put(`http://localhost:3000/menu/${id}`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    setMenuItems((prev) =>
      prev.map((item) => (item._id === id ? res.data : item))
    );
  };
  // remove item (admin only)
  const deleteMenuItem = async (id) => {
    await axios.delete(`http://localhost:3000/menu/${id}`, {
      withCredentials: true,
    });
    setMenuItems((prev) => prev.filter((item) => item._id !== id));
  };
  return (
    <MenuContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        isLoading,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
