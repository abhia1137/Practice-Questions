
var express=require('express');
var app = express();
var path=require('path');
var bodyParser= require('body-parser');
const sendmail = require('sendmail')();
var mongojs = require('mongojs');
var db = mongojs('btcConnect', ['btcConnect']);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
var jwt = require('jsonwebtoken');
var base64ToImage = require('base64-to-image');

app.use(bodyParser.json({limit: '50mb'}));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Autherization', true);
	next();
});

app.get('/getAllUsers', (req, res) => {
	db.userSignUp.find((err, result) => {
		if (!result) {
			res.send(err);
		} else {
			res.json(result)
		}
	})
})

var productName;
app.post('/buyProduct', (req, res) => {
	productName = req.body.ProductName
	subject: 'Hi You have bought' + req.body.ProductName,
		sendmail({
			from: 'abhiarora1138@gmail.com',
			to: ['abhiarora1137@gmail.com', 'abhiarora1138@gmail.com'],
			title: "Your order is Placed",
			html: ` ${{productName}} `

		}, function (err, reply) {
			console.log(err && err.stack);
			console.dir(reply);
		});
	res.send({
		'message': "You just Bought " + req.body.ProductName
	})
})

app.post('/signup', (req, res) => {
	db.userSignUp.findOne({ "email": req.body.email }, (err, docs) => {
		if (docs) {
			return res.send({
				message: "UserAlready Registered"
			});
		}
		else {
			db.userSignUp.insert(req.body, (err, docs) => {
				res.send({
					message: "User Registration Done"
				})

			})
		};
	})
})

app.get('/getAllProducts', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secretkey', (err, authData) => {
		db.allProducts.find((err, docs) => {
			res.json(docs);
		});
	});
});

app.post('/deleteProduct', (req, res) => {
	console.log(req.body.data)
	db.allProducts.remove({ 'product_id': req.body.data }, (err, docs) => {
		if (!docs) {
			res.json({
				rtt
			})
		} else {
			res.json({
				docs
			})
		}
	})
})

app.post('/postProduct', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secretkey', (err, authData) => {
		db.allProducts.insert([req.body], (err, docs) => {
			if (err) {
				res.json({
					message: err
				})
			} else {
				res.json(docs)
			}
		})
	})
})

app.post('/updateProduct', (req,res)=>{
	console.log(req.body.productID)
	if(req.body.productID == 'undefined'){
		res.json({
			message: "Please Enter Product Id to update product"
		})
	}
	else if(req.body.productID) {
		db.allProducts.update( {'product_id': req.body.productID}, {$set: {type: req.body.type, name: req.body.name, prise: req.body.prise, company: req.body.prise}}, (err, docs)=>{
			db.allProducts.findOne({'product_id': req.body.productID}, (err, docs)=>{
				console.log(docs)
				res.send([docs])
			})
		})
	}else{
			res.send('Server Error')
	}
})

app.post('/login', (req, res) => {
	db.userSignUp.findOne({ 'email': req.body.email, }, (err, result) => {
		var jemail = {
			userEmail: req.body.email
		}
		if (!result) {
			return res.send({
				message: "Email is not Registered"
			})
		}

		else if (!result.type) {
			jwt.sign({ jemail }, 'secretkey', (err, token) => {
				return res.json({
					result,
					token: token,
					message: 'User LoggedIn',
				})
			})
		}
		else if (result.type == 'admin' && result.password == req.body.password) {
			jwt.sign({ jemail }, 'secretkey', (err, token) => {
				return res.json({
					result,
					token: token,
					message: 'Admin Entered',
				})
			})
		}
	})
})

app.post('/uploadImage', (req, res) => {
	//  console.log(req.body.imageContent)
	
	db.uploadImage.insert({'test':req.body.imageContent}, (err, docs) => {
		
		
		// var optionObj = {'fileName': req.body.name, 'type': 'png'}
		// console.log(optionObj);
		//  var realImage = base64ToImage(docs.test, optionObj); 
		//  console.log(realImage);
		  res.json({
		 	'image': docs.test
		  });
		 console.log(docs.test);
	});
});

// app.get('/getImage', (req, res) => {
// 	db.uploadImage.find( req.body.imageContent,(err, docs) => {
// 		res.json({
// 			message: 'Data found',
// 			docs
// 		})
// 	})
// })

function verifyToken(req, res, next) {
	// get auth header
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ');
		const bearerToken = bearer[1];
		req.token = bearerToken
		next()
	} else {
		/// forbidden
		res.sendStatus(403);
	}
}

app.listen(80, () => console.log('Server is listning to port 80'));
