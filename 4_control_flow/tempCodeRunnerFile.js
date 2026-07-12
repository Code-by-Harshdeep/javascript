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