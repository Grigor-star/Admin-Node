const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let arr = [];
const port = process.env.PORT || 3001;

app.post("/api", (req, res) => {
  console.log("Post request is recived");
  const data = req.body;
  arr.push(data);
});

app.get("/api", (req, res) => {
  console.log("Get request is recived");
  res.json(arr);
});

app.listen(port, () => {
  console.log(
    "Server is listening on port https://admin-node-8n5z.onrender.com/api"
  );
});
