/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let swapChars = (string1, string2) => {
  if(typeof string1 !== "string" || typeof string2 !== "string") {
    throw new Error("given strings are not a string.");
  }
  let trimString1 = string1.trim();
  let trimString2 = string2.trim();

  if(trimString1.length < 4 || trimString2.length < 4) {
    throw new Error("given strings are not at least 4 characters long.");
  }

  let extractString1 = trimString1.substring(0, 4);
  let extractString2 = trimString2.substring(0, 4);

  let replaceString1 = trimString1.replace(extractString1, extractString2);
  let replaceString2 = trimString2.replace(extractString2, extractString1);

  let returnString = replaceString1.concat(" ", replaceString2);
  return returnString;
};

let longestCommonSubstring = (str1, str2) => {
  if(typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("given strings are not a string.");
  }
  let trimstr1 = str1.trim();
  let trimstr2 = str2.trim();

  if(trimstr1.length < 5 || trimstr2.length < 5) {
    throw new Error("given strings are not at least 5 characters long.");
  }

  let lcs = "";
  for(let i = 0; i < trimstr1.length; i++) {
    for(let j = 1; j < trimstr1.length - 1; j++) {
      let test = trimstr1.slice(i, j);
      let search = trimstr2.toUpperCase().search(test.toUpperCase());
      if(search != -1 && test.length > lcs.length) {
        lcs = test;
      }
    }
  }
  return lcs;
};

let palindromeOrIsogram = (arrStrings) => {
  if(Array.isArray(arrStrings) == false) {
    throw new Error("given array is not an array.");
  }

  if(arrStrings.length < 2) {
    throw new Error("given array has less then two elements.");
  }

  for(let x of arrStrings) {
    if(typeof x !== "string") {
      throw new Error("element in array is not a string.");
    }
    if(x.trim().length < 1) {
      throw new Error("string element is empty.");
    }
  }
  const newObject = {};
  for(let substring of arrStrings) {
    let palin = false;
    let iso = true;
    let newString = substring.trim().replace(/[\W\s]/g, "");
    let arrayString = newString.split("").reverse().join("");
    if(newString.toUpperCase() == arrayString.toUpperCase()) {
      //it's a palindrome
      palin = true;
    }

    const newArray = [];
    for(let c of newString) {
      if(newArray.length == 0) {
        newArray.push(c);
      }
      else {
        for(let n of newArray) {
          if (c.toUpperCase() == n.toUpperCase()) {
            //not an isogram
            iso = false;
          }
        }
        newArray.push(c);
      }
    }
    
    if(palin && iso) {
      newObject[substring] = "Both";
    }
    else if(palin) {
      newObject[substring] = "Palindrome";
    }
    else if(iso) {
      newObject[substring] = "Isogram";
    }
    else {
      newObject[substring] = "Neither";
    }
  }
  return newObject;
};

export {swapChars, longestCommonSubstring, palindromeOrIsogram}