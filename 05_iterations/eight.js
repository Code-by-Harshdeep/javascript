const nums=[1,2,3,4,5]
const intial=0;

const sumwithintial=nums.reduce((x,y)=>x+y,intial)
//reduce method works with
// acculmator and currentvalue  we need to define a
// variable as intialvalue as zero it will help
//us to calculate total value from array
console.log(sumwithintial)