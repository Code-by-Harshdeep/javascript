const products=[
{name:"Laptop",price:499 ,color:"white"},
{name:"Smartphone",price:899,color:"black"},
{name:"Headphones",price:50,color:"White"},
{name:"Tablet",price: 199,color:"grey"},
{name:"Keyboard",price:210,color:"blue"}
]
// const discount=products.map((items)=>{
//     return {...items,
//         price:items.price*0.5}
// })
const categorizedProducts=products.map(product=>{
let category;
if(product.price<100){
    category="Budget"
}
else if(product.price<500){
    category="Mid Range"
}
else category="Premium"
return{...product, category}
})
console.log(categorizedProducts);
// console.log(discount);