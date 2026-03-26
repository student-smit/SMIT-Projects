// .then jab error aay jab chlta h or jab data ay ja bhi chlta h 
//  but .then sirf error par chalta he 
// or finally tw har situation m chaly ga 



// let response = fetch('https://jsonplaceholder.typicode.com/todos')
//     response.then((data)=> data.json()).then((data)=> console.log(data))
//     .catch((err)=> console.log(err))
//     .finally(()=> console.log('dam he tw mjhy rok kar dikha '))



// ============================== asyncroness ========================================

let baseUrl = 'https://jsonplaceholder.typicode.com'
let  endPoint = {
    post : '/posts',
    photos : '/photos',
    comments : '/comments'
}

let test =  async()=>{

let response =   await  fetch(`${baseUrl}${endPoint.photos}`)

let data =  await response.json()
 console.log(data);
 
  
}

test()

