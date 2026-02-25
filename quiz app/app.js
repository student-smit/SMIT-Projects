import { htmlData , cssData , jsData} from "./data.js"





let htmlbtn = document.getElementById('htmlbtn')
let cssbtn = document.getElementById('cssbtn')
let jsbtn = document.getElementById('jsbtn')

let quest = document.getElementById('quest');
let labelA = document.getElementById('labelA');
let labelB = document.getElementById('labelB');
let labelC = document.getElementById('labelC')
let labelD = document.getElementById('labelD')
let nextbtn = document.getElementById('nextBtn')
let inp = document.getElementsByTagName('input')

let selectedOpt = '';
let quizArray;
let index = 0;
let score = 0;
let marks = 0 ;

htmlbtn?.addEventListener('click' ,function () {
    localStorage.setItem('selectedQuiz' , 'html');
    location.pathname = './quiz.html'
})


cssbtn?.addEventListener('click' ,function () {
    localStorage.setItem('selectedQuiz' , 'css')
    location.pathname = './quiz.html'
})

jsbtn?.addEventListener('click' ,function () {
    localStorage.setItem('selectedQuiz' , 'js')
    location.pathname = './quiz.html'
})

let startQuiz = () => {
     let  selectedQuiz = localStorage.getItem('selectedQuiz')
    //  console.log(selectedQuiz);
    if(selectedQuiz === 'html'){
      quizArray = htmlData;
    }
    else if(selectedQuiz === 'css'){
        quizArray = cssData ;
    }
     else if(selectedQuiz === 'js'){
        quizArray = jsData ;
    }

    let showQuestion = ()=>{
       quest.innerHTML = quizArray[index].question;
       labelA.textContent = quizArray[index].A;
       labelB.textContent = quizArray[index].B;
       labelC.textContent = quizArray[index].C;
       labelD.textContent = quizArray[index].D;

       for( let i = 0; i < inp.length ; i++){
         inp[i].checked = false;
       }
    }


    showQuestion()

    nextbtn.addEventListener('click' , () =>{
     for( let i = 0 ; i < inp.length ; i++){
        if(inp[i].type === 'radio' && inp[i].name === 'option' && inp[i].checked){
            // console.log('inp[i]' , inp[i])
            
               selectedOpt =  inp[i].value 
        }
    }

     
    
    if(selectedOpt === quizArray[index].answer){
        score++
        marks += 10
    }


    
    index++
    
    if(selectedOpt == ''){
        alert('please select an option');
    }
    
      
        if(index < quizArray.length ){
          showQuestion()
        }
        
        
       else {
    const quizContainer = quest.parentElement; 

    quizContainer.innerHTML = `
        <div class="text-center py-6">
            <h1 class="text-4xl font-extrabold text-indigo-900 mb-4 animate-bounce">
                🎉 Quiz Completed!
            </h1>
            
            <div class="bg-indigo-50 rounded-2xl p-6 mb-6 border border-indigo-200 shadow-inner">
                <p class="text-xl text-indigo-700 mb-2 font-medium">Your Final Score</p>
                <h2 class="text-5xl font-black text-indigo-900 mb-4">${score} / ${quizArray.length}</h2>
                <p class="text-lg text-indigo-800 italic">Total Marks: <span class="font-bold text-pink-600 text-2xl">${marks}</span></p>
            </div>

            <button onclick="window.location.reload()" 
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 uppercase tracking-wider">
                🔄 Restart Quiz
            </button>
        </div>
    `;
}


    })

     
}

if(location.pathname.endsWith('quiz.html')){
    startQuiz()
}