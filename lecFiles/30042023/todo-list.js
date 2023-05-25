// alert()
//Array Preparartion
var allTask = [
    "Design WebSite",
    "Play Cricket",
    "Watch Movies",
    "9 to 6 Daily Job",
    "Reading Books"
];


// console.log(allTask);

//for of loop

// for(val of allTask){
//     console.log(val);
// }

// for in loop

// for(let i in allTask){
//     console.log(i , allTask[i]);
// }
// console.log('outside loop',i);

//forEach();


// console.log(document);
console.log(document.querySelector('#all_task'));
// console.log(typeof document.querySelector('#all_task'));

function listDownAllValues(){

    //DOM Selector Method
    var ulTag = document.querySelector('#all_task');

    //forEach loop
    allTask.forEach((values , i , selfarr)=>{
        // console.log(values , i , selfarr);

        //DOM Method
        var liElement = document.createElement('li');
        // console.log(liElement , typeof liElement);

        // DOM Properties
        liElement.className = "nav-item border p-3"
        // ulTag.innerHTML = liElement;
        // liElement.innerHTML = values;

        var span1 = document.createElement('span');

        //DOM Property
        span1.innerHTML =values; 

        //DOM Method ( object->object)
        liElement.append(span1);

        var span2 = document.createElement('span');
        span2.innerHTML = "X";
        span2.className = 'xyz'
        //DOM event listener
        span2.addEventListener('click', deleteData);
        liElement.append(span2);

        ulTag.append(liElement);
    })

}
listDownAllValues();

function deleteData(){
    console.log(this);
    //DOM Traverse property
    // var ans = confirm("Do you wanna Delete?");
    // if(ans){
    //     this.parentNode.remove();
    // }

    //DOM Traverse or Navigation Property
    console.log(this.previousElementSibling);
    console.log(this.previousElementSibling.innerText);

    //Array Method indexOf()
    var indexNo = allTask.indexOf(this.previousElementSibling.innerText)
    console.log(indexNo);

    //Array Methods
    allTask.splice(indexNo,1);
    console.log(allTask);

    //DOM Traverse or Navigation Property -- parentNode
    this.parentNode.remove();
}


//DOM Event Handler
document.getElementById('btn-add').onclick=function(){
    // alert();
    var textBox = document.getElementById('txt');
    console.log(textBox);
    console.log(textBox.value);

    // console.log(allTask);
    //Array Method
    allTask.unshift(textBox.value);
    // allTask.push(textBox.value);
    console.log(allTask);
    document.querySelector('#all_task').innerHTML ='';
    listDownAllValues()
    textBox.value ='';
}