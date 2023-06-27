console.log(axios);
console.log(axios.get);

// var rec = axios.get('https://api.nobelprize.org/2.1/laureates?_ga=2.231527580.2070001567.1686736021-497096564.1686736019');

// rec.then((val)=>{
//     console.log(val.data);
//     var values = val.data.laureates;
//     console.log(values);

//     values && values.length > 0 && values.forEach(result=>{
//         console.log(result);
//         var {birth,fullName}=result;
//         //  fullName = fullName.en; 
//         //  console.log(fullName);
//         var birth = birth.place; 
        
//         console.log(birth);
        

//     })
// })
// .catch((err)=>{

// })

var rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');


console.log(rec);
rec.then((val)=>{
    // console.log(val.data.drinks);

    var result = val.data.drinks; 
    result && result.length > 0 && result.forEach(obj => {
        console.log(obj);
        var {idDrink,strDrink,strCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb} = obj;
        var drinkId = idDrink;
        var imgTag = document.createElement('img');
        imgTag.className = 'img-fluid';
        imgTag.setAttribute('src', strDrinkThumb);

        var divTag = document.createElement('div');  
        divTag.classList = 'col-md-6';
        divTag.innerHTML = ` <div class="drink-section"> 
        <div class="drink-image"> <img src="${strDrinkThumb}"> </div>
        <div class="drink-details"> <h1>${strCategory}</h1> 
            <p> <strong> Drink Type : </strong> <span>${strCategory}</span> </p>
            <p> <strong> Type Of Drink :</strong> <span>${strAlcoholic} </span> </p>
            <p> <strong> Instruction : </strong></p>
            <p>${strInstructions}</p>
            <p style="color:blue"> <a id="popup" style="cursor:pointer;">View Details & Ingredient</a> </p>
        </div>
        </div> `   

        // document.getElementById('popup').addEventListener('click', function(){
        //     var popData = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);

        //     console.log(popData);
        // });
        

        document.getElementById('drinkDetail').append(divTag);
    });

}).catch((err)=>{
    console.log(err);
})

// function popupData(drinkId){
    
//     console.log(popData);
// }
  
document.querySelector('#listAlc li:first-child').addEventListener('click', filterAlcData);

function filterAlcData(){ 
    document.getElementById('drinkDetail').innerHTML = '';
    
    let recAlc = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    recAlc.then((val)=>{
        console.log(val);
        console.log(val.data.drinks);
        result = val.data.drinks;

        result && result.length > 0 && result.forEach(obj=>{
            console.log(obj);
            viewData(obj);
            
            var {strDrink,strDrinkThumb} = obj;
            var divTag = document.createElement('div');  
            divTag.classList = 'col-md-3';

            div1Tag = document.createElement('div');
            div1Tag.classList = 'drink-section1';

            imgTag = document.createElement('img');
            imgTag.setAttribute('src', strDrinkThumb);
            imgTag.classList = 'img-fluid';

            h1Tag = document.createElement('h1');
            h1Tag.innerHTML = strDrink;
            h1Tag.className = 'drink-title';
            console.log(h1Tag); 

            // ---------------------*------------------------
            // divTag.innerHTML = ` <div class="drink-section"> 
            // <div> <img src="${strDrinkThumb}"> </div>
            // <div> <h1>${strDrink}</h1>  
            // </div>
            // </div> `    
            // ---------------------*------------------------ 

            divTag.append(div1Tag);
            div1Tag.append(imgTag);
            div1Tag.append(h1Tag);
            document.getElementById('drinkDetail').append(divTag);

        })

    }).catch((err)=>{
            console.log(err);
    })
     
}

document.querySelector('#listAlc li:last-child').addEventListener('click', filterNonAlcData);

function filterNonAlcData(){
    document.getElementById('drinkDetail').innerHTML = '';

    var rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    console.log(rec);

    rec.then((val)=>{
        console.log(val);
        console.log(val.data.drinks);
        var result = val.data.drinks;
   
        result && result.length > 0 && result.forEach((obj)=>{
            console.log(obj);
           viewData(obj);
          
        });
    }).catch((err)=>{
        console.log(err);
    })
}


 

