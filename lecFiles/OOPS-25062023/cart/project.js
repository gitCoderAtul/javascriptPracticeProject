import Product from './Product.js';
// console.log(Product);
// var objProduct = new Product();
// console.log(objProduct);

document.querySelector('button').onclick = function(){
    // console.log( document.querySelectorAll('#productData') )
    var[pname,price,path] = document.querySelectorAll('#productData');
    // console.log(pname);
    // console.log(pname.value);

    var record = {
        productName:pname.value,
        productPrice:price.value,
        productPath:path.value
    }
    console.log(record);
    console.log(JSON.stringify(record));

    var objProduct = new Product();
    if( objProduct.addProduct(record)){
        pname.value = '';
        price.value = '';
        path.value = '';
        document.querySelector('p').innerHTML = '.. In Progresss';
        setTimeout(()=>{
            document.querySelector('p').innerHTML = 'Record Added';
        },2000);
    }
}