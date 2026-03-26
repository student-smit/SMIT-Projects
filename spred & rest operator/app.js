// function sumAll(a , b , ...numbers) {
// let apha =  a + b ;
// let array =  numbers.reduce((accumulated , current) => {
//      return  accumulated + current ;
// })
//    return apha + array ;

// }

//  let result = sumAll(1, 2, 3, 4, 5, 6, 7,8)
//  console.log(result);




function findMax( ...number ){
    let max = number[0]  
   for(i = 0 ;i < number.length ; i++ ){
     if(number[i] > max){
    max = number[i]
    
}
}
return max;
}
 let final = findMax(1 , 3 , 20, 7 ,8 ,9 )
 console.log(final);
 
 



 
