import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/categories",
        { categoryName, itemCount, imageURL },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Add New Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          className="w-full p-3 border rounded mb-4"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Count"
          className="w-full p-3 border rounded mb-4"
          value={itemCount}
          onChange={(e) => setItemCount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-3 border rounded mb-4"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
