// fetchdata 

function fetchDataFromApi(apiPath, callback){
    console.log(apiPath);

    var xmlhttp = new XMLHttpRequest();
    // console.log(xmlhttp);
      console.log(xmlhttp.readyState, xmlhttp.status);

    xmlhttp.open('GET', apiPath);
    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState, xmlhttp.status);
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        // console.log(xmlhttp.responseText);
        var data = JSON.parse(xmlhttp.responseText)
           console.log(data);
        callback(data);
     }
    }
    xmlhttp.send();
}
fetchDataFromApi('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1', (result)=>{
console.log('callback');
// console.log(result.results);
result.results && result.results.length > 0 && result.results.forEach(obj => {
        console.log(obj);

        //object destruction
        var {title, backdrop_path, vote_average } = obj;
        var divTag = document.createElement('div');
        divTag.className = 'col-md-3 text-center';
        divTag.style.marginBottom = ' 20px';

        var imgTag = document.createElement('img');
        imgTag.className = 'img-fluid';
        imgTag.src = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

        var h3Tag = document.createElement('h3');
        h3Tag.innerHTML = title;
        h3Tag.className='title';

        var pTag = document.createElement('p');
        pTag.innerHTML = `Rating ${vote_average}`;
        pTag.style.color = 'white';

        divTag.append(imgTag);
        divTag.append(h3Tag);
        divTag.append(pTag); 
        document.querySelector('#movieList').append(divTag);
    });
}

);