// listCat
document.querySelector('#listCat li:nth-child(1)').addEventListener('click',filterListOrdinary);

function filterListOrdinary(){
    
    var rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');

    console.log(rec);
    document.getElementById('drinkDetail').innerHTML = '';
    rec.then((val)=>{
        console.log('value',val);
        console.log(val.data.drinks);
        result = val.data.drinks;

        result && result.length > 0 && result.forEach((obj)=>{
            console.log('data', obj);
            viewData(obj);
        });
        
    }).catch((err)=>{
        console.log(err);
    })

}

document.querySelector('#listCat li:nth-child(2)').addEventListener('click', filterListCocktail);

function filterListCocktail(){
    let rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');

    console.log(rec);
    rec.then((val)=>{
        console.log(val);
        var result = val.data.drinks;
        document.getElementById('drinkDetail').innerHTML ='';

        result && result.length > 0 && result.forEach((obj)=>{
            console.log(obj);
            viewData(obj);
        })


    }).catch((err)=>{
        console.log(err);
    })
}

// list glass
document.querySelector('#listGls li').addEventListener('click', filterListGlassType);

function filterListGlassType(){
    let rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');

    console.log(rec);
    rec.then((val)=>{
        console.log(val);
        result = val.data.drinks;
        console.log(result);
        document.getElementById('drinkDetail').innerHTML = '';
        result && result.length > 0 && result.forEach((obj)=>{
         console.log(obj);

         viewData(obj);
          
        })
        
    }).catch((err)=>{
        console.log(err);
    })
}

// listAll
document.querySelector('#listAll li:nth-child(1)').addEventListener('click', filterListCat);

function filterListCat(){
    let rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    console.log(rec);
    rec.then((val)=>{
        console.log(val);
        result = val.data.drinks;

          document.getElementById('drinkDetail').innerHTML = '';
         viewListCat(result);

    }).catch((err)=>{
        console.log(err);
    })
}


document.querySelector('#listAll li:nth-child(2)').addEventListener('click',filterListGlass);

function filterListGlass(){
    let rec = axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
    
    rec.then((val)=>{
        
        console.log(val);
        result = val.data.drinks;
        document.getElementById('drinkDetail').innerHTML = '';

        viewList(result);

       
        
    }).catch((err)=>{
        console.log(err);
    })
}

//www.thecocktaildb.com/api/json/v1/1/list.php?g=list
function viewList(result){

    divTag = document.createElement('div');
    divTag.className = 'col-md-6';

    div1Tag = document.createElement('div');
    div1Tag.className = 'list-cat';

    tblTag = document.createElement('table');
    tblTag.className = 'table table-bordered table-hover';

    theadTag = document.createElement('thead');
    tbodyTag = document.createElement('tbody');
    
    trTag= document.createElement('tr'); 

    result && result.length > 0 && result.forEach((obj,key)=>{
        console.log(key,obj);

        var {strGlass} = obj;
        trTag.innerHTML = `
        <th>Sr No</th>
        <th>Glass </th>
        `
        tr1Tag = document.createElement('tr');
        tr1Tag.innerHTML = `
            <td>${key+1}</td>
            <td>${strGlass}</td>
        `

        tblTag.append(theadTag);
        theadTag.append(trTag);
        tblTag.append(tbodyTag);
        tbodyTag.append(tr1Tag);
        div1Tag.append(tblTag);
        divTag.append(div1Tag);
        document.getElementById('drinkDetail').append(divTag);
    })
}

