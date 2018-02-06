const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Amaury',
    //   age: 39
    // });
    reject('Somenthing Went Wrong');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');