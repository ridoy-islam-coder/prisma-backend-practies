import 'dotenv/config';
import express from 'express';
import userRouter from './router/userRotur.js'; // Adjust the import path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});




app.use('/api', userRouter);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});