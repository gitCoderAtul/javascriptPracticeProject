console.log(uname);     // undefined
var uname;

console.log(lname);     // undefined 
var lname = 'marri';
 
//   console.log(letvar);     // let variable is hoisted but not initialised --- gives reference error
//  let letvar = 'ram';

// console.log(asss);          // const variable gives error as variable not defined 
// asss = 'radhe';

funCall();
function funCall(){
    console.log('function call hoisted');
}

// funExpres();    // it gives type error bcoz its not hoisted 
var funExpres = function(){
    console.log('function expression hoisted');
}

funArrow();  // it gives type error bcoz its not hoisted     
var funArrow = () =>{
    console.log('function arrow hoisted');

}
