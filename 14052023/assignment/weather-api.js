// //api.openweathermap.org/data/2.5/weather?q=mumbai&appid=461efbc91dd3714634da1b376b942c29


document.querySelector('#btn').onclick = function(){
    // API
    apiPath = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=461efbc91dd3714634da1b376b942c29";

    var xmlhttp = new XMLHttpRequest();

    console.log(xmlhttp.readyState, xmlhttp.status);
    xmlhttp.
    xmlhttp.onreadystatechange = function(){

        console.log(xmlhttp.readyState, xmlhttp.status);

    }



}