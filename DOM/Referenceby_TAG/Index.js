let hrd3 = Array.from(document.getElementsByTagName('h3'));
let spn = document.getElementsByTagName('span')

hrd3.forEach(element=> {
    console.log(`This is coming from h3 ${element.innerText}`);
});

// for(let i=0; i<hrd3.length; i++) {
//     console.log(`This is coming from h3 ${hrd3[i].innerText}`);
// }


// console.log(hrd3);
// console.log(spn);
