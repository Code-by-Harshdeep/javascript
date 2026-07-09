const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return (getArray[1])
}

console.log(returnSecondValue(myNewArray))  

function returnFullArray(...myarray){
 return [...myarray]
}
console.log(returnFullArray(myNewArray))