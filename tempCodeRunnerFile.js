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