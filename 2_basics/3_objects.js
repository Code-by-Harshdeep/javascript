//singleton
//Object.create




//declaring a symbol
const mySym =Symbol("key1")

//object literals
const JsUser = {
    name:"Harsh",
    "full name" :"Harshdeep Singh",
    [mySym]:"mykey1",
    age: 20,
    location: "ludhiana",
    email:"harsh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym]) // will result in symbol value datatype
// console.log(typeof mySym)   //will result in datatype of declared symbol

JsUser.email="harsh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email="harsh@microsoft@gmail.com"
// console.log(JsUser)

JsUser.greeting=function (){
   return "welcome JS user"
}
JsUser.greetingTwo=function (){
    return `Hello JS User ${this["full name"]}`
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())