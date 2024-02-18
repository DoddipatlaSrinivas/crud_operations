let promise = new Promise((resolve, reject) => {
  let a = 20;
  if (a > 10) {
    resolve("a > b");
  } else {
    reject("a < b");
  }
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
