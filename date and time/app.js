
//================== 1st jan 1970 s miliseconde count hota h ==============

// let date = new Date('12 , june 1995');

// document.write(date)

// console.log(date)




       let dob = new Date(prompt('write age in this (12, august 1999) format '))

       let dobTime  = dob.getTime()

        console.log('dobtime', dobTime)

        let date = new Date()
        let dTime = date.getTime()

        console.log('dTime', dTime)
f
        let calAge = dTime - dobTime;

        let final = Math.floor(calAge / (1000 * 60 * 60  * 24 *365));

        console.log('final', final)



        let year = new Date()

        let fullYear = year.getFullYear()

        console.log(fullYear)


