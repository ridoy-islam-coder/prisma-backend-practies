import 'dotenv/config';

import express from 'express';
import router from './router/index.js'; // Adjust the import path as necessary

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});




app.use(router)





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});