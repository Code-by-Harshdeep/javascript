//if
const isUserLoggedin=true;
const temperature =41;
// if(2=="2"){
//  console.log("hello")
// }
// if(2!=3){
//  console.log("hello")
// }

// if(temperature<50){
//     console.log("temperature is less then 50")
// }
// console.log("temperature is more then 50")

// if(temperature===40){
//     console.log("temperature is less then 50")
// }
// else{
// console.log("temperature is more then 50")}

//<, > , <=,>=,==,!=,===,!==

const score=200;

if(score>100){
    const power="fly";
console.log(`User Power ${power}`)}
else{

}

//short hand notation
const balance =1000

// if(balance>500) console.log("test")  //implicit scope but not prefered to Use

//nesting
if(balance<500){
    console.log("Less Then 500 ")
}
else if(balance<750){
    console.log("less then 750")
}
else if(balance<900){
    console.log("less then 900")
}
else{
    console.log("less then 1200")
}
 
//Real life example
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy Course")
// }
if(userLoggedIn && debitCard && loggedInFromGoogle ||loggedInFromEmail){
    console.log("Allow Shopping")
}
else if(userLoggedIn && debitCard){
    console.log("Must log in from google")
}
else {
    console.log("done")
}