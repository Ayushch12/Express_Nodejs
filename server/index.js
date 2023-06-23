require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require('./routes/productRoutes');

// Create an instance of the Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize Socket.IO by passing the server instance
const io = socketIO(server);

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle socket events
  socket.on("message", (data) => {
    console.log("Received message:", data);

    // Broadcast the message to all connected clients
    io.emit("message", data);
  });

  // Handle socket disconnections
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/productRoutes", productRoutes);


const port = process.env.PORT || 8080;

// Start the server
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
