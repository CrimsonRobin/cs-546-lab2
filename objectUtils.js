/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let objectStats = (arrObjects) => {
  if(Array.isArray(arrObjects) == false) {
    throw new Error("given parameter is not an array.");
  }
  for(let obj of arrObjects) {
    if(typeof obj !== "object") {
      throw new Error("elements in array are not objects.");
    }
    if(obj == null) {
      throw new Error("elements in array are null.");
    }
    const valueArray = obj.values();

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
    const testArray = obj.values();
    for(let x of testArray) {
      totalArray.push(x);
    }
  }
  totalArray.sort();
  const returnObject = {mean, median, mode, range, minimum, maximum, count, sum};
  
  let meanArray = 0;
  for(let x of totalArray) {
    meanArray += x;
  }
  returnObject[mean] = meanArray / totalArray.length;

  if(totalArray.length % 2 == 0) {
    //even

  }
  else {
    
  }


};

let nestedObjectsDiff = (obj1, obj2) => {
  //Code goes here
};

let mergeAndSumValues = (...args) => {
  //this function takes in a variable number of objects that's what the ...args signifies
};

export {objectStats, nestedObjectsDiff, mergeAndSumValues}