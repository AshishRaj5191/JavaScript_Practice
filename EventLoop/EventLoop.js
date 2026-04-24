console.log("Start");

setTimeout(() => {
    console.log("SetTimeout Callback");
});

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");
console.log("End");
