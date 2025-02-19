// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
function delay(ms) {
  // your code
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));

// create a promise and it should be only resplved when a button is clicked
let resolveButton = document.getElementById("resolved");
let rejectButton = document.getElementById("reject");

const promise = new Promise((resolve, reject) => {
  resolveButton.addEventListener("click", () => {
    resolve("done");
  });
  rejectButton.addEventListener("click", () => {
    reject("some reasosn");
  });
});

// To check the promise state, you can use .then()
promise.then((result) => console.log("Promise resolved with:", result));
promise.catch((error) => console.log("promise not resolved:", error));

// create a promise without using new promise
