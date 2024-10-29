const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const people = [
  {
    id: 1,
    name: "Ahmed Swati",
    age: 23,
    city: "Mansehra"
  },
  {
    id: 2,
    name: "Huzaifa Khan",
    age: 25,
    city: "Islamabad"
  },
  {
    id: 3,
    name: "Huraira Khan",
    age: 21,
    city: "Abbottabad"
  }
];

app.get('/users', (req, res, next) => {
  res.status(200).json(people); 
});

app.get('/users/:id', (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const person = people.find(p => p.id === userId);

  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
const port =8004;
app.listen(port, () => {
  console.log("Server is running on port 8004");
});
