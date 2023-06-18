var rec = new Promise((res,rej)=>{
    var xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp);

    // function fetchdata(apiPath,callback){
    //     var xmlhttp = new XMLHttpRequest();
    //     xmlhttp.open('GET',apiPath)
    //     xmlhttp.onreadystatechange = function(){

    //     }
    // }
    xmlhttp.open('GET','https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.status,xmlhttp.readyState);
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            console.log(xmlhttp.responseText);
            var rec =  JSON.parse( xmlhttp.responseText )
            res(rec);

        }else if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
            rej(xmlhttp.statusText);
        }
    }
  
    xmlhttp.send();
    console.log(xmlhttp.status,xmlhttp.readyState);
});

rec.then((result)=>{
    
    console.log('res'); console.log(result);
    console.log(typeof result);
 
     result = result.drinks;
    result && result.length >0 && result.forEach(obj=>{
        console.log(obj);
        var {strDrink,strCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb} = obj;
        var imgTag = document.createElement('img');
        imgTag.className = 'img-fluid';
        imgTag.setAttribute('src', strDrinkThumb);

        // var h1Tag = document.createElement('h1');
        // h1Tag.style.fontSize = '22px';
        // h1Tag.style.textAlign = 'center';
        // h1Tag.innerHTML = strDrink;

        // var p1Tag = document.createElement('p');
        
        // p1Tag.innerHTML = `<span> Drink Type : </span> <span>${strCategory}</span>`;

        // var p2Tag = document.createElement('p');
        // p2Tag.innerHTML = `<span> Type Of Drink :<span> <span>${strAlcoholic} </span>`;

        // var p3Tag = document.createElement('p');
        // p3Tag.innerHTML = strInstructions;

        // var divTag = document.createElement('div');  
        // divTag.classList = 'col-md-3';   

        var divTag = document.createElement('div');  
        divTag.classList = 'col-md-6';
        divTag.innerHTML = ` <div class="drink-section"> 
        <div class="drink-image"> <img src="${strDrinkThumb}"> </div>
        <div class="drink-details"> <h1>${strCategory}</h1> 
            <p> <strong> Drink Type : </strong> <span>${strCategory}</span> </p>
            <p> <strong> Type Of Drink :</strong> <span>${strAlcoholic} </span> </p>
            <p> <strong> Instruction : </strong></p>
            <p>${strInstructions}</p>
            <p> <a id="popup" style="cursor:pointer;">View Details & Ingredient</a> </p>
        </div>
        </div> `   
 
        // divTag.append(imgTag);
        // divTag.append(h1Tag);
        // divTag.append(p1Tag);
        // divTag.append(p2Tag);
        // divTag.append(p3Tag);
        
        document.getElementById('drinkDetail').append(divTag);

       document.getElementById('popup').onclick = showModel;
        
    });
      

}).catch((err)=>{
    console.log('rej'); console.log(err);
});

function modelDiv(){
    // console.log();

    var divTag = document.createElement('div');
    divTag.className('details');
    divTag.innerHTML = `
        <div class="header">
            <h2> Drink Name ${strDrink} </h2>
            <p>Ingredient</p>
            <ul>
                    
            <li>
        </div>
    `
}

function showModel(){
    console.log('check');
    document.querySelector('#modalPopUp').style.display = 'block';
}
function hideModel(){
    console.log('check');
    document.querySelector('#modalPopUp').style.display = 'none';
}