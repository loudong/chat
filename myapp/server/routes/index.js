var express = require('express');
var router = express.Router();
var mysql = require('mysql')
const resData = {
	code:200,
	data:{},
	message:''
}

const connection = new mysql.createConnection({
  	host: 'localhost',
  	user: 'root',
  	password: '123456',
  	port: '3306',
  	database: 'test'
 })
connection.connect()
/* GET home page. */
router.post('/login', function(req, res, next) {
  const name = req.body.username;
  const psd = req.body.password;
  
  connection.query(`select psd from usertable where username = "${name}"`,function(err,data){
  	console.log(data[0])
  	if(!data){
  		resData.message = '用户名错误'
  	}else if(data[0].psd != psd){
      resData.message = '密码错误'
    }else{
  		resData.data.isLogin = true
  		resData.message = '登入成功'
  	}
  	res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
  	res.write(JSON.stringify(resData));
  	res.end()
  })
});

router.post('/register', function(req, res, next) {
  console.log(55)
  console.log(req.body);
  const name = req.body.username;
  const psd = req.body.password;
  /*connection.connect()*///不需要多次连接数据库否则会报错
  connection.query(`select * from usertable`,function(err,data){
  	var num = data.length
  	var id = num + 1;
  	console.log(num)
  	connection.query(`insert into usertable values(${id},"${name}","${psd}")`,function(err,data){
  		console.log('插入执行')
  		console.log(data)
  		if(err){
  			resData.message = err.toString()
  			res.isRegister = false
  		}else{
  			resData.message='注册成功'
  			resData.isRegister = true
  		}
  		res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
	  	res.write(JSON.stringify(resData));
	  	res.end()
	  	/*connection.end()*/
  	})
  })
  
});

module.exports = router;
