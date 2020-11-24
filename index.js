var express = require('express');
const { render } = require('pug');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');// npm install cookie-parser de doc duoc cookie cho create

var userRoute = require('./routes/user.route');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render('index',{
        name: 'Bau'
    })
})

app.use('/users', userRoute)

app.listen(port,()=>{
    console.log('server lintening on port '+ port);
})