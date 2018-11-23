async function demo() {
    var result
    var promise
    
    
     promise = new Promise((resolve, reject) => {
        if (1 == 1) {
            reject('okokokoko')
        } else {
            resolve('This is resolve')
        }
    })
    console.log(promise)
    
    result = await promise
    
}

demo().catch((error)=>{console.log(error)})


