//
// apiPath
// XMLHttpRequest;
// open('method', apiPath)
// onReadyStateFunction()
// send()
// readyState 0 1 2 3 4
// status 200 404

// var txtSearch = document.getElementById('searchCategory').value;
// console.log('check value', txtSearch.value);

// DOM event listerner
// document.querySelector('#btn').addEventListener('click', function(){
//     console.log('check');
// });

// DOM event handler
document.querySelector('#btn').onclick = function(){ 
var txtSearch = document.getElementById('searchCategory').value; 
console.log(document.querySelector('#allProducts'));
    // console.log('check value', txtSearch);
    // console.log('check');

    var apiPath = `https://fakestoreapi.com/products/category/${txtSearch}`;

    var xmlhttp = new XMLHttpRequest;

    console.log(xmlhttp.readyState, xmlhttp.status);
    xmlhttp.open('GET', apiPath);

    xmlhttp.onreadystatechange = function(){
        
        console.log(xmlhttp.readyState, xmlhttp.status);

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200 ){
        console.log(typeof xmlhttp.responseText);
        console.log(xmlhttp.responseText);

        var ans = JSON.parse(xmlhttp.responseText);        
        console.log(ans); 

        // if( txtSearch == "electronics" || txtSearch == "jewelery" || txtSearch == "men's clothing" || txtSearch == "women's clothing"){ 
             ans && ans.length > 0 && ans.forEach(obj => {

                console.log(obj);
                console.log('ok');
    
                var{image, price, title} = obj;
    
                var divTag = document.createElement('div');
                divTag.className = 'col-3 text-center';
                console.log('test div ',divTag);
    
                var imgTag = document.createElement('img');
                imgTag.setAttribute('src', image);            
                imgTag.className = 'img-fluid';
    
                var pTag = document.createElement('p');
                pTag.innerHTML = price;
    
                var h2Tag = document.createElement('p');
                h2Tag.innerHTML = title;
    
                divTag.append(imgTag);
                divTag.append(h2Tag);
                divTag.append(pTag);
                document.querySelector('#allProducts').append(divTag); 

                document.getElementById('searchCategory').value = '';
                document.getElementById('msg').innerHTML = ''
            });

        // }   
      
      }
      else{
        document.getElementById('msg').innerHTML = 'Please enter category'
        console.log('enter value');
      };
     
    } 
    xmlhttp.send();

}; 





        //  if( txtSearch !== "electronics" || txtSearch !== "jewelery" || txtSearch !== "men's clothing" || txtSearch !== "women's clothing"){ 
         
        //     if(ans.length > 0){
               
        //         ans.forEach(obj => {

        //             console.log(obj);
        //             console.log('ok');
        
        //             var{image, price, title} = obj;
        
        //             var divTag = document.createElement('div');
        //             divTag.className = 'col-3 text-center';
        //             console.log('test div ',divTag);
        
        //             var imgTag = document.createElement('img');
        //             imgTag.setAttribute('src', image);            
        //             imgTag.className = 'img-fluid';
        
        //             var pTag = document.createElement('p');
        //             pTag.innerHTML = price;
        
        //             var h2Tag = document.createElement('p');
        //             h2Tag.innerHTML = title;
        
        //             divTag.append(imgTag);
        //             divTag.append(h2Tag);
        //             divTag.append(pTag);
        //             document.querySelector('#allProducts').append(divTag); 
    
        //             console.log(document.querySelector('#allProducts').append(divTag));
        //             document.getElementById('searchCategory').value = '';
        //         });

        //     }else{

        //     }
        // }else{
        //     document.getElementById('msg').innerHTML = 'Please enter category'
        //     console.log('enter value');
        //  document.querySelector('#allProducts').innerHTML = '';

        // }