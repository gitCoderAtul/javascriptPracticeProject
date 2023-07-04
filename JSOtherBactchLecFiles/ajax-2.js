//event handler

//forEach
// var arr = [{name:'zyz',age:20},{name:'test',age:30},{name:'mm',age:10}]
//function as a first class function
// arr.forEach(function(a1,a2){
//     // console.log(Math.random());
//     console.log(a1,a2);
// })

// Event handler , function as a first class function
document.getElementById('btn').onclick = function(){

    document.querySelector('.row').innerHTML = '';

    // console.log(document.getElementsByName('xyz'));
    var catname = document.getElementsByName('xyz')[0].value;
    // console.log(catname);
    if(catname!=''){
        var apiPath=`https://fakestoreapi.com/products/category/${catname}`;
        // console.log(apiPath);

        var xmlhttp = new XMLHttpRequest();
        console.log(xmlhttp.readyState);

        xmlhttp.onreadystatechange = function(){


            console.log(xmlhttp.readyState , xmlhttp.status);
            if(xmlhttp.readyState==4 && xmlhttp.status==200){
                // console.log(xmlhttp.responseText);
                var result = JSON.parse(xmlhttp.responseText);
                console.log(result);

                // if(result.length>0){
                //     result.forEach(function(a1){
                //         console.log(a1);
                //     })
                // }

                //short circuit operator
                result.length>0 && result.forEach(function(a1){
                    console.log(a1);
                    var{title,price,image} = a1;

                    var divTag = document.createElement('div');
                    divTag.className = 'col-xl-3 text-center';

                    var imgTag = document.createElement('img');
                    imgTag.className = 'img-fluid';
                    imgTag.src = image;

                    var h2Tag = document.createElement('h2');
                    h2Tag.innerText = price;
                    var pTag = document.createElement('p');
                    pTag.innerText = title;

                    divTag.append(imgTag);
                    divTag.append(h2Tag);
                    divTag.append(pTag);

                    document.querySelector('.row').append(divTag);
                })
            }
        }

        xmlhttp.open('GET' , apiPath); //1
        xmlhttp.send(null); //2
    }
}