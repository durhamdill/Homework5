/* Exercise1 */

function addNumbers(numberA, numberB) {
  return(numberA + numberB); // need to include a return instead of console.log
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4


/* Exercise2 */

function yell(string1) {
  var upper = string1.toUpperCase();
  return upper;
};

console.log(yell("say what???????"))


function yell10(string1) {
  var upper = string1.toUpperCase();
  return upper.repeat(10);
};

console.log(yell10("dook lost! "))


/* Exercise3 */

function longest(string1, string2) {
  /* var one = string1.length;
  var two = string2.length;
  var answer;

  if (one > two);
    answer = string1;
  } else if (one < two) {
    answer = string2;
  }

  return answer;

} did not get this more complicated version to work*/


  var longer;
  if (string1.length > string2.length) {
    longer = string1;
  } else {
    longer = string2;
  }
  return longer;
  }

console.log(longest("elephant", "tiger"))
console.log(longest("Maine", "Mississippi"))


/* Exercise4 */

function isVowel(character) {
  var vowel = ["a","A","e","E","i","I","o","O","u","U"];
  var vowelIndex = vowel.indexOf(character);
  var answer;
  if (vowelIndex > -1) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
  }

  console.log(isVowel("E"))
  console.log(isVowel("a"))
  console.log(isVowel("z"))
