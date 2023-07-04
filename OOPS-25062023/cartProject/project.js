import Product from "./product.js";

// var objProduct = new Product();
// console.log(objProduct);

document.querySelector('button').onclick = function(){
// console.log('button');
// console.log(document.querySelectorAll('#productData')); 

var [pname,pprice,ppath]= document.querySelectorAll('#productData');
// console.log(pname,pprice,ppath);

var productRecord = {
    productName: pname.value,
    productPrice: pprice.value,
    productPath: ppath.value,
}
console.log(productRecord);
console.log(JSON.stringify(productRecord));

var objProduct = new Product();
// console.log(objProduct);
// console.log(objProduct.addProduct(productRecord));
if(objProduct.addProduct(productRecord)){
    pname = '';
    pprice = '';
    ppath = '';
    document.querySelector('p').innerHTML = 'Record Added';
}
// document.querySelector('p').innerHTML = 'Record Added';

}

