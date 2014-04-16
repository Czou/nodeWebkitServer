/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var userGood={},
	sqlite3=require('sqlite3').verbose(),
	db=new sqlite3.Database('data.sqlite');
/**
 * 创建新商品
 * @param goodsInfo
 * @param callback
 */
userGood.insert = function(uid,goodsInfo){
	db.serialize(function() {
		db.run("INSERT into [usergood] (uid,name,unit,sale,norms) values ("+uid+",'"+goodsInfo.name+"','"+goodsInfo.unit+"',"+goodsInfo.sale+",'"+goodsInfo.norms+"')");
	});
}

/**
 * 修改字段
 * @param id  id
 * @param key 字段
 * @param value 字段的值
 */
userGood.update = function(id, key, value) {
	db.run("update goods set "+key+" = ? where id = ?",[value,id]);
}


userGood.pageName = function(name, uid, callback) {
	db.all("SELECT * FROM [usergood] where name like '%"+name+"%' and uid ="+uid+" ",function(err,doc) {
		callback(err,doc);
	});
}

userGood.getByName = function(name, uid, callback) {
	db.all('SELECT * FROM [usergood] where name=?  and uid=?',[name,uid],function(err,doc) {
		callback(err,doc);
	});
}


module.exports = userGood;