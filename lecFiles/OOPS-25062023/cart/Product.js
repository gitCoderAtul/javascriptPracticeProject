class Product{
    addProduct(value){
        // console.log("===");
        // console.log(value);
        // console.log(localStorage);
        var ans = localStorage.getItem('products');
        console.log(ans);
        var arr = [];
        if(ans === null){
            arr.push(value);
            // console.log(arr);
            var finalRec = JSON.stringify(arr);
            console.log(finalRec);
            localStorage.setItem('products',finalRec);
            return true;
        }
        else{
            console.log('2nd pro Onward');
            var dataFromStorage = JSON.parse(ans);
            console.log(dataFromStorage);
            dataFromStorage.push(value);
            console.log(dataFromStorage);
            var finalRec = JSON.stringify(dataFromStorage);
            localStorage.setItem('products',finalRec);
            return true;

        }
        
    }
}

export default Product;