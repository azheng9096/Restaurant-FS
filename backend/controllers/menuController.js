const mongoose = require("mongoose");
const { menuItemModel } = require("../models/menuModel");

// GET all menu items
const getMenuItems = async (req, res) => {
  const menuItems = await menuItemModel.find({});

  res.status(200).json(menuItems);
};

// GET specific menu item
const getMenuItem = async (req, res) => {
  const { id } = req.params;

  // check that id is valid to prevent type error and server crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such menu item" });
  }

  const menuItem = await menuItemModel.findById(id);
  if (!menuItem) {
    return res.status(404).json({ error: "No such menu item" });
  }

  res.status(200).json(menuItem);
};

// POST menu item
const createMenuItem = async (req, res) => {
  const { name, description, category, price } = req.body;

  // add doc to db
  try {
    const menuItem = await menuItemModel.create({
      name,
      description,
      category,
      price,
    });
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a menu item
const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  const menuItem = await menuItemModel.findOneAndDelete({ _id: id });

  if (!menuItem) {
    return res.status(400).json({ error: "No such menu item" });
  }

  res.status(200).json(menuItem);
};

// UPDATE a menu item
const updateMenuItem = async (req, res) => {
  const { id } = req.params;

  // check that id is valid to prevent type error and server crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such menu item" });
  }

  const menuItem = await menuItemModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!menuItem) {
    return res.status(400).json({ error: "No such menu item" });
  }

  res.status(200).json(menuItem);
};

module.exports = {
  getMenuItems,
  getMenuItem,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
};
