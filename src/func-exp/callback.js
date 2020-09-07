setTimeout(function () {
  console.log("I waited 1 second!");
}, 1000);

setTimeout(function timeoutHandler() {
  console.log("I waited 1 second too!");
}, 1000);
