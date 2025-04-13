const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

exports.addCategory = async (req, res) => {
  const { name, itemCount, imageUrl } = req.body;

  try {
    const newCategory = await Category.create({ name, itemCount, imageUrl });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Error adding category", error: err.message });
  }
};

exports.editCategory = async (req, res) => {
  const { id } = req.params;
  const { name, itemCount, imageUrl } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, itemCount, imageUrl },
      { new: true }
    );
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: "Error updating category" });
  }
};
