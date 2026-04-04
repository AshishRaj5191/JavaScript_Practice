let introduction = document.getElementsByName('intro');

// console.log(introduction[3].value);

//for(let i=0; i<introduction.length; i++) {
//    console.log(introduction[i].value);
//}

introduction.forEach(ele =>{
    console.log(ele.value); 
});