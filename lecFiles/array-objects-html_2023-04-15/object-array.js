var brands = new Array('zara', 'nike', 'puma');
  console.log(brands);

  // console.log(document);
  // console.log(document.querySelector('ul'));
  // console.log(typeof document.querySelector('ul'));
  for (val of brands) {
    console.log(val);
    var liTag = document.createElement('li');
    console.log(liTag, typeof liTag);
    // liTag.innerText = " <input type='checkbox' /> hello";
    // liTag.innerHTML = " <input type='checkbox' /> hello";
    liTag.innerHTML = ` <input type='checkbox' />
       ${val} `;

      //Event Listener
    liTag.addEventListener("click" , myfunc);
    liTag.addEventListener("click" , myfunc1);

    //Event Handler 
    // liTag.onclick = myfunc
    // liTag.onclick = myfunc1;
  
    document.querySelector('ul').append(liTag);
  }

//////////////////////////////////

function myfunc(){
  console.log('FUNC TESTED');
}
function myfunc1(){
  console.log('FUNC TESTED1');
}

////////////////////////////////

var product1 = {
  name:"Tshirt" ,
  price:1000 ,
  discount:20 ,
  path:"https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70" ,
  size:["XL","M","S"]
}
var product4 = {
  name:"Jeans" ,
  price:2000 ,
  discount:30 ,
  path:"https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/d/m/s-mt-02-lyriss-original-imagndaeyax2yzrb.jpeg?q=70" ,
  size:["M","S"]
}
var product2 = {
  name:"Kurta" ,
  price:3000 ,
  discount:30 ,
  path:"https://rukminim1.flixcart.com/image/612/612/k4px6kw0/t-shirt/n/h/t/m-707-black-london-hills-original-imafnkajgdc5yyag.jpeg?q=70" ,
  size:["XXL","M","S"]
}
var product3 = {
  name:"Kurti" ,
  price:1000 ,
  discount:70 ,
  path:"https://rukminim1.flixcart.com/image/612/612/l41n2q80/t-shirt/k/x/j/l-1jgrf-013-blk-jugular-original-imagff7w8tfwd2dr.jpeg?q=70" ,
  size:["XL","XXL","XXXL"]
}

var allProducts = [
  product1,product2,product3,product4
]


console.log(product1 , typeof product1);
console.log(allProducts );

// for(i in [10,20,30]){
//   console.log(i);
// }

// var {name,price} = {name:"Kurta",price:1000,discount:10};
// console.log(name,price);

for( i in allProducts){
  console.log(i,allProducts[i]);

  //Object Destruction
  var{path,name,price,size} = allProducts[i];

  var divTag = document.createElement('div');
  console.log(divTag , typeof divTag);
  divTag.className = 'col-3 text-center border p-4';

  var h2Tag = document.createElement('h2');
  // console.log(h2Tag);
  h2Tag.innerText = price;

  var pTag = document.createElement('p');
  // console.log(pTag);
  pTag.innerText = name;

  var imgTag = document.createElement('img');
  console.log(imgTag);
  imgTag.src = path;
  imgTag.className = 'img-fluid';

  console.log(size.join());

  var pTag1 = document.createElement('p');
  // console.log(pTag);
  pTag1.innerText = ` Size: ${size.join()} `;

  divTag.append(imgTag);
  divTag.append(h2Tag);
  divTag.append(pTag);
  divTag.append(pTag1);

  document.querySelector('.allpro').append(divTag);
}


