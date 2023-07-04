class Product{
    addProduct(value){
        // console.log(localStorage);
        
          var ans = localStorage.getItem('product');
            console.log(ans);    
            var arr= [];

// var finRec = JSON.stringify(value);
//         //   console.log(localStorage.setItem('product',finRec)); 
//         localStorage.setItem('product',finRec)
//           console.log(ans);
            if(ans === null){
                arr.push(value);
                var finRec = JSON.stringify(arr);
                // console.log(finRec);
                //   console.log(localStorage.setItem('product',finRec)); 
                
                localStorage.setItem('product',finRec);
                console.log(finRec);
                return true;
            }else{
                console.log('2nd pro Onward');
                var dataFromStorage = JSON.parse(ans);
                console.log(dataFromStorage);

                dataFromStorage.push(value);
                console.log(dataFromStorage);
                
                var finRec = JSON.stringify(dataFromStorage);
                localStorage.setItem('product',finRec);
                return true;
                }

  }
}
export default Product;