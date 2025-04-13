const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getAllCategories,
  addCategory,
  editCategory,
} = require("../controllers/categoryController");

router.get("/", auth, getAllCategories);
router.post("/", auth, addCategory);
router.put("/:id", auth, editCategory);

module.exports = router;
