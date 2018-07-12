/**
 * Created by Administrator on 2018/6/27.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const http = require('http');
const url=require('url');
const request = require("request");


var {getTime} = require('./../__commons__/commons');
var fs = require('fs');
var multer = require('multer');

// console.log(getTime);

// 创建 application/x-www-form-urlencoded 编码解析
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
router.use(express.static('server'));
router.use(multer({dest:'/tmp/'}).array('image'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});
connection.connect();


// --index
router.post('/register', (req, res, next) => {
    req = req.body;
    //判断
    if(!req.name.trim()){
        res.send({'msg': '请输入企业用户名称！', 'status': -1}).end();
        return
    }else if(!req.registration_id.trim()){
        res.send({'msg': '请输入企业注册号！', 'status': -1}).end();
        return
    }else if(!req.license){
        res.send({'msg': '请上传营业执照！', 'status': -1}).end();
        return
    }else if(!req.type){
        res.send({'msg': '请选择企业类型！', 'status': -1}).end();
        return
    }else if(!req.status){
        res.send({'msg': '请选择企业状态！', 'status': -1}).end();
        return
    }else if(!req.license_code){
        res.send({'msg': '请输入联盟许可码！', 'status': -1}).end();
        return
    }else if(!req.Registered_address){
        res.send({'msg': '请输入注册地址！', 'status': -1}).end();
        return
    }else if(!req.mobile){
        res.send({'msg': '请输入正确的联系方式！', 'status': -1}).end();
        return
    }else if(!req.email){
        res.send({'msg': '请输入邮箱！', 'status': -1}).end();
        return
    }else if(!req.legal_person){
        res.send({'msg': '请输入法人姓名！', 'status': -1}).end();
        return
    }else if(!req.begin_time){
        res.send({'msg': '请选择成立日期！', 'status': -1}).end();
        return
    }else if(!req.end_time){
        res.send({'msg': '请选择营业期限！', 'status': -1}).end();
        return
    }else if(!req.authority){
        res.send({'msg': '请输入登记机关！', 'status': -1}).end();
        return
    }else if(!req.scope){
        res.send({'msg': '请输入营业范围！', 'status': -1}).end();
        return
    }

    //查
    var selectSql = 'SELECT registration_id FROM `user` WHERE registration_id=?';
    var selectParams = req.registration_id;
    connection.query(selectSql, selectParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        if (result.length == 0) {
            doRegister(req, res);
        } else {
            res.send({'msg': '注册失败，该企业已经注册！', 'status': -1}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    })
});

//注册
function doRegister(params, res) {

    var insertSql = 'INSERT INTO `user` (company_name,registration_id,license,type,status,license_code,Registered_address,mobile,email,legal_person,begin_time,end_time,authority,scope,password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,MD5(?))';
    var insertParams = [params.name,params.registration_id,params.license,params.type,params.status,params.license_code,params.Registered_address,params.mobile,params.email,params.legal_person,getTime(params.begin_time),getTime(params.end_time),params.authority,params.scope,params.pwd];
    connection.query(insertSql, insertParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        res.send({'msg': '注册成功', 'status': 1}).end();

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');

    });
}

router.post('/login', (req, res, next) => {
    var pathname = url.parse(req.url).pathname,
        content = '',
        headers = req.headers;
    req = req.body;
    console.log('req---',req);
    console.log(typeof req);
    //判断
    if(!req.username){
        res.send({'msg': '请输入账号！', 'status': -1}).end();
        return
    }else if(!req.password){
        res.send({'msg': '请输入登录密码！', 'status': -1}).end();
        return
    }
    //查
    var selectSql = 'SELECT username,password FROM `user` WHERE username=? AND password=MD5(?)';
    var selectParams = [req.username,req.password];
    connection.query(selectSql, selectParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        if (result.length != 0) {
            // doRegister(req, res);
            // console.log(result);

            //区块链请求
            /*request({
                url: "http://bc.5niu.top:8081",
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: req
            }, function(error, response, body) {
                if (error) {
                    console.log('------------------------------------');
                    console.log('error1-----',error);
                    res.send({'msg':error});
                    res.end();
                    console.log('------------------------------------');
                }else{
                    console.log('------------------------------------');
                    console.log('body------',body);
                    // console.log('response',response)
                    console.log('------------------------------------');
                    res.send({msg:JSON.stringify(body)});
                    res.end();
                }
            });*/

            res.send({'msg': '登录成功！', 'status': 1}).end();
        } else {
            res.send({'msg': '登录失败！请检查账号或密码', 'status': -1}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    })
});


// connection.end();

module.exports = router;

















