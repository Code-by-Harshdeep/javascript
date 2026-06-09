// const products=[
// {name:"Laptop",price:499 ,color:"white"},
// {name:"Smartphone",price:899,color:"black"},
// {name:"Headphones",price:50,color:"White"},
// {name:"Tablet",price: 199,color:"grey"},
// {name:"Keyboard",price:210,color:"blue"}
// ]
// // const discount=products.map((items)=>{
// //     return {...items,
// //         price:items.price*0.5}
// // })
// const categorizedProducts=products.map(product=>{
// let category;
// if(product.price<100){
//     category="Budget"
// }
// else if(product.price<500){
//     category="Mid Range"
// }
// else category="Premium"
// return{...product, category}
// })
// console.log(categorizedProducts);
// // console.log(discount);


// const car={
//     name:"Benz",
//     color:"black",
//     model:2026
// };
// console.log(car);
// console.log(car.name);
// console.log(car["name"]);

// //Update object
// car.name="ferrari";
// console.log(car);

// //add property
// car.horsepower="750cc"
// console.log(car);

// const emptyobj={};

// emptyobj.name="alice"
// emptyobj.email="alice123@yahoo.com"
// emptyobj.age=19

// console.log(emptyobj);
// //delete a property
// delete emptyobj.age
// console.log(emptyobj);

// // model name engie torse hoursepower function we like that car

// const car={
//     name:"Benz",
//     model:2026,
//     engine:"450cc",
//     like: function() {
//         console.log(`I like ${car.name} because something it has that engine ${car.engine}`);
//     },
// }
// // console.log(car);
// (car.like());


// for(let key in car){
//     console.log(`${key},     ${car[key]}`);
// }
// const car={
//     brand:"blue",
//     color:"black",
//     brand:"porsche"
// };

// console.log(car.brand);
//Q2
// const data={
//     name:"alice",
//     age:25
// }
// data.age=23;
// console.log(data.age);
//
// const data={
//     name:"alice",
//     age:25,
//     city:"chd"
// }
// for(let x in data){
//     console.log(`${x} = ${data[x]}`);
// }

// const number={
//     number1:2,
//     number2:4
// }
// for(let s in number){
//      console.log(`${number[s]+10}`);
// }


// const subjects={
//     maths:99,
//     english:98,
//     physics:88,
//     chemistry:75,
//     It:100
// }
//   let totalmarks=0;
//   let sum=500
// for(let x in subjects){
//     totalmarks= totalmarks+subjects[x]  
// }
//  console.log(`Percenatge of Total Marks is : ${totalmarks/500*100} %`);
//for each
// const students=[
// {name:"alice" ,age:23},
// {name:"bob" ,age:25},
// {name:"shivam" ,age:18},
// {name:"ram" ,age:23},
// {name:"ram" ,age:12},
// {name:"ram" ,age:16}
// ]
// // let upp=students.forEach((item)=>{
// // console.log(item.name.toUpperCase());
// // })

// let totalage=0;
// let addi=students.forEach((item)=>{
//     totalage=item.age+totalage;

// })

// // console.log(upp);
// console.log(`Total age is : ${totalage}`);
 
// const students=[
// {name:"alice" ,age:23},
// {name:"bob" ,age:22},
// {name:"shivam" ,age:18},
// {name:"ram" ,age:20},
// {name:"ram" ,age:12},
// {name:"ram" ,age:16}
// ]

// let f=students.filter((items)=>{
//     return items.age>18
// })
// console.log(f);

// id ,name, branch
const person=[
    { id:1,name:"alice",branch:"btech" ,rollno:121},
    { id:2,name:"James",branch:"bca",rollno:122},
    { id:3,name:"skyy",branch:"btech-ai-ml",rollno:123},
    { id:4,name:"Yoru",branch:"btech",rollno:124},
    { id:5,name:"Gekko",branch:"bca",rollno:125},
    { id:6,name:"Brim",branch:"btech-ai-ml",rollno:126},
    { id:7,name:"Breach",branch:"btech",rollno:128},
    { id:8,name:"Willfort",branch:"btech",rollno:129},
    { id:9,name:"charles",branch:"btech",rollno:130},
    { id:10,name:"kenny",branch:"btech",rollno:127}
 
]
// let f=person.find((item)=>{
// return item.id==3;
// })
// f.branch="MCA"
// console.log(f);

let sv=person.filter((item)=>{
    return item.branch=="bca"
})
console.log(sv);