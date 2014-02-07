/**
 * --------------------------------------------------------
 * 进销存，设置页面
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-26 下午5:56
 * --------------------------------------------------------
 */

var home = {},
	redisCache=require('../lib/redisApi.js'),
	tools=require('../lib/tools.js'),
	userApi=require('../models/userApi.js'),
	config=require('../config/config.js'),
	async=require('async');

home.index = function(req, res){
	res.render('settingnav');
}

//显示用户页面
home.user=function(req,res) {
    res.render('user');
}

//显示添加用户页面
home.adduser=function(req,res) {
    res.render('form/adduser');
}

/* 添加新用户 */
home.auser=function(req,res) {
    var userInfo={
        userName:tools.xssFilter(req.body.username),
        Password:tools.xssFilter( req.body.password),
        Phone: tools.xssFilter(req.body.phone)
    };
    userApi.insert(userInfo,function(err,doc) {
       if(err) {
           res.send(err);
           return;
       }
       res.send(doc);
    });
}

home.updatepassword=function(req,res) {
	res.render('form/updatepassword');
}

/** 更新用户密码 **/
home.uppassword=function(req,res) {
	userApi.upPassword(tools.xssFilter(req.query.id),tools.xssFilter(req.body.password));
	res.send('true');
}

/**
 * 删除用户
 * @param req
 * @param res
 */
home.del=function(req,res) {
	userApi.del(tools.xssFilter(req.body.id));
	res.send('true');
}

/************* custom *****************/
home.custom=function(req,res) {
	res.render("custom");
}

module.exports = home;
