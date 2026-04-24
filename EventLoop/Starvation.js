console.log("Hey");

function promise() {
    Promise.resolve().then(promise);
};

promise(); // Starvation

setTimeout(() => {
    console.log("This will never Executed");
}, 100);
