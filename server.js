require('dotenv').config();
const express= require('express')
const app = express()
const mongoose= require('mongoose')
const subscribersRouter = require('./routes/subscribers');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true})
const db=mongoose.connection
db.once('open',()=> console.log('ketnoi db'))
app.use(express.json())
const subscriberRouter=require('./routes/subscribers')
app.use('/subscribers',subscriberRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});