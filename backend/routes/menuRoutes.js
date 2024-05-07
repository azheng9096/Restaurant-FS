const express = require("express");
const {
  getMenuItems,
  createMenuItem,
  getMenuItem,
  deleteMenuItem,
  updateMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

// GET all menu items
router.get("/", getMenuItems);

// GET specific menu item
router.get("/:id", getMenuItem);

// POST menu item
router.post("/", createMenuItem);

// DELETE a menu item
router.delete("/:id", deleteMenuItem);

// UPDATE a menu item
router.patch("/:id", updateMenuItem);

module.exports = router;