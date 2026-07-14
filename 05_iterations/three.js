//for of


//types of format we get from api call  as Response
//["","",""]
//[{},{},{}]

const arr=[1, 2, 3, 4, 5]
//For Of array loop

for (const val of arr) {
    console.log(val)
}

for (const val of arr) {
    if (val==3){
    console.log(val)
break;
}
}

const greetings="Hello World";

// for (const greet of greetings) {
//     console.log(`Single Character is : ${greet}`)
// }

for (const greet of greetings) {
    if(greet==" ")
        continue;
    console.log(`Single Character is : ${greet}`)
}

//Maps
//map objects holds key-value pairs and remembers
//the original insertation order of the keys]
//no duplicate value

const map =new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

// console.log(map)

for (const [key,val] of map) {
     console.log(key,val);    
}

const myObj={
   Game1:"NFS",
   Game2:"Spi"
}

for (const [key,pair] of myObj) {
    console.log(key,":-",pair)
}
//object is not iterable result as
//object has different iterable methods


