console.log(axios);
console.log(axios.get);

var rec = axios.get('https://api.nobelprize.org/2.1/laureates?_ga=2.231527580.2070001567.1686736021-497096564.1686736019');

rec.then((val)=>{
    console.log(val.data);
    var values = val.data.laureates;
    console.log(values);

    values && values.length > 0 && values.forEach(result=>{
        console.log(result);
        var {birth,fullName}=result;
        //  fullName = fullName.en; 
        //  console.log(fullName);
        var birth = birth.place; 
        
        console.log(birth);
       
      
        

    })
})
.catch((err)=>{

})