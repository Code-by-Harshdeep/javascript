const user = {
  username: "harsh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username="Alice"
// user.welcomeMessage()

// function chai(){
//     let username="Harsh"
//     console.log(this.username)
// }

// chai();

// const chai = function(){
//       let username="Harsh"
//       console.log(this.username)
// }

const chai = () => {
  let username = "Harsh";
  console.log(this);
};
chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//Implicit Return in arrow function
const addTwo = (num1, num2) => num1 + num2;

// use in react mostly
const addTwo = (num1, num2) => num1 + num2;

//when return object
const addTwo = (num1, num2) => ({ username: "Harsh" });
console.log(addTwo(3, 4));

const myArray = [2, 5, 7, 9];

//function method used in array loop methods
myArray.forEach(function () {});
// myArray.forEach(()={})
