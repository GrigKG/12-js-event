const root = document.getElementById('root');
root.append(document.createTextNode("Add new Item"));
const input = document.createElement('input');
const buttonAdd = document.createElement('button');
const ol = document.createElement('ol');
root.append(input, buttonAdd,ol);
buttonAdd.append(document.createTextNode('new Item'));
input.setAttribute('type', 'text');
buttonAdd.addEventListener('click', addItem);

function addItem(event) {
    const text = this.previousElementSibling.value;
    const li = document.createElement('li');
    const content = document.createTextNode(text);
    const buttonX = document.createElement('button');
    buttonX.append(document.createTextNode('X'));
    buttonX.addEventListener('click', delItem);
    li.append(content,buttonX);
    ol.append(li);
    event.target.previousElementSibling.value = '';
}
function delItem(event){
    event.target.parentElement.remove();
}