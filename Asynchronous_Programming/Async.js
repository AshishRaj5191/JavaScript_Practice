// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await res.json();
//   console.log(data);
// }

// getData();

// Handling Error
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.log("Error", err);
  }
}

getData();
