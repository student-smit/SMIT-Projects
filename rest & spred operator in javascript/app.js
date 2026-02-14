// rest operator 

// function sum(a, b, c) {
//     return a + b + c ;
// }

// let result = sum(1, 2, 3)

// console.log(result);


// infuture hammry pas array mai  or number aay tw sum kesy karengy 


// function sum(a, b, c , ...numbers) {
// let apha =  a + b + c ;
// let array = numbers.reduce((accumulated , current) => {
//    return accumulated + current ;

// })
//   return apha + array
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ))




// with rest operator 


// function sum(a ,  ...numbers) {
//  console.log(a , numbers);
    
// }

// 1

// sum(1 , 2 , 3, 4, 5 , 6 , 7, 8)

// 2

// let arr = [ 1 , 2, 3, 4, 5];
// let arr1  = [12 , 34 , 56 ]

// sum(1 , arr , arr1 )



// ============================ reduce ===================================== sum array numbers


// let array =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

// let sumNumbers = array.reduce((accumulated , current) =>{
//      return  accumulated + current
// })

// console.log(sumNumbers);



// ======================= array destructuring with rest operator ================================== 

// let array = [ 1, 2, 3, 4 ,5];

// let [a, b,  ...rest] = array

// console.log(a);
// console.log(a);
// console.log(rest);

// ================================ object destructuring with rest  ===========================


// let obj = {
//     name: 'musayyab' ,
//     age : 20 ,
//     city : 'karachi' ,
// }

// let {name , ...rest} = obj

// console.log(name);
// console.log(rest);


// ============================== spread array =================================== 


// let arr = [ 1, 2, 3, 4];
// let arr1 = [...arr];

// console.log(arr1);

// ============================== array merge ======================================

// let a = [ 1 , 2];
// let b = [3 , 4]

// let result = [...a , ...b];

// console.log(result);

