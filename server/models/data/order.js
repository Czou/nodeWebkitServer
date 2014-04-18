/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var Order={},
	userGood = require('./usergood.js'),
	Goods = require('./goods.js'),
	tools =  require('../../lib/tools.js'),
	sqlite3=require('sqlite3').verbose(),
	db=new sqlite3.Database('data.sqlite');
/**
 * 创建新商品
 * @param orderInfo
 * @param callback
 */
Order.insert = function(orderInfo, callback){
	db.serialize(function() {
		db.run("INSERT into [order] (uid,goods,orderid,express,des,jine,phone,area) values ("+orderInfo.uid+",'"+JSON.stringify(orderInfo.goods)+"','"+orderInfo.orderid+"','"+orderInfo.express+"','"+orderInfo.des+"',"+orderInfo.jine+",'"+orderInfo.phone+"','"+orderInfo.area+"')");
		db.get("select last_insert_rowid() id",function(err,doc) {
			callback(err,doc);
		});
	});

	var goods = orderInfo.goods;
	var goodsLength = goods.length;
	/** 更新用户商品销售记录 **/
	for(var i=0; i<goodsLength; i++) {
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
	db.run("update [order] set "+key+" = ? where id = ?",[value,id]);
	if( key == 'state') {
		Order.get(id, function(err,doc) {//更新库存
			var goodInfo = doc.goods;
			var goodInfoLength = goodInfo.length;
			for(var i=0; i<goodInfoLength; i++) {
				Goods.updateBase(goodInfo[i]);
			}
		});
	}
}

/**
 * 修改字段
 * @param id  id
 * @param key 字段
 * @param value 字段的值
 */
Order.updateAll = function(id, orderInfo) {
	db.run("update [order] set uid = ?,goods=?,express=?,des=?,jine=?,phone=?,area=? where id = ?",[orderInfo.uid,JSON.stringify(orderInfo.goods),orderInfo.express,orderInfo.des,orderInfo.jine,orderInfo.phone,orderInfo.area,id]);
}

/**
 * 删除用户
 * @param id 用户id
 */
Order.del=function(id) {
	db.run("delete from user where id = ?",[id]);
}
/**
 * 获取订单列表
 * @param kw
 * @param cp
 * @param state
 * @param callback
 */
Order.page = function(uid,time,cp, state, callback) {
	var query = '';
	if(uid != 0) {
		query += ' and uid='+uid;
	}
	if(state != -1) {
		query += ' and state='+state;
	}
	db.all("select A.id,B.user,A.[orderid],A.express,A.area,A.des,A.[jine],A.phone,A.state,A.time from [order] as A,[custom] as B where A.uid=B.id  " + query,function(err,rows) {
		callback(err,rows);
	});
}

/** 获取订单 **/
Order.get = function(id, callback) {
	db.all('SELECT A.*,B.user FROM [order] as A,[custom] as B where A.uid=B.id and A.id=? ',[id],function(err,doc) {
		callback(err,doc);
	});
}


module.exports = Order;