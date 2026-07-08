//date

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.getHours())
console.log(typeof myDate)

// let myCreatedDate = new Date("2024,0,23,5,3")
let myCreatedDate = new Date("05-13-2025")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
 weekday:"long",
 timeZone:'IST'
})

//need more clarity in this