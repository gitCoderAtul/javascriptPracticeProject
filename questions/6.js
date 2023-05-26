// 1) create a text box , get value from the same. do the validation for mobile number & show result in paragraph ( below textbox) 
function validate(){
    let mobNo = document.querySelector('[name=mobileNumber]');
   // console.log(mobNo);

    var validMob = /^[7-9][0-9]{9,9}$/
  //  console.log(validMob.test(57920817292));
    var ansMob = validMob.test(mobNo.value);
    console.log(ansMob);

    let emailId = document.querySelector('[name=emailId]');

    var validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(validEmail.test('atul@gmail.com') , ' Mail');
    var ansEmail = validEmail.test(emailId.value);
    if(ansMob == false){
        document.getElementById('mobMsg').innerHTML = 'Please Enter Correct Mob Number';
        document.getElementById('mobMsg').style.color = 'red';
        document.getElementById('mobMsg').style.margin = '0'
    }else if(ansEmail == false){
        document.getElementById('emaiMsg').innerHTML = 'Please Enter Correct Email Id';
        document.getElementById('emaiMsg').style.color = 'red';
        document.getElementById('emaiMsg').style.margin = '0'
    }
    else{
        document.getElementById('mobMsg').innerHTML = '';
        document.getElementById('emaiMsg').innerHTML = '';
        return validEmail.test(emailId.value),validMob.test(mobNo.value); 
    }
   
    // return validMob.test(mobNo.value); 
}

//2) create a text box , get value from the same. do the validation for emailid  & show result in paragraph ( below textbox)



//4) generate an array with value [10,20,30,40,50,60,70] and do the sum using reduce() function of javascript

var arrayVal = [10,20,30,40,50,60,70]; 
var initalVal = 0;
var sumArray = arrayVal.reduce(
    function(initalVal, currentVal){
        return initalVal+currentVal;
    }    
);

// console.log(arrayVal);
// console.log('Sum of Array : ' + sumArray);

console.log(document.getElementsByClassName('class1'));
document.getElementsByClassName('class1')[0].innerHTML = sumArray;
document.getElementsByClassName('class1')[0].style.color = 'green';
document.getElementsByClassName('class1')[0].style.fontWeight = 'bold';

//5) generate an array with value [1,2,3,4] and show the result as new array=> [1,4,9,16] using for in loop , forEach loop and map() function 

var array2 = [1,2,3,4];
console.log(array2);
// for(var i=0; i < array2.length; i++){
//     console.log(i, array2[i]);
// }

for(let value in array2){
    // Math.sqrt(array2(val))
    // var arrw = array2(val);
    let number = array2[value];
    console.log(number);
    console.log(number*number + ' squre number type 1 using multiply by same number');
    console.log(Math.pow(number,2) + ' squre number type 2 using math pow');
}

// 6) generate an array with value [1,4,6,8,12,11,13] and show the resuke as new array=> [1,11,14] using filter() function of javascript
var array3 = [1,4,6,8,12,11,13];
console.log(array3);
for(let value in array3){
    
    console.log(value, array3[value]);
}