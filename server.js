const express = require("express");
const app = express();
const dbConfig = require("./db");

const roomsRoutes = require("./routes/roomsRoutes");    
const usersRoutes = require("./routes/usersRoutes");
const bookingRoutes = require("./routes/bookingsRoutes");
app.use(express.json());  


app.use("/api/rooms", roomsRoutes);
app.use("/api/users" , usersRoutes);
app.use("/api/bookings" , bookingRoutes); 
const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server running on port ${port}`);
  }
});

