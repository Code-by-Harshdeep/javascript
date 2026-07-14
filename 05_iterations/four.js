const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}

for (const key in myObject) {
 console.log(`${key} ${myObject[key]}`)

}

//for in good for iterating through objects

const prog=["javascript","C++","Ruby",]

for (const key in prog) {
     console.log(prog[key])
}

//in for in :-console.log(key) result in 0,1,2,3...
//whereas for of console.log(key) gives direct value of key

const map =new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

for (const key in map) {
   console.log(key)
      
} //map iteration is not possible for in