//for


for (let index = 0; index <=10; index++) {
     const element=index;
    if (element==5) {
        console.log("element reached value 5")
    }
      console.log(index)
}
console.log("")
let array=[1,23,4,5];

//duplicate multiple or help to replace varibale name used at many places
//with the help ctrl+d and press d again then type new name for variable 
//that affects multiple places
for (let i = 0; i < array.length; i++) {
   
    console.log(array[i])
    
}

// console.log(element)// result in not defined which is correct

for (let i = 0; i < 5; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value: ${j}`)
        
    }
}