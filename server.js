const http = require('http');
const webroutes = require('./routes/webroutes');
const bodyParser = require('body-parser');
const express = require('express');
// const db = require('./db/database');
const app = express();


app.set('view engine','ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });

// db.execute('SELECT * FROM users')
// .then(result =>{
//     console.log(result[0]);
// })
// .catch(err =>{
//     console.log(err);
// });



const server = http.createServer(app);



app.use(express.static('public'));
app.use('/home',webroutes);

app.use('/',(req,res,next)=>{
    res.redirect('/home');
});


server.listen(8000);
