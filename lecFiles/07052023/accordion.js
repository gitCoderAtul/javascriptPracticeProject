
function hideAllParagraph(){
    console.log('Func Call');
    var allP = document.getElementsByTagName('p');
    console.log(allP);
    for(val of allP){
        console.log(val);
        val.style.display = 'none';
    }
}
hideAllParagraph();

// console.log( document.querySelectorAll("h2") );
var h2Tags = document.querySelectorAll("h2"); //DOM Selector Method

for(val of h2Tags){
    console.log(val);
    //DOM Event Listener
    val.addEventListener("click" , myfunction);
}

function myfunction(){
    // console.log('hello');
    // console.log(this);
    //DOM Traverse Property
    // console.log(this.nextElementSibling);
    var ans = this.nextElementSibling.style.display;
    // console.log(ans);
    if(ans == "none"){
        hideAllParagraph();
        this.nextElementSibling.style.display = "block";
    }
    else{
        hideAllParagraph();
        this.nextElementSibling.style.display = "none";
    }
}
