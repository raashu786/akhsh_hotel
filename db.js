const mongoose = require("mongoose");
 const mongoURL = 'mongodb+srv://akhsh_hotel_user:raashidariba@atlascluster.nvdvq9n.mongodb.net/akhsh_hotel';


mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});

connection.on('open', () => {
  console.log('MongoDB Connected Successfully Ibbo Baby');
});

module.exports = mongoose;

