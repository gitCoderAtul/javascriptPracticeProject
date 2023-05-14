// https://fakestoreapi.com/products

//DOM event handler
document.querySelector("#btn").onclick = function(){
     console.log('click');

     var apiPath = 'https://fakestoreapi.com/products';

     //check xhr is exist or not for AJax operation
     var xmlhttp = new XMLHttpRequest;
     console.log(typeof xmlhttp, xmlhttp );

     // check readystate initial value
     console.log(xmlhttp.readyState, xmlhttp.status);

     xmlhttp.open("GET",apiPath, true);

     //this is for checking readystate values
    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState, xmlhttp.status);

        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log(typeof xmlhttp.responseText);
            console.log(xmlhttp.responseText);

            var ans = JSON.parse(xmlhttp.responseText);
            console.log(ans);

            //short circuit operator
            //DOM Manipulate

            ans && ans.length > 0 && ans.forEach(obj => {
                console.log(obj);

                //distruction
                var{image, price, title} = obj;

                var divTag = document.createElement('div');
                divTag.className = 'col-3 text-center';
                console.log(divTag);

                var imgTag = document.createElement('img');
                // imgTag.src = image;
                imgTag.className = 'img-fluid img-thumbnail';
                imgTag.setAttribute('src', image);
                console.log(imgTag);

                var h2Tag = document.createElement('h2');
                h2Tag.innerHTML = title
                console.log(h2Tag);

                var pTag = document.createElement('p');
                pTag.innerHTML = price

                divTag.append(imgTag);
                divTag.append(h2Tag);
                divTag.append(pTag);
                document.querySelector('#allProducts').append(divTag)

            });

        }
     
    }

    //send request
    xmlhttp.send();

}