const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  const name = process.env.MY_NAME || 'Jean Claude Van Damme';
  const city = process.env.MY_CITY || 'Brussels';
  const language = process.env.MY_LANGUAGE || 'Awarness';
  const message = `I am ${name}, wilder in ${city}, and I love ${language}.`;
  res.send(message);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});