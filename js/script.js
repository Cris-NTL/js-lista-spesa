// array with items list
const itemsList = ['Pane','Pasta','Acqua','Carote','Lattuga','Sedano','Funghi','Vino'];

// new ul element as a container
const itemsContainer = document.createElement('ul');

// variables and loop
let items = '';
let i = 0;

while (i < itemsList.length) {
    items += `<li>${itemsList[i]}</li>`;
    i++;
}

// add li on ul
itemsContainer.innerHTML = items;

// print on html
document.body.appendChild(itemsContainer);
