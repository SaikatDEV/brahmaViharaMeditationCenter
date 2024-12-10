require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Configure Multer for image uploads
const upload = multer({ dest: "uploads/" });

// Connect to MariaDB
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MariaDB:", err);
    return;
  }
  console.log("Connected to MariaDB!");
});

// Endpoint to save form data
app.post("/api/posts", upload.single("image"), (req, res) => {
  const { title, description, time } = req.body;

  if (!title || !description || !time) {
    return res.status(400).send("Title, description, and time are required.");
  }

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const query =
    "INSERT INTO posts (title, description, time, image_url) VALUES (?, ?, ?, ?)";
  db.query(query, [title, description, time, imageUrl], (err, result) => {
    if (err) {
      console.error("Error saving post data:", err);
      return res.status(500).send("Error saving post data.");
    }
    res.status(201).json({
      message: "Post created successfully!",
      post: {
        id: result.insertId,
        title,
        description,
        time,
        imageUrl,
      },
    });
  });
});

// Endpoint to fetch posts
app.get("/api/posts", (req, res) => {
  const query = "SELECT * FROM posts ORDER BY time DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err);
      return res.status(500).send("Error fetching posts.");
    }
    res.json(results);
  });
});

// Start server
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
