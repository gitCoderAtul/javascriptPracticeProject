/*
 var roi= 7.10;
    var Interest = (opening_balance+amount) * roi/100
    var closing_balance = (opening_balance+amount+Interest)

    after every year =>
    opening_balance = closing_balance;


    year  opening_balance        amount    Interest  closing_balance
    --------------------------------------------------------------------------------
    1      0                     150000    10650      160650
    2      160650                150000    22056      332706
*/
document.querySelector('#btn').onclick = function(){

    document.getElementById('resultData').innerHTML = '';

    var[txt1,txt2,txt3] = document.querySelectorAll('#record');
    // console.log(txt1);
    var amount = parseFloat(txt1.value);
    var years = parseInt(txt2.value);
    var roi = parseFloat(txt3.value);

    console.log(amount , years , roi);

    console.log(typeof document.getElementById('resultData'));
    console.log(document.getElementById('resultData'));

    var i=1;
    var opening_balance=0;
    
    while(i<=years){
        var Interest = (opening_balance+amount) * roi/100;
        Interest = Math.round(Interest);

        var closing_balance = (opening_balance+amount+Interest);

        console.log(i,opening_balance,amount,Interest,closing_balance);

        //DOM Node Manipulate

        var tdTag1 = document.createElement('td');
        console.log(tdTag1, typeof tdTag1);
        tdTag1.innerText = i;

        var tdTag2 = document.createElement('td');
        console.log(tdTag2, typeof tdTag1);
        tdTag2.innerText = opening_balance;

        var tdTag3 = document.createElement('td');
        tdTag3.innerText = amount;
        var tdTag4 = document.createElement('td');
        tdTag4.innerText = Interest;
        var tdTag5 = document.createElement('td');
        tdTag5.innerText = closing_balance;


        var trTag = document.createElement('tr');
        console.log(trTag , typeof trTag);

        trTag.id = 'hello-'+i;

        trTag.append(tdTag1);
        trTag.append(tdTag2);
        trTag.append(tdTag3);
        trTag.append(tdTag4);
        trTag.append(tdTag5);

        // document.getElementById('resultData').innerHTML = trTag;
        document.getElementById('resultData').append(trTag);

        i++;
        opening_balance = closing_balance;
    }

    console.log(closing_balance);
}