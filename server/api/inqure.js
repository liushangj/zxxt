/**
 * Created by Administrator on 2018/6/27.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

var {getTime} = require('./../__commons__/commons');

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

//查询内部数据---基础信息
router.post('/internal_base', (req, res, next) => {
    req = req.body;

    //查
    var selectSql = 'SELECT u.id,u.username,count(distinct l.id),count(distinct co.id) FROM `credit_user` u left join `credit_loan` l on l.userid=u.id left join `credit_overtime` co on co.userid=u.id where u.id>0 group by u.id';
    connection.query(selectSql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        // console.log('addloan--result--', result);
        if (result.length == 0) {
            res.send({'msg': '查询失败，请稍后再试！', 'status': -1}).end();
        } else {
            res.send({'msg': '查询成功', 'status': 1, 'data': result}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('select ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    })
});

module.exports = router;

















