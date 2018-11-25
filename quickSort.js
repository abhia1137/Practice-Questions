// function partition(unsorted) {


// }




// partition([6, 9, 5, 0, 8, 2, 4, 7])


// function pow(x, n) {
//     if (n == 1) {
//     //   console.log(x)
//         return x
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log(( pow(2, 3) )); // 8

function factorial(x) {
    if(x==1){
        console.log(x)
    }else{
        
        anotherFunction(x)
        
    }
    
  }
  
  function anotherFunction(x){
    x--
    factorial(x)
  }
  factorial(6)