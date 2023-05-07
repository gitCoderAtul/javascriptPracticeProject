function hideAllParagraph(){
    console.log("function call");
    var allP = document.getElementsByTagName('p');
    console.log(allP);

    for(val of allP){
        console.log(val);
        val.style.display = 'none';
    }
}
hideAllParagraph();
// queryselect
// console.log(document.querySelector('h2'));

var h2Tag = document.querySelectorAll('h2');

for(val of h2Tag){
    console.log(val);
    //dom lister - with anoynomous funtion
     val.addEventListener("click", myfunction);
}

function myfunction(){
    console.log('myfnction');
    // console.log(this);
    // console.log(this.nextElementSibling);
    
    //concept one
    // hideAllParagraph();
    // this.nextElementSibling.style.display = 'block';

    //conept two
    var ans = this.nextElementSibling.style.display;
    console.log(ans);

    if(ans == 'none'){
        hideAllParagraph();
        this.nextElementSibling.style.display = 'block'
    }else{
        hideAllParagraph();
        this.nextElementSibling.style.display = 'none   '
    }
    

}