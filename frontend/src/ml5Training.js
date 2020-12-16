/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// const ml5 = require("ml5");
// import * as ml5 from "ml5";
const sketch = (studentGrades, callback) => {
  let nn, data, modelInfo, res;
  const options = {
    task: "classification",
    inputs: 1,
    outputs: 1,
    debug: true,
  };
  modelInfo = {
    model: "model/model.json",
    metadata: "model/model_meta.json",
    weights: "model/model.weights.bin",
  };
  nn = ml5.neuralNetwork(options);
  nn.load(modelInfo, modelLoaded);
  // data = loadJSON("./p5Data.json", () => (data = data.data));
  function modelLoaded() {
    console.log("model loaded");
    nn.classify(studentGrades.slice(-5), callback);
  }
  // function setup() {
  //   //   let tags = data.shift();
  //   data.forEach((item) => {
  //     const ok = item.ok;
  //     const dep = item.depressed;
  //     // console.log(ok, dep);
  //     nn.addData(ok.slice(-5), ["ok"]);
  //     nn.addData(dep.slice(-5), ["depressed"]);
  //   });
  //   nn.normalizeData();
  //   const trainingOptions = {
  //     epochs: 100,
  //     batchSize: 12,
  //   };
  //   nn.train(trainingOptions, finishedTraining);
  //   function finishedTraining() {
  //     console.log("finished training");
  //     // nn.save();
  //     classify();
  //   }
  //   function classify() {
  //     let grades = [99, 43, 89, 99, 76, 76].slice(-5);
  //     // const input = {
  //     //   grades: grades,
  //     // };
  //     nn.classify(grades, handleResults);
  //   }
  // }
  // function handleResults(error, result) {
  //   if (error) {
  //     console.error(error);
  //     // return;
  //   }
  //   console.log(result);
  //   res = result;
  //   // return result
  // }
  // return res;
};
export default sketch;

// //    GENERATING THE DATA

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// function generate() {
//   for (var i = 0; i < 100; i++) {
//     let length = getRandomInt(5, 20);
//     let dataSet = {};
//     dataSet.ok = [];
//     dataSet.depressed = [];
//     for (var e = 0; e < length; e++) {
//       dataSet.ok.push(getRandomInt(75, 100));
//       dataSet.depressed.push(getRandomInt(75, 100));
//     }
//     dataSet.depressed.pop();
//     dataSet.depressed.pop();
//     for (var j = 0; j < getRandomInt(2, 3); j++) {
//       dataSet.depressed.push(getRandomInt(40, 75));
//     }
//     data.push(dataSet);
//   }
// }
// function setup() {
//   generate();
//   saveJSON({ data: data }, "p5Data.json");
// }
