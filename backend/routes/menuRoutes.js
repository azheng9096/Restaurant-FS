const express = require("express");

const app = express.Router();

// GET all menu items
app.get("/", (req, res) => {});

// GET specific menu item
app.get("/:id", (req, res) => {});

// POST menu item
app.post("/", (req, res) => {});

// DELETE a menu item
app.delete("/:id", (req, res) => {});

// UPDATE a menu item
app.patch("/:id", (req, res) => {});