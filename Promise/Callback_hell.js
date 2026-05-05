setTimeout(() => {
  console.log("1st callback");
  setTimeout(() => {
    console.log("2nd callback");
    setTimeout(() => {
      console.log("3rd callback");
    }, 1000);
  }, 1000);
}, 1000);
