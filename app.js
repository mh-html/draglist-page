let mainBtn = document.getElementById('btn')
let overlay = document.querySelector('.overlay')
let listInput = document.querySelector('.modal')
let modalClose = document.querySelector('.modal-close')

let addModalClick = document.getElementById('add-modal')
let input = document.getElementById('inp')

let listOfTodo = document.querySelector('.newItem')

let Coll = document.querySelectorAll('.colTow')

let todo = []
let inputValue
 function checkValue(figur){
     let res = todo.some(function(item){
         return item === figur
     })
     return res
 }

function creatTodoList(){
    
    if(!checkValue(input.value)){
        let newPara = document.createElement('p')
        newPara.classList.add('item')
        newPara.setAttribute('draggable', 'true')
        newPara.innerHTML = input.value
        newPara.setAttribute('id', input.value)
        todo.push(input.value)

        newPara.addEventListener('dragstart', function(event){
            event.dataTransfer.setData('dragId', event.target.id)
        })

        let newSpna = document.createElement('span')
        newSpna.classList.add('close')
        newSpna.innerHTML= '×'
        newSpna.addEventListener('click', function(event){
            event.target.parentElement.remove()
            removeArray(event.target.id)
        })

        input.value = ''
        newPara.append(newSpna)
        listOfTodo.append(newPara)
    }else{
        alert("Todo Exist!")
    }
    //<p class="item">Go park <span class="close">×</span></p>
}

function removeArray(inp){
    console.log(inp);
}
// Show modal window
mainBtn.addEventListener('click', function(){
    listInput.style.top = '10%'
    overlay.style.display = 'block'
})

// Close modal window
modalClose.addEventListener('click', function(){
    listInput.style.top = '-30%'
    overlay.style.display = 'none'
})

// Creat a Todo item
addModalClick.addEventListener('click', creatTodoList)

// key controls
listInput.addEventListener('keydown', function(event){
    if(event.key === "Enter")
        creatTodoList()

    if(event.key === "Escape"){
            listInput.style.top = '-30%'
            overlay.style.display = 'none'
    }
})

// Drag over
Coll.forEach(function(part){
    part.addEventListener('dragover', function(event){
        event.preventDefault();
    })
})

Coll.forEach(function(part){
    part.addEventListener('drop', function(event){
        let newDrag = event.dataTransfer.getData('dragId')
        let newDragItem = document.getElementById(newDrag)
        part.append(newDragItem)
    })
})