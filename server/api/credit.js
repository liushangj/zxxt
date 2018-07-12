/**
 * Created by Administrator on 2018/6/27.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

var {getTime} = require('./../__commons__/commons');
var fs = require('fs');
var multer = require('multer');

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

// --添加记录
router.post('/addcredit', (req, res, next) => {
    req = req.body;
    console.log('addcredit----body', req);
    console.log('addcredit----loan', req.loanId);
    console.log('addcredit----overtimeId', req.overtimeId);
    /*  console.log('----------',req.loan1.split(','));
      console.log('----------',req.loan1.split(',')[0]);
      console.log('----------',req.loan[0]);*/
    var params = req;
    params.loanId = params.loanId.split(',');
    params.overtimeId = params.overtimeId.split(',');

    //判断

    /*
    *
    * username:this.name.trim(),
                    mobile:this.tel.trim(),
                    idCard:this.id_card.trim(),
                    loanId:this.loanId.toString(),
                    overtimeId:this.overtimeId.toString(),
                    sex:this.sex,
                    mark:this.mark,
                    operator_user:this.operator_user.name,
                    operator_time:new Date()
    * */
    if (!req.username) {
        res.send({'msg': '请输入姓名！', 'status': -1}).end();
        return
    }
    if (!req.mobile) {
        res.send({'msg': '请输入手机号！', 'status': -1}).end();
        return
    }
    if (!req.idCard) {
        res.send({'msg': '请输入身份证号！', 'status': -1}).end();
        return
    }
    if (!req.education) {
        res.send({'msg': '请选择学历！', 'status': -1}).end();
        return
    }
    if (!req.loanId && !req.overtimeId) {
        res.send({'msg': '请添加记录！', 'status': -1}).end();
        return
    }

    //存user
    var insertSql = 'INSERT INTO `credit_user` (username,mobile,idCard,sex,education,mark,operator_user,operator_time) VALUES (?,?,?,?,?,?,?,?)';
    var insertParams = [params.username, params.mobile, params.idCard, params.sex, params.education, params.mark, params.operator_user, getTime(params.operator_time)];

    connection.query(insertSql, insertParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        if (result.length == 0) {//保存成功,更新贷款记录
            res.send({'msg': '保存出错，请稍后再试！', 'status': -1}).end();
        } else {
            UpdateHistory(result.insertId, params.loanId, params.overtimeId, res);
        }
        /*
                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);
                console.log('INSERT ID:', result);
                console.log('-----------------------------------------------------------------\n\n');*/
    })
});

