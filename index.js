const express = require("express");
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.render('home'));

app.listen( process.env.PORT || 8888,()=>console.log('Server started'));