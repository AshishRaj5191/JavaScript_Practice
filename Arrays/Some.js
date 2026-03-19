let marks = [44, 57, 78, 96, 32];

// want to check if any student is fail criteria (mark > 33)

let check = marks.some((ele, ind) =>{
    if(ele < 33){
        return true;
    }
    else false;
});

console.log(check);
