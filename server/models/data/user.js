/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var User={},
    sqlite3=require('sqlite3').verbose(),
    db=new sqlite3.Database('data.sqlite');
/**
 * 创建新用户
 * @param userInfo
 * @param callback
 */
User.insert = function(userInfo, callback){
    db.serialize(function() {
        db.run("INSERT into user (userName,password,phone) values ('"+userInfo.userName+"','"+userInfo.Password+"','"+userInfo.Phone+"')");
       db.get("select last_insert_rowid() id",function(err,doc) {
            callback(err,doc);
        });
    });
}

/**
 * 获取用户列表
 * @param kw
 * @param cp
 * @param callback
 */
User.page = function(kw,cp,callback) {
    db.all("select * from [user] where userName != 'root'",function(err,rows) {
        callback(err,rows);
    });
}
/*
 获取某个用户的注册信息
 需要提供参数 userId
 */
User.findone=function(userId,callback){
   user.findOne({_id:schema.ObjectId(userId)},function(err,doc){
       callback(err,doc);
   })
}

/*
    用户登录
 */
User.login=function(uname,callback){
    user.findOne({userName:uname},function(err,doc){
        callback(err,doc);
    });
}


module.exports = User;