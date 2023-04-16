
console.log(document);
console.log(document.querySelector('button'));

document.querySelector('button').onclick = myfunc;

function myfunc(){
    console.log('test');
    // console.log(document);
    console.log(document.getElementsByName('xyz'));
    console.log(document.getElementsByName('xyz')[0].value);

    //array distruction
    var [txt1,txt2,txt3] = document.getElementsByName('xyz');
    // console.log(txt1, txt1.value);
    // console.log(txt1, typeof txt1);

//convert string to number using + operator or parseInt....
    var amount = +txt1.value;
    var tenure = +txt2.value;
    var Interest = +txt3.value;

    // console.log(amount,tenure,Interest);
    var p = amount;
    var R = tenure * 10;
    var N = Interest;

    var EMI = p * R * (1+R)**N / ( (1+R**N-1) );
    console.log(EMI);


}


// document.getElementsByName('xyz')
