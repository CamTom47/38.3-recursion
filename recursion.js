/** product: calculate the product of an array of numbers. */

function product(nums) {
//Base case
if(nums.length === 0 ) return 1;
//Normal Case
return nums[0] * (product(nums.slice(1)));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0 ) {
  //Base case
if(idx === words.length) return longestWord
  //Normal Case
  longestWord = Math.max(words[idx].length, longestWord)
  return longest(words, idx + 1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  //Base case
  if(idx >= str.length) return newStr;
  //Normal Case
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {

  let leftIdx = idx
  let rightIdx = str.length - idx - 1
  if(leftIdx >= rightIdx) return true
  if(str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
if(idx -1 > arr.length) return -1

if(arr[idx] === val) return idx
return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  //Base case
  if(str.length === newStr.length) return newStr
  //Normal Case
  newStr += str[str.length - 1 - idx]
  return revString(str, idx + 1, newStr)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArr = [];
  for ( let key in obj){
    if (typeof obj[key] === 'string') stringsArr.push(obj[key])
    if (typeof obj[key] === 'object') stringsArr.push(...gatherStrings(obj[key]));
  }

  return stringsArr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
  //Base case
  if (leftIdx > rightIdx) return -1
  //Normal Case
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (arr[middleIdx] === val) return middleIdx

  if( arr[middleIdx] > val) {
    return binarySearch(arr, val, leftIdx, middleIdx -1)
  }
    return binarySearch(arr, val, middleIdx + 1, rightIdx)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
