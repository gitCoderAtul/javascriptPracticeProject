function fetchDataFromApi(apiPath, callback){
    console.log(apiPath);
    var xmlhttp = new XMLHttpRequest();

    // console.log(xmlhttp);
    // console.log(xmlhttp.readyState, xmlhttp.status);

    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState, xmlhttp.status);
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            console.log(xmlhttp.responseText);
            console.log(typeof callback);
          
            var ansApi = JSON.parse(xmlhttp.responseText)
            // console.log(ansApi);
             callback(ansApi);

        }
    }
    xmlhttp.open("GET", apiPath, true);
    xmlhttp.send();
}

fetchDataFromApi('https://fakestoreapi.com/products/categories', (result)=>{
    console.log("called1 result 1");
    console.log(result);

    result && result.length>0 && result.forEach(val => {
        console.log(val);
        var liTag = document.createElement('li');
        liTag.innerHTML = val;
        liTag.style.cursor = 'pointer';
        

       liTag.addEventListener('click',filterData);
        document.querySelector('#cat').append(liTag);
    });
});

fetchDataFromApi('https://fakestoreapi.com/products', (result)=>{
    console.log('called2 result 2');
    console.log(result);

    result && result.length > 0 && result.forEach(obj => {
        console.log(obj);
        var divTag = document.createElement('div');
        divTag.className = 'col-3 text-center';

        var imageTag = document.createElement('img');
        imageTag.className = 'img-fluid'
        imageTag.src = obj.image;


        var h2Tag = document.createElement('h2');
        h2Tag.innerHTML = obj.price;

        var pTag = document.createElement('p');
        pTag.innerHTML = obj.title;

        divTag.append(imageTag, h2Tag, pTag);
        document.querySelector('#finalDiv').append(divTag);


    }); 
    
});

function filterData(){
    console.log(this);
    console.log(this.innerHTML);
   var apiPath = `https://fakestoreapi.com/products/category/${this.innerText}`;
   console.log(apiPath);

   fetchDataFromApi(apiPath, (result)=>{
    // console.log(result);

    document.querySelector('#finalDiv').innerHTML = '';
    result && result.length >0 && result.forEach(obj =>{
        // console.log('check inside',obj);

        var divTag = document.createElement('div');
        divTag.className = 'col-3 text-center';

        var imageTag = document.createElement('img');
        imageTag.className = 'img-fluid';
        imageTag.src = obj.image;

        var h2Tag = document.createElement('h2');
        h2Tag.innerHTML = obj.price;

        var pTag = document.createElement('p');
        pTag.innerHTML = obj.title;

        divTag.append(imageTag, h2Tag, pTag);
        document.querySelector('#finalDiv').append(divTag);

    });

   });
}