var brands = ['Nike','Adidas','Puma','Fila'];

console.log(brands);
// console.log(document);
for(brandlist of brands){
    // console.log(brandlist);
    // console.log(document)
    // console.log(document.createElement('li'));
    liTag = document.createElement('li');
    console.log(liTag);
    liTag.innerHTML = `<input type='checkbox' />
       ${brandlist} `; 
    // console.log(document.querySelector('ul'));
    document.querySelector('ul').append(liTag);

    // event listener
     liTag.addEventListener('click',myfunc);
     liTag.addEventListener('click',myfunc1);

    //event handler
    // liTag.onclick = myfunc;
    // liTag.onclick = myfunc1;
}

function myfunc(){
    console.log('function1 works');
}
function myfunc1(){
    console.log('function2 works');
}
var product1 = {
    brandName : 'Nike',
    price: 1250,
    discount:30,
    path:'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/r/8/z/s-ts5-vebnor-original-imaghe5ahzh9vdm7.jpeg?q=70',
    size:['M','L','XL','XXL']
}
var product2 = {
    brandName : 'Adidas',
    price: 1980,
    discount:20,
    path:'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/v/y/t/xxl-ts12-vebnor-original-imagz6w8zfvzsp93.jpeg?q=70',
    size:['M','L','XL','XXL']
}
var product3 = {
    brandName : 'Puma',
    price: 1550,
    discount:15,
    path:'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/g/7/l-st-xoxo-navyblue-smartees-original-imaggfkebugny4we.jpeg?q=70',
    size:['M','L','XXL']
}
var product4 = {
    brandName : 'Fila',
    price: 1750,
    discount:40,
    path:'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/k/o/9/xxl-ts-658-rama-moonvelly-original-imaggkphvfes4gx8.jpeg?q=70',
    size:['L','XL','XXL']
}
// console.log(product1,product2,product3,product4);
let allProducts = [product1,product2,product3,product4];
console.log(allProducts);

// console.log(document.querySelector('.allRowProduct'));
for(productKey in allProducts){
    console.log(productKey, allProducts[productKey]);

    //destrction object
    let {brandName,price,discount,path,size} = allProducts[productKey];
    console.log(brandName,price,discount);

   var divTag = document.createElement('div');
    // console.log(divTag);
    //add class use className
    divTag.className = 'col-3 border p-2';
    // console.log(divTag);

   var h2Tag = document.createElement('h2');
    // console.log(pTag);
    h2Tag.innerHTML = `${brandName}`;
    h2Tag.style.margin = '5px';
    h2Tag.style.color = 'blue';
    console.log(h2Tag);

   var imgTag = document.createElement('img');
    // console.log(imgTag);
    imgTag.src = `${path}`;
    imgTag.className = 'img-fluid';
    imgTag.style.minHeight = '235px';
    // console.log(imgTag);

   var pTag = document.createElement('p');
    // console.log(pTag);
    pTag.innerHTML = `₹ ${price}`;
    pTag.style.margin = '0';
    console.log(pTag);

    var p1Tag = document.createElement('p');
    p1Tag.innerHTML = `${discount} % off`;
    p1Tag.style.margin = '0';
    p1Tag.style.color = 'green';

    var p2Tag = document.createElement('p');
    p2Tag.innerHTML = `Size: ${size}`;
    console.log(size);
    

    document.querySelector('.allRowProduct').append(divTag);
    divTag.append(imgTag);
    divTag.append(h2Tag);
    divTag.append(pTag);
    divTag.append(p1Tag);
    divTag.append(p2Tag);
}