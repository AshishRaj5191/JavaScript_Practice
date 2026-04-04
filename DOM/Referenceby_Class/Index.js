// let items = document.getElementsByClassName('li-itm');


// console.log(items[0].innerText);
// for(let i=0; i<items.length; i++) {
//     console.log(items[i].innerText);
// }



//Best Practice Convert to Array first before iterate

let items = Array.from(document.getElementsByClassName('li-itm'));


// for(let i=0; i<items.length; i++) {
//     console.log(items[i].innerText);
// }
items.forEach(element => {
    console.log(element.innerText);
});

// This ensure modern and optimized looping.