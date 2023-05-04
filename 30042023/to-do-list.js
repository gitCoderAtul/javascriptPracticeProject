 //Array Preparartion
 var taskList = [
    "Workout",
    "BathTime",
    "Breakfast",
    "Meeting"
 ]

 console.log(taskList);

 // for of
// for(value of taskList){
//     console.log(value);
// }

 //for in
// for(let taskVal in taskList){
//     console.log(taskVal, typeof taskVal, taskList[taskVal]);
// }
// console.log(taskVal);

 //foreach

 console.log(document.querySelector('#all-task'));
 
 function listDownValue(){
    
    //foreach method
    taskList.forEach((val, index)=>{
        console.log(val);

        //DOM Selector Method
        var ulTag = document.querySelector('#all-task');
        var liTag = document.createElement('li');

        //DOM Properties
        liTag.className ='nav-item p-3 border-bottom';
        
        var span1 = document.createElement('span');
        
        //DOM Properties
        span1.innerHTML = val;
        
        var span2 = document.createElement('span');
        span2.innerHTML = 'x';
        span2.className = 'abc';
        // console.log(liTag); 
        
        //DOM Method (object -> object )
        liTag.append(span1);
        
        //DOM event listener
        span2.addEventListener('click', deleteTask);
        liTag.append(span2);
        ulTag.append(liTag); 
        
         }); 
 }
 listDownValue();

 //DOM Event Handler
document.querySelector('#btn-add').onclick = function(){
    console.log('add');
    console.log(document.getElementById('txt').value);
    var textBoxValue = document.getElementById('txt');

  //Array Method
    taskList.unshift(textBoxValue.value);
    console.log(taskList);
    document.querySelector('#all-task').innerHTML = '';

    listDownValue();
    // console.log(textBoxValue);
    textBoxValue.value = '';

}

 

 function deleteTask(){
// console.log('delete');

console.log(this);
 //DOM Traverse property
    // var ans = confirm("Do you wanna Delete?");
    // if(ans){
    //     this.parentNode.remove();
    // }

// console.log(this.parentElement);

//DOM Traverse or Navigation Property
console.log(this.previousElementSibling);
 console.log(this.previousElementSibling.innerText);
// console.log( taskList.indexOf(this.previousElementSibling.innerText));

//Array Method indexOf()
var indexNo = taskList.indexOf(this.previousElementSibling.innerText);
console.log(indexNo);

//Array Methods
taskList.splice(indexNo, 1);
console.log(taskList);

 //DOM Traverse or Navigation Property -- parentNode

// console.log(this.parentNode);
this.parentNode.remove();
 
 }
 
  
