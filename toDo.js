const root = document.getElementById('root');
root.append(document.createTextNode("Add new Item"));
const input = document.createElement('input');
const buttonAdd = document.createElement('button');
root.append(input, buttonAdd);
buttonAdd.append(document.createTextNode('new Item'));
input.setAttribute('type', 'text');
buttonAdd.addEventListener('click', addItem);
let i = 0;

function addItem(event) {
    const text = this.previousElementSibling.value;
    const p = document.createElement('p');
    const content = document.createTextNode(++i+". " + text);
    const buttonX = document.createElement('button');
    buttonX.append(document.createTextNode('X'));
    buttonX.addEventListener('click', delItem);
    p.append(content,buttonX);
    event.target.parentElement.append(p);
    event.target.previousElementSibling.value = '';
}
function delItem(event){
    event.target.parentElement.remove();
    i--;

}