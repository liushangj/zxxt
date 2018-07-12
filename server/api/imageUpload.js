/**
 * Created by Administrator on 2018/7/1.
 */
/**
 * Created by Administrator on 2018/6/27.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var fs = require('fs');

// console.log(getTime);

// 创建 application/x-www-form-urlencoded 编码解析
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
router.use(express.static('server'));
/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});
connection.connect();*/


// --index
router.post('/imageupload', (req, res, next) => {


    /*console.log('img',req.files[0]);
     var des_file = __dirname = '/' + req.files[0].originalname ;
     fs.readFile( req.files[0].path,function (err,data) {
     fs.writeFile(des_file,data,function (err) {
     if(err){
     console.log(err);
     }else {
     var response = {
     msg:'File uploaded successfully',
     filename:req.files[0].originalname
     };
     console.log( response );
     }
     })
     });*/


    req = req.body;
    /*  console.log('bo?dy',req);*/
/*     console.log('_img',req.body);
     console.log("11111",req.rawBody);*/
    var _img = req.image;
    _img = _img.replace(/^data:image\/\w+;base64,/, "");

    var dataBuffer = new Buffer(_img, 'base64') ,
        _timer = +new Date();
    fs.writeFile('static/img/license_'+ _timer +'.png', dataBuffer, function (err) {
        if (err) {
            console.log(err);
            res.send({'img' : '保存失败！' , status : -1 }).end();
        } else {
            res.send({'msg': '保存成功！', 'url' : 'static/img/license_'+ _timer +'.png' , 'status': 1}).end();
        }
    });

});


// connection.end();

module.exports = router;

















