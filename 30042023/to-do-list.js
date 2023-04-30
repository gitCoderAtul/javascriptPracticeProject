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


 taskList.forEach((val, index)=>{
console.log(val);
var ulTag = document.querySelector('#all-task');
var liTag = document.createElement('li');
liTag.className ='nav-item p-3 border-bottom';

var span1 = document.createElement('span');
span1.innerHTML = val;

var span2 = document.createElement('span');
span2.innerHTML = 'x';
span2.className = 'abc';
// console.log(liTag);

ulTag.append(liTag);
liTag.append(span1);
liTag.append(span2);
  
span2.addEventListener('click', deleteTask);

 });
 
document.querySelector('#btn-add').onclick = function(){

    console.log('add');
    

}

 function listDownValue(){



 }

 function deleteTask(){
console.log('delete');
console.log(this);
console.log(this.parentElement);
 }


 function addTask() {
    


 }
