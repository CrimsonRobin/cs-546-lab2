/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import {arrayPartition, arrayShift, matrixOne} from './arrayUtils.js';
import {swapChars, longestCommonSubstring, palindromeOrIsogram} from './stringUtils.js';
import {objectStats, nestedObjectsDiff, mergeAndSumValues} from './objectUtils.js';

try {
    const arrayToPartition1 = [1, 2, 3, 4, 5]; 
    const partitionFunc1 = (num) => num % 2 === 0; 
    const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1); 
    // Expected Result: [[2, 4], [1, 3, 5]]
    console.log("arrayPartition test case 1 passed successfully, here is the result: ");
    console.log(partitionedArrays1);
} catch(e) {
    console.error("arrayPartition failed test case 1, here is the error: ");
    console.error(e.message);
}

try {
    const arrayToPartition2 = [10, 15, 20, 25, 30]; 
    const partitionFunc2 = (num) => num > 18; 
    const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); 
    // Expected Result: [[20, 25, 30], [10, 15]]
    console.log("arrayPartition test case 2 passed successfully, here is the result: ");
    console.log(partitionedArrays2);
} catch (error) {
    console.error("arrayPartition failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const arrayToPartition3 = ["apple", "banana", "cherry", "date"]; 
    const partitionFunc3 = (fruit) => fruit.length >= 6; 
    const partitionedArrays3 = arrayPartition(arrayToPartition3, partitionFunc3); 
    // Expected Result: [['banana', 'cherry'], ['apple', 'date']]
    console.log("arrayPartition passed test case 3 successfully, here is the result: ");
    console.log(partitionedArrays3);
} catch (error) {
    console.error("arrayPartition failed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const arrayToPartition4 = [0, -5, 10, -3, 7]; 
    const partitionFunc4 = (num) => num >= 0; 
    const partitionedArrays4 = arrayPartition(arrayToPartition4, partitionFunc4); 
    // Expected Result: [[0, 10, 7], [-5, -3]]
    console.log("arrayPartition passed test case 4 successfully, here is the result: ");
    console.log(partitionedArrays4);
} catch (error) {
    console.error("arrayPartition failed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const shiftArray1 = arrayShift([3,4,5,6,7], 3);   // returns [5,6,7,3,4]
    console.log("arrayShift passed test case 1, here is the result: ");
    console.log(shiftArray1);
} catch (error) {
    console.error("arrayShift failed test case 1, here is the error: ");
    console.error(error.message);
}

try {
    const shiftArray2 = arrayShift(["Hello",true, 5,"Patrick","Goodbye"], 4)   
    // returns [true, 5, "Patrick", "Goodbye", "Hello"]
    console.log("arrayShift passed test case 2, here is the result: ");
    console.log(shiftArray2);
} catch (error) {
    console.error("arrayShift failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const shiftArray3 = arrayShift([1,2,3,4], -2)   // returns [3,4,1,2]
    console.log("arrayShift passed test case 3, here is the result: ");
    console.log(shiftArray3);
} catch (error) {
    console.error("arrayShift failed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const shiftArray4 = arrayShift([7,8,9,10], 0) // returns [7,8,9,10]
    console.log("arrayShift passed test case 4, here is the result: ");
    console.log(shiftArray4);
} catch (error) {
    console.error("arrayShift failed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const shiftArray5 = arrayShift([7,11,15], 3.5) // throws error
    console.log("arrayShift failed test case 5, here is the result: ");
    console.log(shiftArray5);
} catch (error) {
    console.error("arrayShift passed test case 5, here is the error: ");
    console.error(error.message);
}

try {
    const oneMatrix1 = matrixOne([[2,2,2],[2,0,2],[2,2,2]]) 
    //returns [[2,1,2],[1,1,1],[2,1,2]] 
    console.log("matrixOne passed test case 1, here is the result: ");
    console.log(oneMatrix1);
} catch (error) {
    console.error("matrixOne failed test case 1, here is the error: ");
    console.error(error.message);
}

try {
    const oneMatrix2 = matrixOne([[0,1,2,0],[3,5,4,2],[1,7,3,5]]) 
    //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
    console.log("matrixOne passed test case 2, here is the result: ");
    console.log(oneMatrix2);
} catch (error) {
    console.error("matrixOne failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const oneMatrix3 = matrixOne([[0,1,2,0],[3,5,4]]) // throws error
    console.log("matrixOne failed test case 3, here is the result: ");
    console.log(oneMatrix3);
} catch (error) {
    console.error("matrixOne passed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const oneMatrix4 = matrixOne([]) // throws error
    console.log("matrixOne failed test case 4, here is the result: ");
    console.log(oneMatrix4);
} catch (error) {
    console.error("matrixOne passed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap1 = swapChars("Patrick", "Hill"); //Returns "Hillick Patr"
    console.log("swapChars passed test case 1, here is the result: ");
    console.log(charSwap1);
} catch (error) {
    console.error("swapChars failed test case 1, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap2 = swapChars("hello", "world"); //Returns "worlo helld"
    console.log("swapChars passed test case 2, here is the result: ");
    console.log(charSwap2);
} catch (error) {
    console.error("swapChars failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap3 = swapChars("Patrick", ""); //Throws error
    console.log("swapChars failed test case 3, here is the result: ");
    console.log(charSwap3);
} catch (error) {
    console.error("swapChars passed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap4 = swapChars(); // Throws Error
    console.log("swapChars failed test case 4, here is the result: ");
    console.log(charSwap4);
} catch (error) {
    console.error("swapChars passed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap5 = swapChars("John") // Throws error
    console.log("swapChars failed test case 5, here is the result: ");
    console.log(charSwap5);
} catch (error) {
    console.error("swapChars passed test case 5, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap6 = swapChars ("h", "Hello") // Throws Error
    console.log("swapChars failed test case 6, here is the result: ");
    console.log(charSwap6);
} catch (error) {
    console.error("swapChars passed test case 6, here is the error: ");
    console.error(error.message);
}

try {
    const charSwap7 = swapChars ("h","e") // Throws Error
    console.log("swapChars failed test case 7, here is the result: ");
    console.log(charSwap7);
} catch (error) {
    console.error("swapChars passed test case 7, here is the error: ");
    console.error(error.message);
}

try {
    const str1 = "abcdxyz"; 
    const str2 = "xyzabcd"; 
    const commonSubstring = longestCommonSubstring(str1, str2); // Expected Result: "abcd"
    console.log("longestCommonSubstring passed test case 1, here is the result: ");
    console.log(commonSubstring);
} catch (error) {
    console.error("longestCommonSubstring failed test case 1, here is the error: ");
    console.error(error.message);
}

try {
    const str1 = "programmer"; 
    const str2 = "ProGramming"; 
    const commonSubstring = longestCommonSubstring(str1, str2); // Expected Result: "programm"
    console.log("longestCommonSubstring passed test case 2, here is the result: ");
    console.log(commonSubstring);
} catch (error) {
    console.error("longestCommonSubstring failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const str1 = "abcdef"; 
    const str2 = "123456"; 
    const commonSubstring = longestCommonSubstring(str1, str2); // Expected Result: "" // No common substring in this case
    console.log("longestCommonSubstring passed test case 3, here is the result: ");
    console.log(commonSubstring);
} catch (error) {
    console.error("longestCommonSubstring failed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const str1 = "abcdef"; 
    const str2 = "acdfgh"; 
    const commonSubstring = longestCommonSubstring(str1, str2); // Expected Result: "cd"
    console.log("longestCommonSubstring passed test case 4, here is the result: ");
    console.log(commonSubstring);
} catch (error) {
    console.error("longestCommonSubstring failed test case 4, here is the error: ");
    console.error(error.message);
}

try {
    const checkStrings = (["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"]); 
    const results = palindromeOrIsogram(checkStrings);
    console.log("palindromeOrIsogram passed test case 1, here is the result: ");
    console.log(results);
    //returns and then logs: 
    //{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", 
    //"Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" }
} catch (error) {
    console.error("palindromeOrIsogram failed test case 1, here is the error: ");
    console.error(error.message);
}

try {
    const strings1 = ["level", "Racecar", "Palindrome", "Isogram"]; 
    const results1 = palindromeOrIsogram(strings1);
    console.log("palindromeOrIsogram passed test case 2, here is the result: ");
    console.log(results1);
//returns and then outputs:
//{ "level": "Palindrome", "Racecar": "Palindrome", "Palindrome": "Isogram", "Isogram": "Isogram" }
} catch (error) {
    console.error("palindromeOrIsogram failed test case 2, here is the error: ");
    console.error(error.message);
}

try {
    const strings2 = ["hello", "world", "Java", "Python"]; 
    const results2 = palindromeOrIsogram(strings2); 
    console.log("palindromeOrIsogram passed test case 3, here is the result: ");
    console.log(results2);
    //returns and then outputs
    //{ "hello": "Neither", "world": "Isogram", "Java": "Neither", "Python": "Isogram" }
} catch (error) {
    console.error("palindromeOrIsogram failed test case 3, here is the error: ");
    console.error(error.message);
}

try {
    const strings3 = ["abba", "abcd", "Is it OK?", "No lemon, no melon", "a"]; 
    const results3 = palindromeOrIsogram(strings3);
    console.log("palindromeOrIsogram passed test case 4, here is the result: ");
    console.log(results3);
//returns and then outputs
//{ "abba": "Palindrome", "abcd": "Isogram", "Is it OK?": "Neither", "No lemon, no melon": "Palindrome", "a": "Both" }
} catch (error) {
    console.error("palindromeOrIsogram failed test case 4, here is the error: ");
    console.error(error.message);
}