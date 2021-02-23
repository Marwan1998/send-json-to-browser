const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



app.route("/")
.get(function(req, res){
  res.sendFile(__dirname + '/main.html');
})
.post(function(req, res){
  console.log(req.body);
});



app.listen(3000, function() {
  console.log("server is running...");
});
