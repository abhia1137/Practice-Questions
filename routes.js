
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const sendmail = require('sendmail')();
var mongojs = require('mongojs');
var db = mongojs('erpLeave', ['erpLeave']);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
var jwt = require('jsonwebtoken');s
var base64ToImage = require('base64-to-image');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ERP");
const userModel = require('./userModel.js');
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Autherization', true);
    next();
});

var foundData
var indecOf
var newData1 = []
var foundData1
var notfoundData = []
var notfoundData1

// app.post('/addUser', async (req, res) => {
//     var find = await findasd(req.body);
//     var result = await insert(find);
//     await console.log(result)
// })

// async function findasd(req) {
//     for (var i = 0; i < req.length; i++) {
//         await db.allUsers.findOne({ "email": req[i].email }, (err, docs) => {
//             if (docs) {
//                 console.log('Data found')
//                 foundData = obj

//             } else {
//                 console.log("Not found")
//                 newData = req.pop(foundData)
//                 notfoundData.push(newData)

//             }
//         })
//     }
//     console.log(notfoundData)
//     return notfoundData
// }
// function insert(find) {
//     // console.log(" found data:"+find)
//     db.allUsers.insert(find, (err, docs) => {
//         console.log(docs);
//     })
// }

app.post('/addUser', (req, res) => {
    for (var i = 0; i < 1; i++) {
        db.allUsers.findOne({ 'email': req.body[i].email }, (err, docs) => {
            if (docs) {
                res.status(200).json({
                    message: 'User is already Registered',
                    docs: docs
                })
            } else if (err) {
                res.status(400).json({
                    error: err,
                    docs: docs
                })
            }
            else {
                // console.log(req.body)
                db.allUsers.insert(req.body, (err, docs) => {
                    res.status(200).json({ message: 'User Registeration Done' });
                })
            }
        })
    }
})
arr = []
app.post('/login', (req, res) => {
    // console.log(req.body)
    db.allUsers.findOne({ "email": req.body.email }, (err, docs) => {
        // console.log(docs)

        if (docs.email == req.body.email && docs.password == req.body.password && docs.type) {
            res.status(200).send('admin')
        } else if (docs.email == req.body.email && docs.password == req.body.password) {
            res.status(200).send('user')
        }
    })
})

app.get('/allUsers', (req, res) => {
    db.allUsers.find(req.body, (err, docs) => {
        if (err) {
            throw err
        } else {
            res.status(200).send(docs);
            // console.log(docs)
        }
    })
})

// app.post('/login', (req, res) => {
// 	db.allUsers.findOne({ 'email': req.body.email, }, (err, result) => {
// 		if (!result) {
// 			 res.send({
// 				message: "Email is not Registered"
// 			})
// 		}

// 		else if (!result.type && req.body.password == docs.password) {	
// 				 res.status(200).json({
// 					message: 'User',
// 				})

// 		}
// 		else if (result.type == 'admin' && result.password == req.body.password) {
// 				     res.json({
// 					message: 'Admin',
// 				})
// 		}
// 	})  
// })


app.post('/resetPassword', async (req, res) => {
    console.log('Now ')
    console.log(req.body)
     db.allUsers.findOne({ "email": req.body.email }, (err, docs) => {
        if (docs) {
            db.allUsers.update({ "email": req.body.email }, { $set: { "password": req.body.password } }, (err, docs) => {
                res.status(200).json({
                    message: "Reset Password Complete"
                })
            })
        } else {
            res.status(200).json({ message: 'Not valid Email' })
        }
    })
})

app.listen(2999, console.log("server is running on 2999"))