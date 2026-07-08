// arr=["a","b","c","d"]
// arr=[1,2,3,4,5,6,7,8,9,10]

// arr.forEach((value)=>{
//     console.log(value*10)
// });

// arr.forEach((value)=>{
//     console.log(value*value)
// });

// let pow=arr.forEach((value)=>{
//     console.log(value*value)
//     return value*value
// });
// console.log(pow);
// arr.forEach((even)=>{
//     if(even%2==0)
//     console.log(even)
// });

// arr.forEach((odd)=>{
//     if(odd%2==1)
//     console.log(od)
// });


// let cars=["Ferrari","BMW","Mercedes","Punch"]

// cars.forEach((value)=>{
//    console.log(value,value.length);
// });

// let even=[1,2,3,4,5,6,7,8,9,10]

// let even1= even.map((item)=>{
//     if(item%2==0){
//         console.log(item);
//     }})
// console.log(object);


// const o=[1,2,3,4,5,6,7,8,9,10]

// const odd=o.filter((item)=> item %2===1)

// console.log(odd);










// const evenc=even.forEach((value) => {
//     console.log(value);
// });
// const even=[1,2,3,4,5]
// const evenno=even.map((value,index)=>{
//     if(value%2==0){
//     return `${value} on index ${index}`;}
// })


// console.log(evenno)

// const numbers = [1, 2, 3, 4, 5]

// const qube = numbers.forEach((value) => {
//     return value * value * value
// })

// console.log(qube);

// const qube1 = numbers.map((value) => {
//     return value * value * value
// }
// )

// console.log(qube1);

let name = ["James", "alice"]

let uppername = name.map((value) => {
    return value.toUpperCase();
})

// console.log(uppername);

// let tax = [100, 120, 150]

// arr = [1, 2, 3]


// const filtered = arr.filter((item) => {
//     return item % 2 == 0
// })

// console.log(filtered);

// const mapped = arr.map((item) => {
//     return item % 2 == 0
// })

// console.log(mapped)


// const numbers = [1, 2, 3, 4, 5,6,7,8,9,10]

// const mult_map= (n)=>{
//     let mult=1;
//     numbers.forEach((value)=>{
//   mult = mult *value
//     })
//     console.log(mult);
// }
// mult_map(numbers)


// const arr=[1,2,3,4]

// // result= arr.forEach((item)=>{
// //  item+=10
// //  console.log(arr);
// // })
// result =arr.map((value)=>{
// return value+=10
// }
// )

// console.log(result);


// mult=arr.map((value)=>{
// return value*value
// }
// )
// console.log(mult);

// qube=arr.map((value)=>{
//     return value*value*value
// }
// )
// console.log(qube);

// sumofarr=arr.map((value)=>{
//     let sum=0;
//     arr.forEach(value){
//         sum=sum+value;
//     }
// })


// let cars=["ferrari","Punch","Defender"]
// let upcar=cars.filter((value)=>{
//     if(value.length===5){
//         console.log(value.toUpperCase());    
//     }
//     return value.length===5
// })

//    console.log(upcar);



// let arr=[1,2,3,4,5]
// let r=arr.map((item)=>{
//     return String(item)
// })
// console.log(r);


// let s=r.map((item)=>{
//     return parseInt(item)
// })
// console.log(s);


// let arr=[12,20,4,6,15,7,8]

// let ten=arr.filter((values)=>{
//   return values>10}
// )

// console.log(ten);



// let even=arr.filter((values)=>{
//    if(values%2===0){
//        return values;
//    }
//    console.log(values);
// })

// console.log(even);




// const cars=["Defender","Punch","Ferrari","mercedes"]

// const greatlen= cars.filter((items)=>{
//      return items.length>7
// })
// console.log(greatlen);

// let a=["1","7","4","5","3","2"]
// parseInt(a)
// let s=arr.length
// // let i=0
// // while()
// //     i=
// parseInt(arr[s])
// console.log(arr);


// const cars=["Defender","Punch","Ferrari","mercedes"]

// const greatlen= cars.find((items)=>{
//      return items.length>7
// })
// console.log(greatlen);

// const arr=["45555","536834","876497","38468"]
// const arr2=arr.map(Number)

// const intt=arr2.map((value)=>{
//     return parseInt(value)
// })

// const fill=arr2.filter((value)=>{
//     return value>300000
// })

// const fill1=arr2.find((value)=>{
//     return value>310000
// })
// // console.log(intt);
// console.log(fill);
// console.log(fill1);


//Reduce

// const arr=[45,34,23,78];
// const result=arr.reduce((acc,num)=>{
//     return acc+num
// },0);

// console.log(result);

const arr=[45,34,23,78];
const result=arr.reduce((acc,num)=>{
    return acc*num
},1);

console.log(result);


