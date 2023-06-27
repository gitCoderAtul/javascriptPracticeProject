import Cart from './Cart.js';

(()=>{
    // console.log('IIFE');
    var objCart = new Cart();
    var result = objCart.fetchRecordFromCart();
    if(result.length > 0){
        // console.log("result");
        // console.log(result);
        result.map(obj=>{
            // console.log(obj);
            var{ productName, productPrice, productPath} = obj;
            var divTag = document.createElement('div');
            divTag.className = 'col-xl-3 text-center';

            var imgTag =  document.createElement('img');
            imgTag.src =productPath;
            imgTag.className = 'img-fluid'
            
            var h2Tag =  document.createElement('h2');
            h2Tag.innerHTML =productPrice;

            var pTag =  document.createElement('p');
            pTag.innerHTML =productName;

            var buttonTag =  document.createElement('button');
            buttonTag.innerHTML ='Add To Cart';


            divTag.append(imgTag)
            divTag.append(h2Tag)
            divTag.append(pTag)
            divTag.append(buttonTag)
            document.querySelector('.row').append(divTag);
        })
    }   
    else{
        document.querySelector('.row').innerHTML = 'CART EMPTY';
    }
})()