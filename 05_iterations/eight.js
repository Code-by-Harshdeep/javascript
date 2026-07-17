const nums=[1,2,3,4,5]
const intial=0;

const sumwithintial=nums.reduce((x,y)=>x+y,intial)
//reduce method works with
// acculmator and currentvalue  we need to define a
// variable as intialvalue as zero or we can simply use 
// 0 without a variable to hold zero value in it it will help
//us to calculate total value from array :-
const sumwithintial2=nums.reduce((x,y)=>x+y,0)
const sumwithintial3=nums.reduce((acc,currval)=>acc+currval,3)

//we can use this totalcart cost in application
console.log(sumwithintial)
console.log(sumwithintial2)
console.log(sumwithintial3)

const shoppingCart=[
    {
        itemName:"Js Course",
        price:999
    },
    {
        itemName:"Py Course",
        price:1499
    },
    {
        itemName:"Mobile Course",
        price:799
    },
    {
        itemName:"DS Course",
        price:1299
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay)
