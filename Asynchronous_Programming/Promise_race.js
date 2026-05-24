let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolution coming from p1");
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolution coming from p2");
  }, 1500);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolution coming from p3");
  }, 500);
});

Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
});
