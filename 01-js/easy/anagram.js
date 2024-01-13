/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  if(str1.length != str2.length){
    return false;
  }
  let str2Array = str2.split('');
  
  for(let i of str1){
    let index = str2Array.indexOf(i);
    if(index === -1){
      return false;
    } else {
      str2Array.splice(index, 1);
    }
  }
  
  return str2Array.length === 0;
}
module.exports = isAnagram;
