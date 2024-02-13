/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let arrayPartition = (arrayToPartition, partitionFunc) => {
  if(Array.isArray(arrayToPartition) == false) {
      throw new Error("given array is not an array.");
  }
  if(arrayToPartition.length == 0) {
    throw new Error("given array is empty.");
  }
  if(arrayToPartition.length < 2) {
    throw new Error("given array is less then 2 elements.");
  }
  if(typeof partitionFunc !== "function") {
    throw new Error("given function is not a function.");
  }

  const subArrayTrue = [];
  const subArrayFalse = [];

  for(let x of arrayToPartition) {
    if(partitionFunc(x)) {
      subArrayTrue.push(x);
    }
    else {
      subArrayFalse.push(x);
    }
  }

  const combinedArrays = [subArrayTrue, subArrayFalse];
  return combinedArrays;
};

let arrayShift = (arr, n) => {
  if(Array.isArray(arr) == false) {
    throw new Error("given array is not an array.");
  }
  if(arr.length < 2) {
    throw new Error("given array has less then two elements.");
  }
  if(Number.isSafeInteger(n) == false) {
    throw new Error("given number is not a safe whole number.");
  }

  const shiftedArray = [];
  for(let i = 0; i < arr.length; i++) {
    let shift = (i + Math.abs(n)) % arr.length; //make this always pos or make two sep cases
    shiftedArray[shift] = arr[i];
  }
  return shiftedArray;
};

let matrixOne = (matrix) => {
  if(Array.isArray(matrix) == false) {
    throw new Error("matrix is not an array.");
  }
  if(matrix.length == 0) {
    throw new Error("matrix is an empty array.");
  }
  let check = 0;
  for(let subArray of matrix) {
    if(Array.isArray(subArray) == false) {
      throw new Error("element of matrix is not an array.");
    }
    if(subArray.length == 0) {
      throw new Error("element in the matrix array is an empty array.");
    }
    if(check == 0) {
      check = subArray.length;
    }
    else {
      let nextCheck = subArray.length;
      if (check != nextCheck) {
        throw new Error("sub array in the matrix has missing elements.");
      }
    }
    for(let subArrayElement of subArray) {
      if(Number.isSafeInteger(subArrayElement) == false) {
        throw new Error("sub array element is not a safe integer.");
      }
    }
  }
  //checks done
  const arraysToChange = [];
  const indexesToChange = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] == 0) {
        indexesToChange.push(j);
        arraysToChange.push(i);
      }
    }
  }
  for(let a of arraysToChange) {
    for(let i = 0; i < matrix[a].length; i++) {
      matrix[a][i] = 1;
    }
  }
  for(let sub of matrix) {
    for(let j = 0; j < sub.length; j++) {
      for(let x of indexesToChange) {
        if (j == x) {
          sub[j] = 1;
        }
      }
    }
  }
  return matrix;
};

export {arrayPartition, arrayShift, matrixOne}