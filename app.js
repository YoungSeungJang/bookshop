const path = require('path');
// dotenv 모듈
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env') });

// express 모듈
const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');
const categoryRouter = require('./routes/category');

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/likes', likeRouter);
app.use('/carts', cartRouter);
app.use('/orders', orderRouter);
app.use('/category', categoryRouter);

app.listen(process.env.PORT, () => {
  console.log('server running', process.env.PORT);
});
