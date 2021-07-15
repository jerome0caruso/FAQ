const inputBox = document.querySelector('.inputBox');
const inputBtn = document.querySelector('.listBtn');
const listContainer = document.querySelector('.list');
const list = document.querySelector('.unorderedList');

inputBtn.addEventListener("click", () => {
    if(inputBox.value.length > 1) makeList()
    
});
window.addEventListener("keypress", (e) => {
 if(e.key === 'Enter' && inputBox.value.length > 1) {
     makeList();
 }
});

function makeList () {
    const totalItem = document.createElement('div');
    totalItem.classList.add('totalItem');
    const divItem = document.createElement('div');
    divItem.classList.add('divItem');
    const divDel = document.createElement('div');
    divDel.classList.add('divDel');

    const li = document.createElement('li');
    li.classList.add('listItems');
    li.textContent = inputBox.value.toUpperCase()
    li.addEventListener("click", () => li.classList.toggle('lineThru'))

    divItem.append(li);
    const button = document.createElement('button');
    button.innerText = 'X'
    button.classList.add('delBtn');
    divDel.append(button)
    totalItem.append(divItem, divDel);
    list.appendChild(totalItem);
    inputBox.value = '';
    button.addEventListener("click", () => {
        list.removeChild(totalItem);
    })
}