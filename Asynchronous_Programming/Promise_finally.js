function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if(success) {
                resolve("Task completed successfully");
            }
            else {
                reject("Task failed");
            }
        });
    });
}

asyncTask().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise has successfully ran");
});