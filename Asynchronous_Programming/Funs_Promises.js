function data() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({user: "Ashish", age: 25});
            reject("Failed")
        }, 3000);
    });
};

data().then((res) => {
    console.log(res);
}).catch(() => {
    console.log("Error");
}).finally(() => {
    console.log("Finally Block");

});