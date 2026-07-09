//Singleton

// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="Alice"
tinderUser.isLoggedIn=false

// console.log(tinderUser)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Harshdeep",
            lastname:"Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={
   firstname:"harshdeep"
}
const obj2={
lastname :"singh"
}


// const obj3 = Object.assign({},obj1,obj2)
//{} we create empty object as target it is optional but prefered
// we can also join objects with {} then first object will acts
//as a target and other objects acts as source objects


//mostly used method is to combine objects
// is with spread operator
const obj3= {...obj1,...obj2}
// console.log(obj3)


//data figure come from database is in form of array 
//of objects eg:-
const users = [
    {
        id:1,
        email :"a@gmail.com"
    },
    {
        id:2,
        email :"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]


users[1].email

console.log(tinderUser)

//to get keys of an object gives output in array 
//which means we use use loops on that keys
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// Case- after looping all thorugh in a object
// if value doesnt exits we are looking for
// we can use hasOwnProperty to check which will result
//either in true or false
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor : "Harsh"
}

// course.courseInstructor

const {courseInstructor } =course  //this is prefered using (.) dot again and again like object.key
                                  //instead const {key} =object
//{courseInstructor :instructor}
const {courseInstructor :instructor} =course
//{real key name  : alias name} we can give
console.log(courseInstructor)
console.log(instructor)


//destructuring objects
const navbar=({company})=>{
}
navbar(company="abc_Company")

