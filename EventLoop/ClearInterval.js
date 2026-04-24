console.log("Start");

let count = 1;

let id = setInterval(() => {
    if(count%2 != 0) {
        console.log(count);
    }
    if(count == 15) {
        clearInterval(id);
    }
    count++;
}, 1000);
