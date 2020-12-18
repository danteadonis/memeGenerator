const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// const publicPath = path.join(__dirname, 'build');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
