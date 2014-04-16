/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-10 上午11:05
 * --------------------------------------------------------
 */
var goodApi = {},
	Goods= require('./data/goods.js'),
	userGood= require('./data/usergood.js'),
config=require('../config/config.js'),
	async=require('async'),
	md5 =require('../lib/tools').md5;


goodApi.insert=function(goodsInfo,callback){
	Goods.insert(goodsInfo,function(err,doc){
		callback(err,doc);
	})
}

goodApi.page = function(kw,cp,callback) {
	Goods.page(kw,cp,function(err,rows) {
		callback(err,rows);
	});
}

goodApi.pageName = function(kw,cp,callback) {
	Goods.pageName(kw,cp,function(err,rows) {
		callback(err,rows);
	});
}

goodApi.getByName = function(name, uid, callback) {
	async.parallel([
		function(cb){userGood.getByName(name,uid,cb)},
		function(cb){Goods.getByName(name,cb)}
	],function(err,results) {
		callback(err,results);
	});

	Goods.getByName(name,function(err,doc) {
		callback(err,doc);
	});
}
/**
 * 更新用户密码
 * @type {document.password|connection.password|*|object.auth.password|password|config.password}
 */
goodApi.update = function(id,key,value) {
	Goods.update(id,key,value);
}

goodApi.del = function(id) {
	Goods.del(id);
}

module.exports = goodApi;