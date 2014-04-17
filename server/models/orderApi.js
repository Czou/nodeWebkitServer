/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-10 上午11:05
 * --------------------------------------------------------
 */
var orderApi = {},
	Order = require('./data/order.js')
  config=require('../config/config.js');


orderApi.insert = function(orderInfo,callback){
	Order.insert(orderInfo,function(err,doc){
		callback(err,doc);
	});
}

orderApi.page = function(uid,time,cp, state, callback) {
	Order.page(uid, time, cp, state, function(err,rows) {
		callback(err,rows);
	});
}

orderApi.pageName = function(kw,cp,callback) {
	Order.pageName(kw,cp,function(err,rows) {
		callback(err,rows);
	});
}

orderApi.getByName = function(name,callback) {
	Order.getByName(name,function(err,doc) {
		callback(err,doc);
	});
}
/**
 * 更新用户密码
 * @type {document.password|connection.password|*|object.auth.password|password|config.password}
 */
orderApi.update = function(id,key,value) {
	Order.update(id,key,value);
}

orderApi.del = function(id) {
	Order.del(id);
}

module.exports = orderApi;