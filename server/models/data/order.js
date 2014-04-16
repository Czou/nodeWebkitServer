/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var Order={},
	userGood=require('./usergood.js'),
	sqlite3=require('sqlite3').verbose(),
	db=new sqlite3.Database('data.sqlite');
/**
 * 创建新商品
 * @param orderInfo
 * @param callback
 */
Order.insert = function(orderInfo, callback){
	db.serialize(function() {
		db.run("INSERT into [order] (uid,goods,orderid,express,des,jine,phone) values ("+orderInfo.uid+",'"+JSON.stringify(orderInfo.goods)+"','"+orderInfo.orderid+"','"+orderInfo.express+"','"+orderInfo.des+"',"+orderInfo.jine+",'"+orderInfo.phone+"')");
		db.get("select last_insert_rowid() id",function(err,doc) {
			callback(err,doc);
		});
	});

var goods = orderInfo.goods;
	for(var i=0; i<goods.length; i++) {
		if(goods[i].state =='') {
			userGood.insert(orderInfo.uid, goods[i]);
		}
	}
}

/**
 * 修改字段
 * @param id  id
 * @param key 字段
 * @param value 字段的值
 */
Order.update = function(id, key, value) {
	db.run("update goods set "+key+" = ? where id = ?",[value,id]);
}

/**
 * 删除用户
 * @param id 用户id
 */
Order.del=function(id) {
	db.run("delete from user where id = ?",[id]);
}
/**
 * 获取用户列表
 * @param kw
 * @param cp
 * @param callback
 */
Order.page = function(kw,cp,callback) {
	db.all("select * from [goods]",function(err,rows) {
		callback(err,rows);
	});
}

/**
 * 获取商品列表名称
 * @param kw
 * @param cp
 * @param callback
 */
Order.pageName = function(kw,cp,callback) {
	db.all("select DISTINCT [name] from [goods]",function(err,rows) {
		callback(err,rows);
	});
}

Order.getByName = function(name, callback) {
	db.all('SELECT * FROM [goods] where name=? ',[name],function(err,doc) {
		callback(err,doc);
	});
}

module.exports = Order;