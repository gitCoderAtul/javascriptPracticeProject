// DOM Event Handler
document.querySelector("#btn").onclick = function(){
    // alert()
    var apiPath = 'https://fakestoreapi.com/products';

    //Check XHR is Exist or not for AJax Operation
    var xmlhttp = new XMLHttpRequest();
    console.log(typeof xmlhttp , xmlhttp);

    //check readyState initial Value;
    console.log(xmlhttp.readyState , xmlhttp.status); //0 ==> no request initialized by user

    //this is for checking readyState values
    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState , xmlhttp.status);

        if(xmlhttp.readyState==4 && xmlhttp.status==200){

            console.log(typeof xmlhttp.responseText);
            console.log(xmlhttp.responseText);

            var ans = JSON.parse(xmlhttp.responseText);
            console.log(ans);

            //short circuit operator
            //DOM Manipulate
            ans && ans.length>0 && ans.forEach(obj => {
                console.log(obj);

                var{image,price,title} = obj;

                var divTag= document.createElement('div');
                divTag.className ='col-3 text-center';
                console.log(divTag);

                var imgTag = document.createElement('img');
                imgTag.className = 'img-fluid';
                imgTag.setAttribute('src' , image);
                console.log(imgTag);

                var h2Tag = document.createElement('h2');
                h2Tag.innerHTML = price;

                var pTag = document.createElement('p');
                pTag.innerHTML = title;

                divTag.append(imgTag);
                divTag.append(h2Tag);
                divTag.append(pTag);

                document.querySelector("#allProducts").append(divTag)
            });
            //DOM Manipulate
            
        }
    }

    //create a connection with api path
    xmlhttp.open("GET" , apiPath , true); // ==> 1

    //send a request to apipath
    xmlhttp.send(null); // ==> 2
}