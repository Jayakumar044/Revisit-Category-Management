import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Category Dashboard</h1>
      <Link to="/add-category" className="bg-green-500 text-white py-2 px-4 rounded mb-4 inline-block">
        Add Category
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
