// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str
  //   .toLowerCase()
  //   .split('')
  //   .reverse()
  //   .join('')

  // let revString = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i]
  // }
  // return revString


  // let revString = ''
  // for (const char of str) {
  //   revString = char + revString
  // }
  // return revString

  // let revString = ''
  // str.split('').forEach(char => revString = char + revString)
  // return revString

  return str.split('').reduce((revString, char) => {
    return char + revString
  }, '')
}

function reverseStringTwo(str) {
  return [...str].reverse().join('')
}
const reverseOne = reverseString('hello')
const reverseTwo = reverseStringTwo('yellow')

console.log(reverseOne)
console.log(reverseTwo)

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false

function isPalindrome(str) {
  const palStr = str.split('').reverse().join('')
  return palStr === str
}

const isPalOne = isPalindrome('racecar')
console.log(isPalOne)
const isPalTwo = isPalindrome('hello')
console.log(isPalTwo)


// CHALLENGE 3: REVERSE AN INTEGER
// Return an interger in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const num = int.toString()
  const reverseNum = num.split('').reverse().join('')
  return parseFloat(reverseNum)
}

const intOne = reverseInt(543)
console.log(intOne)


// CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love jesus') === 'I Love Jesus'
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ')

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
  // }

  // return strArr.join(' ')

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}

const capitalLetters = capitalizeLetters('i love jesus')
console.log(capitalLetters)

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex maxCharacter('javascript') === 'a'
function maxCharacter(str) {
  const charMap = {}
  let maxNum = 0
  let maxChar = ''

  str.split('').forEach(char => {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  for (const char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

const maxLetter = maxCharacter('javascript')
console.log(maxLetter)

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz"

function fizzBuzz(){

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz') 
    } else if (i % 3 === 0) {
      console.log('Fizz') 
    } else if (i % 5 === 0) {
      console.log('Buzz') 
    }  
  }
}

const buzz = fizzBuzz()
console.log(buzz)