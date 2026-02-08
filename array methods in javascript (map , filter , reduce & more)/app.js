// array method 

// includes 
// map    === ek tarah ka loop h ===
// find    === ek tarah ka loop h ===
// filter   === ek tarah ka loop h ===
// reduce    === ek tarah ka loop h ===
// foreach  === ek tarah ka loop h ===


// =============================== includes =========================
// jo include m likh rahy hen agr wo array me hai tw ye true  de ga warna false   


// let arr = ['yello', 'red', 'pink']; 

// let check = arr.includes("white")

// console.log(check);


// let checker = (str) =>{
    
//     let  color = arr.includes(str);

//     if(color === true ){
//         console.log('your answer is right ');

//     }else{
//           console.log('your answer is wrong');
          
//     }

// }

// checker(prompt("write a color name"))

    





// ========================= map =============================== use hota h destructure ke liye 


//  ===================================== 1 ================================



// let newData = [
//     {
    
//       name : 'hamid',
//        age : 20, 
//        id :  1

// },
// {
//      name : 'rehan',
//      age : 17, 
//      id :  2
     
//     }
    
// ]   

// let checker = newData.map( (data , index ) => {
//     // console.log(data.name)
//     // console.log(index);
    
// })





    // ============================= 2 ================================== 

    
// let checker = newData.map( (data , index ) => {
    
//     if(data.age >18 ){
//      return console.log('you are eligible ');



// }
// else{
//         return console.log('you are not able');
    
// }
    
// })



// ======================================== 3 ============================


// })  
  

 // ================  arrow function  without currlybracec bhi work krta h ================= 



 //  ==================================== find  ===============================  apki condition ke
// mutabik usko Element mil gaya wo apni itteration break kr dega aagy nh chalayga  jaise ke 1 one 
// hi show hoga two time nh usko ek bar mil gaya usny apni itteration break krdi 
 



//  let arr = [1, 4, 3, 1];

//  let checker = arr.find((data) => data === 1  )

//  console.log(checker);
 


//  =========================== filter ============================



// let newData = [
//     {
    
//       name : 'hamid',
//        age : 20, 
//        id :  1

// },
// {
//      name : 'rehan',
//        age : 17, 
//        id :  2

// },
// {
//      name : 'bilal',
//        age : 32, 
//        id :  2

// }
   
// ] ;

// let checker = newData.filter((data) => data.age > 18 )

// console.log(checker)






//   ========================== reduce ========================================== 

// let arr = [ 100000 , 200000 ,300000 ,400000 ,500000];

// let checker = arr.reduce(( acc , current) => {
//     return acc + current
// })

// console.log(checker) 




// ================================= forEach =================================
//   kuch bhi return nh karta only itteration karta h 
// just like boolen behave krta h 


// let arr = [1, 2, 3, 4, 5];

// let checker = arr.forEach((d) => {
//     console.log(d>3)
// })



let newData = [
    {
    
      name : 'hamid',
       age : 20, 
       id :  1

},
{
     name : 'rehan',
       age : 17, 
       id :  2

}
   
] ;

newData.forEach((d) => {
    console.log(d.name);
})

 

