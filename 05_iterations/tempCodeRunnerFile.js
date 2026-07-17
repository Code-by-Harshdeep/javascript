const nums=[1,2,3,4,5]
const intial=0;

const sumwithintial=nums.reduce((x,y)=>x+y,intial)
//reduce method works with
// acculmator and currentvalue  we need to define a
// variable as intialvalue as zero or we can simply use 
// 0 without a variable to hold zero value in it it will help
//us to calculate total value from array :-
const sumwithintial2=nums.reduce((x,y)=>x+y,0)
const sumwithintial3=nums.reduce((x,y)=>x+y,3)
console.log(sumwithintial)
console.log(sumwithintial2)
console.log(sumwithintial3)