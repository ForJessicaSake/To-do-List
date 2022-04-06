var form = document.getElementById("form");
var itemList = document.getElementById("itemList");
var filter = document.getElementById('filter');

//form submit event; to add item
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);


//Add item function
function addItem(e){

    e.preventDefault();

    //get input value
    var newItem = document.getElementById("form-item").value;

    //create new li

    let li = document.createElement("li");

    //Add class
    li.className = "list-group-item";

    //Add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to button

    deleteBtn.className = "buttonbtn";


    //Append Textnode
    deleteBtn.appendChild(document.createTextNode('x'));

        //Append button to li

    li.appendChild(deleteBtn);

    //Append button to li

    itemList.appendChild(li);
}

//Remove item 

 function removeItem(e){
    if(e.target.classList.contains('buttonbtn')){
    if(confirm("Are You Sure?")){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}
