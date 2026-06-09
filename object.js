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

const emptyobj={};

emptyobj.name="alice"
emptyobj.email="alice123@yahoo.com"
emptyobj.age=19

console.log(emptyobj);
//delete a property
delete emptyobj.age
console.log(emptyobj);

// model name engie torse hoursepower function we like that car

const car={
    name:"Benz",
    model:2026,
    engine:"450cc",
    like: function() {
        console.log(`I like ${car.name} because something it has that engine ${car.engine}`);
    },
}
console.log(car);
(car.like());