console.log("Start");

const id = setTimeout(() => {
    console.log("This comes from setTimeout after 3 second");
}, 3000);

clearTimeout(id);