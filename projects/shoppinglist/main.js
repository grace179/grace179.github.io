const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    console.log(text);
   
    const item = createItem(text);
    items.appendChild(item);
    items.scrollIntoView({block:'center'});
   
    input.value = '';
    input.focus();

}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    })

    const itmeDivider = document.createElement('div');
    itmeDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itmeDivider)

    return itemRow;
}
addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress',()=>{
    if(event.key === 'Enter'){
        onAdd();
    }
})