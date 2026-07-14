const coding=["js","python","ruby","cpp"]


// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach((item)=>{
//      console.log(item)
//     })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
//passed reference not execution

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const MyCoding=[
    {
        Languagename:"Javascript",
        LanguagefileName:"JS1"
    } ,
      {
        Languagename:"PYthon",
        LanguagefileName:"PY1"
    },
      {
        Languagename:"C++",
        LanguagefileName:"C1"
    }
]

MyCoding.forEach((item)=>{
     console.log(item.Languagename," ",item.LanguagefileName)
})