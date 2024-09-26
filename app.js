const express = require('express');

const port = 8000;

//express
const app = express();

//Install an ApI
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello from server side!' });
});


//listen on specific port
app.listen(port, (err) => {
  if (err) {
    console.log(`error, ${err}`);
  }
  console.log(`server has been stared at port ${port}`);
});
