const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

let arr = [];

app.post("/api", (req, res) => {
  const data = req.body;
  arr.push(data);
});

app.get("/api", (req, res) => {
  res.json(arr);
});

app.listen(3001, () => {
  console.log("Server is listening on port http://localhost:3001/api");
});
