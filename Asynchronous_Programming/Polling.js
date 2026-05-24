var api =
  "https://api.cricapi.com/v1/currentMatches?apikey=a3c838b8-784c-4dea-b8e3-9b22f65c0cbf&offset=0";

setInterval(() => {
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error caught", err);
    });
}, 3000);
