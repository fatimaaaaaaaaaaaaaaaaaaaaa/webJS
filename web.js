const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use(Express.static(__dirname+'/public'));
app.get('/playvideo', (req,res) => {
  const range = req.headers.range
  console.log(range)

})