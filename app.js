const express = require('express');
const bodyParser = require('body-parser')

let items = [];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){

  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day, items: items})
});

app.post('/', function(req, res){
  items.push(req.body.newItem);
  res.redirect('/');
});




app.listen(3000, function(){
  console.log('Server started on port 3000');
});
