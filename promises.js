//promises are object in javascipt that are stored in priority queue
//it has three states pending ,fulfill, and rejected
//preemitive methods   .then .catch                 mostly used is async away method
//prefined methods alway used with arrow fuction

// const myPromise= new Promise((resolve,reject)=>{
// // resolve("Yes i got the Shirt data");
// reject("Something went wrong")
// }
// );

// myPromise
// .then((result)=>{
//     console.log(result);
// console.log("run");
// })
// .catch((err)=>{
//     console.log(err);
// })




// function givepromise(){
//     const myPromise= new Promise((resolve,reject)=>{
//         resolve("Yeah its Working")
//     });
//     return myPromise;
// }

// const handlepromise= async()=>{
//     try{
//         const result= await givepromise();
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// handlepromise();



// let shirts=[
    
//     {shirtno:12,
//     color:"white",
//     fabric:"silk",
//     price:499
//      },

//     {shirtno:13,
//     color:"black",
//     fabric:"cotton",
//     price:499},
     
//     {shirtno:14,
//     color:"blue",
//     fabric:"nylon",
//     price:299},
    
//     { shirtno:15,
//     color:"green",
//     fabric:"silk",
//     price:599}
//     ]

// function givepromise(){
//     const myPromise= new Promise((resolve,reject)=>{
//         resolve(shirts)
//     });
//     return myPromise;
// }


// const handlepromise= async()=>{
//     try{
//         const result= await givepromise();
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// handlepromise();

let data=[
    
    {shirtno:12,
    color:"white",
    fabric:"silk",
    price:499
     },

    {shirtno:13,
    color:"black",
    fabric:"cotton",
    price:499},
     
    {shirtno:14,
    color:"blue",
    fabric:"nylon",
    price:299},
    
    { shirtno:15,
    color:"green",
    fabric:"silk",
    price:599}
    ]

    function getData(){
    const productApi= new Promise((resolve,reject)=>{
        resolve(data);
    });
    return productApi
}

const handleData=async(data)=>{
 try{
    const response=await getData(data);
    console.log(response);
    response.forEach((item) => {
        for (let key in item){
            console.log(`${key} = ${item[key]}`);
        }
        console.log("____________________________");
    });
 }
catch(err){
    console.log(err);
}
}
handleData();