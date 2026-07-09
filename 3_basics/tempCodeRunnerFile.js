
function loginUserMessage(username="Alice"){
    if(!username){
        console.log("please enter a Username")
        return

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Harsh"))  
console.log(loginUserMessage())  