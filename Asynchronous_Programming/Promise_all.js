let p1 = Promise.resolve("P1 has been resolved");
let p2 = Promise.resolve("P2 has been resolved");
let p3 = Promise.resolve("P3 has been resolved");
let p4 = Promise.reject("P4 has been rejected");

Promise.all([p1, p2, p3, p4]).then((res) => {
    console.log("Result: ", res);
}).catch((err) => {
    console.log("Error: ", err);
});

