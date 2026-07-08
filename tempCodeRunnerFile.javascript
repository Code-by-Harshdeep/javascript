let userOne={
    email:"user@gmail.com",
    upi:"user@oksbi"
}
let userTwo=userOne;
// console.log(userTwo)

userTwo.email="new@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)