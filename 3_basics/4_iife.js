//Immediately Invoked Function Expressions

(function chai() {
  //named IIFE
  console.log("DB Connected");
})();

//semicolun matters more to end iife function it let
//function know when to stop
( (name) => {
    //Unnamed IIFE with parameter pass
  console.log(`DB1 Connected ${name}`);
} )("Harsh");

// ()()
// first parenthesis for function defination 
//second parenthesis for function execution in iife