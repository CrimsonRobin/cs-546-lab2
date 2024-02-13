/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let objectStats = (arrObjects) => {
  if(Array.isArray(arrObjects) == false) {
    throw new Error("given parameter is not an array.");
  }
  for(const obj of arrObjects) {
    if(typeof obj !== "object") {
      throw new Error("elements in array are not objects.");
    }
    if(obj == null) {
      throw new Error("elements in array are null.");
    }
    const valueArray = Object.values(obj);

    if(valueArray.length < 1) {
      throw new Error("objects in array don't have at least one key value pair.");
    }

    for(let key in obj) {
      if(typeof obj[key] !== "number" || Number.isNaN(obj[key]) == true || Number.isFinite(obj[key]) == false) {
        throw new Error("values in each object are not numbers.");
      }
      if(Number.isInteger(obj[key]) == false) {
        obj[key] = Number.parseFloat(obj[key].toFixed(3));
      }
    }
  }
  const totalArray = [];
  for(let obj of arrObjects) {
    const testArray = Object.values(obj);
    for(let x of testArray) {
      totalArray.push(x);
    }
  }
  totalArray.sort(function(a, b) { return a - b; });
  const returnObject = {mean:0, median:0, mode:0, range:0, minimum:0, maximum:0, count:0, sum:0};

  returnObject.minimum = Math.min(...totalArray);
  returnObject.maximum = Math.max(...totalArray);
  returnObject.range = returnObject.maximum - returnObject.minimum;
  returnObject.count = totalArray.length;
  
  let sumArray = 0;
  for(let x of totalArray) {
    sumArray += x;
  }
  returnObject.sum = sumArray;
  let mean = sumArray / totalArray.length;
  returnObject.mean = Number.parseFloat(mean.toFixed(3));
  
  if(totalArray.length % 2 == 0) {
    returnObject.median = (totalArray[Math.round(totalArray.length / 2)] + totalArray[Math.round(totalArray.length / 2) + 1]) / 2;
  }
  else {
    returnObject.median = totalArray[Math.floor(totalArray.length / 2)];
  }

  const modeObject = {};  // key: number, value: amount of times it shows up
  for(let x of totalArray) {
    if(modeObject.hasOwnProperty(x)) {
      modeObject[x] += 1;
    }
    else {
      modeObject[x] = 0;
    }
  }
  const modeArray = [];
  const valueArrmodeObj = Object.values(modeObject);
  let maxValue = Math.max(...valueArrmodeObj);
  if(maxValue == 1) {
    returnObject.mode = 0;
  }
  else {
    for(let x in modeObject) {
      if(modeObject[x] == maxValue) {
        modeArray.push(Number.parseFloat(x));
      }
    }
  }
  if(modeArray.length == 1) {
    returnObject.mode = modeArray.pop();
  }
  else {
    returnObject.mode = modeArray;
  }

  return returnObject;
};

let nestedObjectsDiff = (obj1, obj2) => {
  //Code goes here
};

let mergeAndSumValues = (...args) => {
  //this function takes in a variable number of objects that's what the ...args signifies
  const returnObject = {};
  for(const arg of args) {
    if(typeof arg !== "object") {
      throw new Error("given arguments are not objects.");
    }
    if(arg == null) {
      throw new Error("given arguments are null.");
    }
    const objArray = Object.entries(arg);
    if (objArray.length < 1) {
      throw new Error("object does not have at least one key value pair.");
    }
    for(let x in arg) {
      let y = arg[x];
      if(typeof y !== "number" && typeof y !== "string") {
        throw new Error("object values must be a number or a string that represents a number.");
      }
      if(typeof y === "number") {
        if(returnObject.hasOwnProperty(y)) {
          returnObject[x] += y;
        }
        else {
          returnObject[x] = y;
        }
      }
      else if(typeof y === "string") {
        let z = Number.parseFloat(y);
        if(Number.isNaN(z)) {
          throw new Error("object values must be a number or a string that represents a number.");
        }
        else {
          if(returnObject.hasOwnProperty(z)) {
            returnObject[x] += z;
          }
          else {
            returnObject[x] = z;
          }
        }
      }
    }
  }
  return returnObject;
};

export {objectStats, nestedObjectsDiff, mergeAndSumValues}