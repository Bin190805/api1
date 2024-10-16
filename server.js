const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Đảm bảo bạn đã cài đặt body-parser
const subscribersRouter = require('./routes/subscribers'); // Đảm bảo đúng đường dẫn tới file subscribers.js

const app = express();

// Sử dụng body-parser để xử lý dữ liệu JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng các route
app.use('/subscribers', subscribersRouter);

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://hailong:lCKdEJv1hNXkZGBH@data1.n4z1d.mongodb.net/test?retryWrites=true&w=majority'
, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});