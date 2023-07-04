class cart{

    fetchRecord(){
        console.log('cart');
        var ans = localStorage.getItem('product');
        if(ans != null){
            var ans = JSON.parse(ans);
            return ans;
        }else{
            return [];
        }
        
    }

}

export default cart;