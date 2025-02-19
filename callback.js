// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }
// // console.log("fetching data1...");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //   console.log(res);
// //   console.log("fetching data2...");
// //   let p2 = asyncFunc2();
// //   p2.then((res) => {
// //     console.log(res);
// //   });
// // });

// // shorthand
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {});
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

// promise chain
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// shorthand
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });
// // we want to get print data 1 then 2s delay data2 than 2 sec delay

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// // can pass getdata as caallback but callbacks are passed without values so to pass callback with a value used another unction and called this function again with diffrernt value
// // it will get imediately executed but we dont want that
// // getData(1,getData(2))

// // callback hell
// getData(1, () => {
//   console.log("getting data2....");
//   getData(2, () => {
//     console.log("getting data3....");
//     getData(3);
//   });
// });
