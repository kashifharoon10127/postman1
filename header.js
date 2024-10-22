const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Sample user data (in a real app, you'd use a database)
const users = [
  { email: "kashif@gmail.com", password: "k123" },
  { email: "haroon@gmail.com", password: "h123" },
  { email: "ali@gmail.com", password: "a123" },
  { email: "ahmed@gmail.com", password: "a123" },
  { email: "malik@gmail.com", password: "m123" },
  { email: "xyz@gmail.com", password: "x123" },
];

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const  email = req.headers.email;

  // Check if user exists
  // const user = users.find(u => u.email === email );
  let user = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      user = true;
    }
  }

  if (user) {
    res
      .status(201)
      .json({ message: "Email Already exsit using header", token: "Some token data" });
  } else {
    res.status(401).json({ error: "Invalid Email id using header" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