function viewListCat(result){

    divTag = document.createElement('div');
    divTag.className = 'col-md-6';

    div1Tag = document.createElement('div');
    div1Tag.className = 'list-cat';

    tblTag = document.createElement('table');
    tblTag.className = 'table table-bordered table-hover';

    theadTag = document.createElement('thead');
    tbodyTag = document.createElement('tbody');
    
    trTag= document.createElement('tr'); 

    result && result.length > 0 && result.forEach((obj,key)=>{
        console.log(key,obj);

        var {strCategory} = obj;
        trTag.innerHTML = `
        <th>Sr No</th>
        <th>Category </th>
        `
        tr1Tag = document.createElement('tr');
        tr1Tag.innerHTML = `
            <td>${key+1}</td>
            <td>${strCategory}</td>
        `

        tblTag.append(theadTag);
        theadTag.append(trTag);
        tblTag.append(tbodyTag);
        tbodyTag.append(tr1Tag);
        div1Tag.append(tblTag);
        divTag.append(div1Tag);
        document.getElementById('drinkDetail').append(divTag);
    })
}

function viewData(obj){

    console.log(obj);
    var {strDrink,strDrinkThumb} = obj;

            var divTag = document.createElement('div');  
            divTag.classList = 'col-md-3';

            div1Tag = document.createElement('div');
            div1Tag.classList = 'drink-section1';

            imgTag = document.createElement('img');
            imgTag.setAttribute('src', strDrinkThumb);
            imgTag.classList = 'img-fluid';

            h1Tag = document.createElement('h1');
            h1Tag.innerHTML = strDrink;
            h1Tag.className = 'drink-title';
            console.log(h1Tag); 

            // divTag.innerHTML = ` <div class="drink-section"> 
            // <div> <img src="${strDrinkThumb}"> </div>
            // <div> <h1>${strDrink}</h1>  
            // </div>
            // </div> `    
            divTag.append(div1Tag);
            div1Tag.append(imgTag);
            div1Tag.append(h1Tag);
            document.getElementById('drinkDetail').append(divTag);
};

function showModel(){
    console.log('check');
  
    document.querySelector('#modalPopUp').style.display = 'block';
}
function hideModel(){
    console.log('check');
    document.querySelector('#modalPopUp').style.display = 'none';
}



//filter glass alternative code

/* divTag = document.createElement('div');
divTag.className = 'col-md-6'

div1Tag = document.createElement('div');
div1Tag.className = 'list-cat'

tblTag = document.createElement('table');
tblTag.className = 'table table-bordered table-hover';

theadTag = document.createElement('thead');
tbodyTag = document.createElement('tbody');

tr1Tag = document.createElement('tr');
th1Tag = document.createElement('th');

result && result.length > 0 && result.forEach((obj,key)=>{
console.log(key,obj);
var {strCategory} = obj;


trTag = document.createElement('tr'); 
thTag = document.createElement('th'); 
tdTag = document.createElement('td');
td1Tag = document.createElement('td');

//             tbodyTag.append(`<tr id="i${++no}">
//                 <td>${no}</td>
//                 <td>${strCategory}</td>
//             </tr>`); 
// console.log(tbodyTag);
// trTag.innerHTML = `
// <td>${no}</td>
// <td>${strCategory}</td>
// trTag.innerHTML=` 
// <td>${no}</td>
// <td>${strCategory}</td>
// `; 

trTag.id =`divId${key+1}`
tr1Tag.innerHTML = `
<th>Sr No.</th>
<th>Category</th>
`;

//type 1
// tdTag.innerHTML = `${key+1}`;
// td1Tag.innerHTML = strCategory; 
// console.log(tdTag);
// console.log(trTag);

//type2
trTag.innerHTML =`
<td>${key+1}</td>
<td>${strCategory}</td>
`

// divTag.innerHTML = `
// <div class="col-md-12">
//     <div class="list-cat">
//         <table class="table table-bordered table-hover">
//             <tr ><td>${i}</td><td>${strCategory}</td></tr>
//         </table>
//     </div>
//  </div>   
// `;

// tdTag.c = strCategory; 
 
divTag.append(div1Tag);
div1Tag.append(tblTag);
tblTag.append(theadTag);
theadTag.append(tr1Tag);
tblTag.append(tbodyTag); 
tbodyTag.append(trTag);

// tr1Tag.append(thTag);
// tr1Tag.append(th1Tag);

//type1
// trTag.append(tdTag);
// trTag.append(td1Tag); 

document.getElementById('drinkDetail').append(divTag);
});

*/