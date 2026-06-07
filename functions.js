// function square(x){
//     console.log(`The square of number is : ${x*x}`)
// }
// let y=7
// square(y)

// function reve(x){
//     let y=x.split("").reverse().join("")
//     return y
// }

// let word="hello"
// reve(word)

// function palindrone(g){
//     if(g==reve(g)){
//         console.log(`Word is a Palidrone ${g} `);
//     }
// }
// let a="MADAM"
// palindrone(a)



// function sum(){
//     return 10+7
// }
// console.log(`addition of two number is : ${sum()}`);

// function sub(){
//     return 10-5
// }
// console.log(`Subtraction of two number is : ${sub()}`);

// function mult(){
//     return 10*5
// }
// console.log(`Multiplication of two number is : ${mult()}`);

// function divi(){
//     return 10/5
// }
// console.log(`Division of two number is : ${divi()}`);

// function modulo(){
//     return 10%5
// }
// console.log(`Modulo of two number is : ${modulo()}`);

// function operations(a,b,oper){
//     if(oper==="addition")
//         return `${oper}=${a+b}`
//     else if(oper==="sub")
//         return `${oper}=${a-b}`
//     if(oper==="mult")
//         return `${oper}=${a*b}`
//     if(oper==="divi"){
//         let d=a/b;
//         return `${oper}=${d.toFixed(2)}`}
//        if(oper==="modulo")
//         return `${oper}=${a%b}`
// }
// console.log(operations(7,9,"addition"));
// console.log(operations(7,9,"sub"));
// console.log(operations(7,9,"mult"));
// console.log(operations(7,9,"divi"));
// console.log(operations(7,9,"modulo"));

// function trafficlightt(light){
//     if(light==="Red"){
//         return "stop"
//     }
//     if(light==="Yellow"){
//         return "get ready"
//     }
//     if(light==="Green"){
//         return "Go ahead";
//     }
// }

// trafficlight("Green")




// function trafficlight(lightcolor){
//     switch(lightcolor){
//         case'Red':
//         console.log("stop");
//         break;
//         case'Yellow':
//         console.log("Get ready");
//         break;
//         case'Green':
//         console.log("Go Ahead");
//         break;
//         default:
//             console.log("Invaild");
//     }
// }
// trafficlight("Yellow")


// function week(day){
//     switch(day){
//         case 1:
//             console.log("sunday");
//             break;
//         case 2:
//             console.log("monday");
//             break;
//         case 3:
//             console.log("tuesday");
//             break;
//         case 4:
//             console.log("wednesday");
//             break;
//         case 5:
//             console.log("thursday");
//             break;
//          case 6:
//             console.log("Friday");
//             break;
//          case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invaild day")
//     }   
// }
// week(5)

// function tables(value){
//     console.log(`Table of ${value}`);
//     for(let i=1;i<11;i++){
//         console.log(`${value}x${i}= ${i*value}`);
//     }
// }
// tables(8)

// let tables=(value)=>{
//  console.log(`Table of ${value}`);
//     for(let i=1;i<11;i++){
//         console.log(`${value}x${i}= ${i*value}`);
//     }


// }
// tables(7)

// let week=(day)=>{
//       switch(day){
//         case 1:
//             console.log("sunday");
//             break;
//         case 2:
//             console.log("monday");
//             break;
//         case 3:
//             console.log("tuesday");
//             break;
//         case 4:
//             console.log("wednesday");
//             break;
//         case 5:
//             console.log("thursday");
//             break;
//          case 6:
//             console.log("Friday");
//             break;
//          case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invaild day")
//     }  
// }
// week(4)

trafficlight=(lightcolor)=>{
        switch(lightcolor){
        case'Red':
        console.log("stop");
        break;
        case'Yellow':
        console.log("Get ready");
        break;
        case'Green':
        console.log("Go Ahead");
        break;
        default:
            console.log("Invaild");
    }
    
}
trafficlight("Red")