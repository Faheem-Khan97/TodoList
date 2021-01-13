let input = document.querySelector('.input');
let addBtn = document.querySelector('.add');
let container = document.querySelector('.container')
let containerCheck = document.querySelector('.checked')


addBtn.addEventListener('click', () => {

    if(input.value.trim().length >0){

   
    //Todo elements creation. 1.checkbox 2. input, 3.edit button 4.delete button (one By one)

    //1. checkbox creation
    let check = document.createElement('input');
    check.setAttribute("type", 'checkbox')
    check.style.cssText = "margin-right:10px"
    check.addEventListener('click', checkClick);


    // 2. Disabled Input
    let todo = document.createElement('input');
    todo.value = input.value;
    todo.classList.add('item_input');
    todo.setAttribute('disabled', true)


    // 3. Edit button 
    let editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = "Edit";


    // 4. del button 
    let delBtn = document.createElement('button');
    delBtn.textContent = "Delete"
    delBtn.classList.add('remove');


    //creating div tag as a wrapper to all 4 elements
    let divItem = document.createElement('div');
    divItem.classList.add('item');

    //add elemets to div
    divItem.append(check,todo, editBtn, delBtn)

    //console.log(input.value)
    
    // Appending created div to to container of html
    container.append(divItem);

    //  Removing previous enter value from add input box
    input.value = "";


    // adding event listeners to the creted edit and del button.
    editBtn.addEventListener('click', editTodo);
    delBtn.addEventListener('click', delTodo);
    }
    input.focus();
});


function editTodo(){
    console.log("inside del todo")
    console.log(this)

    let parentDivItem = this.parentNode;
    let disInput = parentDivItem.childNodes[1];
    if(disInput.hasAttribute('disabled')){
        disInput.removeAttribute('disabled');
        disInput.focus();
        parentDivItem.childNodes[2].textContent = "Done"
        console.log(disInput);
    }
    else{

        disInput.setAttribute('disabled', true)
        parentDivItem.childNodes[2].textContent = "Edit"
    }
}

function delTodo(){
    console.log("inside del todo")
    console.log(this)

    let parentDivItem = this.parentNode;
    //let disInput = parentDivItem.childNodes[0];

    parentDivItem.remove()

    //console.log(disInput);
}

function checkClick(){

    console.log(this);
    let parentDivItem = this.parentNode;
    if(this.checked){

       
        console.log(parentDivItem)
        containerCheck.append(parentDivItem);
        //parentDivItem.remove()
        
    }
    else{

        container.append(parentDivItem)


    }
}