//添加贷款记录
router.post('/addloan', (req, res, next) => {
    req = req.body;
    // console.log('addloan-----body',req);
//判断
    if (!req.company) {
        res.send({'msg': '请输入公司名称！', 'status': -1}).end();
        return
    }
    if (!req.begin_time) {
        res.send({'msg': '请选择贷款日期！', 'status': -1}).end();
        return
    }
    if (!req.end_time) {
        res.send({'msg': '请选择还款到期时间！', 'status': -1}).end();
        return
    }
    if (!req.status) {
        res.send({'msg': '请选择还款状态！', 'status': -1}).end();
        return
    }
    if (!req.operator_user) {
        res.send({'msg': '请登录！', 'status': -100}).end();
        return
    }

    //查
    var insertSql = 'INSERT INTO `credit_loan` (company,begin_time,end_time,status,operator_user) VALUES (?,?,?,?,?)';
    var insertParams = [req.company, getTime(req.begin_time), getTime(req.end_time), req.status, req.operator_user];

    connection.query(insertSql, insertParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        // console.log('addloan--result--', result);
        if (result.length == 0) {
            res.send({'msg': '添加失败，请稍后再试！', 'status': -1}).end();
        } else {
            res.send({'msg': '添加成功', 'status': 1, 'data': {'loanId': result.insertId}}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    })
});


//添加逾期记录
router.post('/addovertime', (req, res, next) => {
    req = req.body;
    // console.log('addloan-----body',req);
//判断
    if (!req.company) {
        res.send({'msg': '请输入公司名称！', 'status': -1}).end();
        return
    }
    if (!req.begin_time) {
        res.send({'msg': '请选择贷款日期！', 'status': -1}).end();
        return
    }
    if (!req.end_time) {
        res.send({'msg': '请选择还款到期时间！', 'status': -1}).end();
        return
    }
    if (!req.status) {
        res.send({'msg': '请选择还款状态！', 'status': -1}).end();
        return
    }
    if (!req.operator_user) {
        res.send({'msg': '请登录！', 'status': -100}).end();
        return
    }

    //查
    var insertSql = 'INSERT INTO `credit_overtime` (company,begin_time,end_time,status,operator_user) VALUES (?,?,?,?,?)';
    var insertParams = [req.company, getTime(req.begin_time), getTime(req.end_time), req.status, req.operator_user];

    connection.query(insertSql, insertParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        // console.log('addloan--result--', result);
        if (result.length == 0) {
            res.send({'msg': '添加失败，请稍后再试！', 'status': -1}).end();
        } else {
            res.send({'msg': '添加成功', 'status': 1, 'data': {'overtimeId': result.insertId}}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();
        /*
                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);
                console.log('INSERT ID:', result);
                console.log('-----------------------------------------------------------------\n\n');*/
    })
});

// connection.end();

function UpdateHistory(userid, loanId, overtimeId, res) {

    var _where_loan = ' WHERE id =',
        _where_over = ' WHERE id =';
    if (loanId) {
        loanId.forEach(function (item, index) {
            if (index == 0) {
                _where_loan += item;
            } else {
                _where_loan += ' OR id=' + item
            }
        });
    }
    if (overtimeId) {
        overtimeId.forEach(function (item, index) {
            if (index == 0) {
                _where_over += item;
            } else {
                _where_over += ' OR id=' + item
            }
        });
    }
    var updateSql1 = 'UPDATE `credit_loan` SET userid = ' + userid + _where_loan;
    var updateSql2 = 'UPDATE `credit_overtime` SET userid = ' + userid + _where_over;
    if (loanId) {
        connection.query(updateSql1, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR111] - ', err.message);
                res.send({'msg': '服务器出错', 'status': -1}).end();
                return
            }
            console.log('update--result1111--', result);
            if (result.length == 0) {
                res.send({'msg': '提交失败，请稍后再试！', 'status': -1}).end();
            } else {//成功 ， 保存 逾期 记录
                //统计
                var countSql =

                    connection.query(updateSql2, function (err2, result2) {
                        if (err2) {
                            console.log('[INSERT ERROR2222] - ', err2.message);
                            res.send({'msg': '服务器出错', 'status': -1}).end();
                            return
                        }
                        console.log('update--result2222--', result2);
                        if (result2.length == 0) {
                            res.send({'msg': '提交失败，请稍后再试！', 'status': -1}).end();
                        } else {//成功 ， 保存 逾期 记录
                            res.send({'msg': '保存成功！', 'status': 1}).end();
                        }
                        /*
                                        console.log('--------------------------INSERT----------------------------');
                                        //console.log('INSERT ID:',result.insertId);
                                        console.log('INSERT ID:', result);
                                        console.log('-----------------------------------------------------------------\n\n');*/
                    })


            }
            /*  console.log('--------------------------INSERT----------------------------');
              //console.log('INSERT ID:',result.insertId);
              console.log('INSERT ID:', result);
              console.log('-----------------------------------------------------------------\n\n');*/
        })
    } else {
        connection.query(updateSql2, function (err2, result2) {
            if (err2) {
                console.log('[INSERT ERROR2222] - ', err2.message);
                res.send({'msg': '服务器出错', 'status': -1}).end();
                return
            }
            console.log('update--result2222--', result2);
            if (result2.length == 0) {
                res.send({'msg': '提交失败，请稍后再试！', 'status': -1}).end();
            } else {//成功 ， 保存 逾期 记录
                res.send({'msg': '保存成功！', 'status': 1}).end();
            }
        })
    }

}

//验证身份证
router.post('/check_credit_idcard', (req, res, next) => {
    req = req.body;
    console.log('idcard---',req.idcard);
    //查
    var selectSql = 'SELECT * FROM `credit_user` WHERE idCard=?';
    var val = req.idcard;
    console.log('selectSql---',selectSql);
    connection.query(selectSql,val, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send({'msg': '服务器出错', 'status': -1}).end();

            return
        }
        console.log('idcheck--result--', result);
        if (result.length == 0) {
            res.send({'msg': '该账户信息不存在', 'status': 1}).end();
        } else {
            res.send({'msg': '该账户信息已经存在！', 'status': -1, 'data': result[0]}).end();
        }
        // res.send({ 'msg': '注册成功', 'status': 1 }).end();
        /*
                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);
                console.log('INSERT ID:', result);
                console.log('-----------------------------------------------------------------\n\n');*/
    })
});

module.exports = router;

















