let input = document.querySelector('.input');
let addBtn = document.querySelector('.add');
let container = document.querySelector('.container')
let containerCheck = document.querySelector('.checked')


addBtn.addEventListener('click', () => {
  

    let todo = document.createElement('input');
    let check = document.createElement('input');
    check.setAttribute("type", 'checkbox')

    check.style.cssText = "margin-right:10px"

    check.addEventListener('click', checkClick);

    let editBtn = document.createElement('button');
    //editBtn.style.cssText = "padding: 5px 12px; background-color: green; color: white;"

    
    let divItem = document.createElement('div');
    divItem.classList.add('item');
    editBtn.classList.add('edit');
    editBtn.textContent = "Edit"
    let delBtn = document.createElement('button');
    delBtn.textContent = "Delete"
    delBtn.classList.add('remove');
    console.log(input.value)
    todo.value = input.value;
    todo.classList.add('item_input');
    todo.setAttribute('disabled', true)
    divItem.append(check,todo, editBtn, delBtn)
    container.append(divItem);
    input.value = "";
    editBtn.addEventListener('click', editTodo);
    delBtn.addEventListener('click', delTodo);
})

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