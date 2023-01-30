import Item from "./item";

const title = document.getElementById("title");
// const description = document.getElementById();
// const dueDate = document.getElementById();
// const priority = document.getElementById();
const form = document.querySelector("#addItem");
const list = document.getElementById("list")



function openTheForm(){
    console.log(5);
    document.getElementById("addItem").style.display = "block";
}

function closeTheForm(){
    document.getElementById("addItem").style.display = "none";
}

function getData(e){ //creates Book Object from form data

    const newItem = new Item(title.value, 0,0,0)
    
  
    e.preventDefault();
    form.reset();
    closeTheForm();
    updateList(newItem)

}

function updateList(itemObject){ //takes item object
    // const newItem = document.createElement("div");
    const title = document.createElement("div");
    title.classList.add("item")

    // newItem.classList.add("item")
    title.textContent = `${itemObject.title}`;
    list.appendChild(title);

}

function addItem(){
    const add = document.getElementById("add");
    add.addEventListener('click', openTheForm)
    form.addEventListener('submit', getData)



}

export default addItem;