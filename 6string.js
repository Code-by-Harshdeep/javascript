const name = "harsh"
const repoCount = 50

console.log(name +repoCount+"value")

console.log(`${name+repoCount}`)

/*String Interpolation Method */
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


//Another Method to declare String
const gameName = new String("Harshc")

//
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("c"))
console.log(gameName.slice(1,3))

//Method to create Substring
const newString= gameName.substring(0,2)
console.log(newString)

const word='testing'
const anotherString =word.slice(2,-2)
console.log(anotherString)

//Trim is used to remove empty space from start and end
const Stringtwo="   hello world   "
console.log(Stringtwo.trim())

//to Remove Empty Spaces between and anywhere in data
const NewStringOne = "       har sh     "
console.log(NewStringOne.split(" ").join(""))
/*We use split and join */



const url="https://google.com"

console.log(url.replace("google","yahoo"))

console.log(url.includes(".com"))

//split the string to array based on seprator
const StringThree ="Harsh-@-.com"
console.log(StringThree.split("-"))