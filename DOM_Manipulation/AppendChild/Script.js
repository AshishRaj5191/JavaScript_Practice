let parent_list = document.getElementById("ul_list");

let list1 = document.createElement("li");
list1.innerText = "This is list 1";
let list2 = document.createElement("li");
list2.innerText = "This is list 2";

parent_list.appendChild(list1);
parent_list.appendChild(list2);

