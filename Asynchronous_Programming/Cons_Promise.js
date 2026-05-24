let success = true;

let promise = new Promise(function (resolve, reject) {
    if(success) {
        resolve("Promise is Fulfilled");
    }
    else {
        reject("Promise Unsuccessful");
    }
});

// Consuming the Promise
promise.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
});