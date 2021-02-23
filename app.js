const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.route("/")
  .get(function(req, res) {
    res.sendFile(__dirname + '/main.html');
  })

  .post(function(req, res) {
    const json = req.body.json;
    // res.redirect("/");   //it's not right to do it.
    res.send(json);
  });


app.listen(3000, function() {
  console.log("server is running...");
});
