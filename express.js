/**
 * Created by Administrator on 2018/6/27.
 */
var express = require('express');
var app = express();
const mysql = require('mysql');
// const bodyParser = require('body-parser');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'user'
});
connection.connect();
const userRoutes = require('./server/api/user');
const imgUpload = require('./server/api/imageUpload');
const index = require('./server/api/index');
const credit = require('./server/api/credit');
const inqure = require('./server/api/inqure');

app.use('/auth', userRoutes);
app.use('/auth',imgUpload);
app.use('/auth',index);
app.use('/auth',credit);
app.use('/auth',inqure);

// app.use(express.static('./'))
/*app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded*/

/*app.get('/index',function (req,res) {
   res.send('hello world')
});*/
/*const router = express.Router();
router.get('/users',(req, res, next) => {
    /!*User.find({}).then(users => {
    res.send(users)
}).catch(next)*!/
    res.send('get : /user');
})*/
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081,http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
// 错误处理
app.use((err, req, res, next) => {
    res.status(442).send({ error: err.message })
});

var server = app.listen(4000,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});




















