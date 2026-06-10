//                     JavaScript(JS)
//                          |
//              ------------------------
//              |                       |
//          Browser                   Node.js
//              |                       |      
//              |                       |   
//           WebAPI                   LibW
//              ------------------------
//                         |    
//                       Queue    
//              ------------------------
//              |                      |
//           1.Microtask         1.Callback
//              Queue              Queue
//           2.Priority          2.MacroTask
//              Queue               Queue



//callstack it data structure which managed  sequence of tasks 
//time consuming functions/tasks are handled by webapi and libw
//webapi and libw:-
// they has two queues microtask or priority queue and callback queue, ,macrotask queue
// these time consuming task (eg.complex function) managed by event handler or event loop when process done processing

// console.log("start");

// setTimeout(() => {
//     console.log("time consuming");
// }, 5000)
// console.log("end");


// console.log("system is starting");
// user="alice"
// setTimeout(() => {
//     console.log("ready to use system");
//     console.log(`Welcome ${user}`);
// }, 3000)
// console.log("Getting things Ready");


// console.log("Choose method and make the payment");

// setTimeout(() => {
//     console.log("Payment Proccessing");
// }, 2000)



// setTimeout(() => {
//     console.log("Payment Succesfully");
//     console.log(`You can close this window`);
// }, 3000)

// const s=setInterval(()=>{
// console.log("running after 1 s");
// },1000);

// setTimeout(()=>{
//     clearInterval(s)
// },5000)

//    let time=0;
// const t=setInterval((time)=>{
//     while(time<5){
//         console.log(`at time ${time} :`);
//         time=time+1;
//     }
// },1000)


// setTimeout(()=>{
//     clearInterval(t)
// },5000)


// let name="alice"
// setTimeout(()=>{

// },3000)

// setTimeout(()=>{
// console.log(`Good Morning ${name}`);
// },3000) 

//delay greeting for 3 seconds
// let name="alice"
//  function greet(){
//     console.log(Good Morning ${name}`)
//  }
// setTimeout(()=>{
//     greet()
// },3000)

//runs 5 time but stop without settimeout
//     let count=0;
// function greet(name){
//         console.log(`Good Morning ${name}`);
//     count++;
//     if(count===5)
//         clearInterval(s)
//  }

// let s=setInterval(()=>{
//     console.log(`alice`);
// },1000)







// let name="alice"
//   let count=0;
// function greet(){
//     count++;
//     if(count===5)
//         clearInterval(s)
//  }

// let s=setInterval(()=>{
//     console.log(`Good Morning ${name}`);
   
// },1000)




//countdown



//   let count=10;
// function greet(){
//     console.log(count);
//     count--;
//     if(count===0) {
//     clearInterval(s)}
//  }

// let s=setInterval(()=>{
//    greet()
   
// },1000)


//   let count=10;
// function greet(){
//     console.log(count);
//     count--;
//     if(count===0) {
//     clearInterval(s)}
//  }

// let s=setInterval(()=>{
//    greet()
   
// },1000)
 





    //Stopwatch


//   let count=0;
//   let num;
// function stopwatch(num){
//     console.log(count);
//     count++;
//     if(count===num) {
//         console.log(count);
//     clearInterval(s)}
//  }

// let s=setInterval(()=>{
//    stopwatch(12)
   
// },1000)



//Stopwatch without limit


  let count=0;
function stopwatch(){
    console.log(count);
    count++;
    }
    
let s=setInterval(()=>{
   stopwatch()
   
},1000)









