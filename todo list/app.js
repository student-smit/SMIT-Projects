

let ulEl = document.getElementById("ul")



function todo() {
    
    let input = document.getElementById("inp");

// creat li 

    let  li = document.createElement('li')

    li.innerHTML = input.value ;

    ulEl.appendChild(li)
let dltbtn = document.createElement('button')

dltbtn.innerHTML = 'delete' ;

li.appendChild(dltbtn);
 

dltbtn.addEventListener('click' ,function (){
    dlt(this) ; 


})

 // create edit button 

    let editbtn = document.createElement('button')

    editbtn.innerHTML = 'edit'
    li.appendChild(editbtn);

    editbtn.addEventListener('click', function(){
        edit(this)
    })

    
}



function dlt (e){
e.parentNode.remove()
}

function edit (e){
oldValue = e.parentNode.firstChild.nodeValue
let newValue =prompt("new Value", oldValue);
e.parentNode.firstChild.nodeValue = newValue;p
}



