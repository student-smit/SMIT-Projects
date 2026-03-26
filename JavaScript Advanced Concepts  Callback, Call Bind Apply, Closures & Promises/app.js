// =========== callback function kiya hota hai ===========================


// let callTest = (name) => {
//     console.log(` Hello ${name}`);
    
// }

// let testOther = (callBack) =>{
//     let UserName = "saylani";
//     callBack(UserName)
// }

// testOther(callTest)



//  ===================  call , apply , bind kiya hen ====================  


// example 1 


// let person =  {
//     name : " musayyab",
//     greet : function name() {
//         console.log("hello" + this.name);
         
//     }
// }

// person.greet()


// example 2 


// let person1 = {
//     name : "musayyab"
// }

// let person2 = {
//     name : "ahmed"
// }   

// function greet (){
//     console.log("Hello " + this.name);
    
// }

// greet()
// greet.call(person1)
// greet(person1) 


// ====================== apply method ==================================

// let person = {
//     name : "musayyab"
// }

// function introduce(age , city) {
//      console.log(this.name + " is " + age + " from" + city);
     
// }

// introduce.apply(person , [21 , " karachi"])

// introduce ke under 2 values aati hen 





// ========================== closure ============================
 


// ek child apny parent element ke undr variabels ko yad rakhy usko
//  kehte hen closure   

// let num1 = 10;
// let test = ()=>{
//     let name = "musayyab";
//     console.log("num1" , num1)

//     let childTest1 = ()=>{
//       console.log("name " , name);
      
//     }
//     childTest1()
// }

// test()

// Promise ek javascript ka built in function hai 

// =========================================== example 1 ============================== 


// new Promise ((resolve , reject) => {
//     let user = true ;
//     if(user){
//       resolve('kam ho gaya')
//     }
//      else{
//       reject('kam nahi hoa')
//      }
// })
// .then((data) =>{
//     console.log(data);
    
// })
// .catch((alert )=>{
//     console.log('error' , alert);
    
// })

// ==================================== example  2 ==============================================




// let promiseOne = new Promise((resolve) => {
//      setTimeout(() => {
//         console.log('kam ho gaya ');
//         resolve()
//      },1000)
// });

// promiseOne.then((data) => data)
// .catch((bhand) => console.log(bhand))
// .finally(()=> console.log('final chala'))


// try{

//     fetch('https://jsonplaceholder.typicode.com/photos  ')
//     .then((response) => response.json().then((data) => console.log(data))
// ).catch((err)=> console.log(err))
// }catch(error){
//     console.log('error' , error)
    
// }