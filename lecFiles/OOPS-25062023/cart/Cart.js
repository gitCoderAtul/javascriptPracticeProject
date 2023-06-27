class Cart{
    addRecordInCart(){}
    fetchRecordFromCart(){
        // console.log('test');
        var ans = localStorage.getItem('products');
        if(ans!== null){
            // console.log(ans);
            var ans = JSON.parse(ans);
            // console.log(ans);
            return ans;
        }
        else{
            return [];
        }
    }
    deleteRecordFromCart(){}
}

export default Cart;