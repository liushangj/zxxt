/**
 * Created by Administrator on 2018/7/2.
 */
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

// console.log(getTime);

// 创建 application/x-www-form-urlencoded 编码解析
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
router.use(express.static('server'));
 const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '123456',
 database: 'user'
 });
 connection.connect();


// --index
router.post('/web', (req, res, next) => {
    // req = req.body;

    //查
    var selectSql = 'SELECT total_user,total_peoData FROM `webIndex`';
    connection.query(selectSql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();
            return
        }
        if (result.length != 0) {
            // doRegister(req, res);
            console.log(result);
            res.send({'msg': '成功！','data':result, 'status': 1}).end();
        } else {
            res.send({'msg': '查询失败！请烧糊再试', 'status': -1}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();
        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    });

});


// connection.end();

module.exports = router;

















