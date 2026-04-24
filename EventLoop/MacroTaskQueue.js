setTimeout(() => {
    console.log("SetTimeout 1");
}, 100);

setTimeout(() => {
    console.log("SetTimeout 2");
}, 100);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Hey form Call stack");
