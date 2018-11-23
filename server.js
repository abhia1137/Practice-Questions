// async function crypto() {
//     return '1000'
// }

// crypto().then((BTC) => {
//     console.log(BTC)
// })


// class crypto {
//     async getCoin() {
//         return await Promise.resolve(1000)
//     }
// }

// new crypto()
//     .getCoin().then((BTC) => {

//     })

// const fetch = require('node-fetch');

// async function Crypto() {

//    try {
//      let response = await fetch('http://gibberissssh.com');
//    } catch(err) {
//      console.log(err);
//    }
//  }

//  Crypto();




// function doubleAfter2s(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x * 2)
//         }, 2000)
//     })
// }



// async function Addasync(x) {
//     console.log(typeof doubleAfter2s)
//     let a = await promise(10) // 20
//     let b = await promise(20) // 40
//     let c = await promise(30) // 60
//     let d = await promise(40) // 80
//     return a + b + c + d + x;
// }

// Addasync(100).then((sum) => {
//     console.log(sum)
// }).catch((error) => {

// })
// var express = require('express')
// var app = express()
// var request = require("request");

// async function FakeJson() {
//     return new Promise((resolve, reject) => {
//         app.get('https://jsonplaceholder.typicode.com/todos/1', (err, docs) => {
//                 if (err) {
//                     throw err
//                 } else {
//                     resolve(JSON.parse(docs))

//                     console.log(docs)
//                 }
//         })
//     })
// }


// FakeJson().then(data => {
//     console.log(data)
// }).catch(data => {

// })
// function main() {
//     let myFakeNewJSON = FakeJson()
//     myFakeNewJSON.then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// async function checkType() {
//     return new Promise((resolve, reject) => {
//         if (1 == 1) {
//             resolve('This is my firest promsise')
//         } else {
//             reject('ok not working');
//         }
//     })
//     let a = await checkType()


// }


// checkType().then(data => {
//     console.log('1', data, typeof data)
// }).catch(newFile => {
//     console.log('2', newFile)
// })

// console.log('Program Start');

// var async = require('async');
// async.waterfall([
//     function (callback) {
//         console.log('First Step --> ');
//         callback(null, '1', '2');
//     },
//     function (arg1, arg2, callback) {
//         console.log('Second Step --> ' + arg1 + ' ' + arg2);
//         callback(null, '3');
//     },
//     function (arg1, callback) {
//         console.log('Third Step --> ' + arg1);
//         callback(null, 'final result');
//     }
// ], function (err, result) {
//     console.log('Main Callback --> ' + result);
// });

// console.log('Program End');




// var abhi  = ' Abhi'.padStart(10, 'Arora')
//     console.log(abhi)

var promise1 = new Promise(resolve => {
    resolve('Promise1')
})

var promise2 = new Promise(resolve => {
    resolve('Promise1')
})

async function promise3(){
    var promise3 = new Promise((resolve, reject) => {
        reject('Rejected')
        
    })
}



Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log(data)
}).catch(data => {
    console.log(data, '1')
})





