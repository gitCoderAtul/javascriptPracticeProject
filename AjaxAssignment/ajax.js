// fetchdata 

//https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1
//https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1
//https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1
//https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1

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
        //    console.log(data);
        callback(data);
     }
    }
    xmlhttp.send();
}

/* fetchDataFromApi('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1', (result)=>{
// console.log('callback');
// console.log(result.results);
document.querySelector('#movieList').innerHTML = '';
result.results && result.results.length > 0 && result.results.forEach(obj => {
        // console.log(obj);  
        //object destruction
        */ 
      /*  var {title, backdrop_path, vote_average } = obj;
        var divTag = document.createElement('div');
        divTag.className = 'col-md-3 text-center';
        divTag.style.marginTop = '10px';
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
        document.querySelector('#movieList').append(divTag); */

      /*  viewData(obj); 
    });
}
);

*/

// popular movie data 
popularDataFunction();

document.getElementById('popular').addEventListener('click',popularDataFunction); 

function popularDataFunction(){
    fetchDataFromApi('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1', (result)=>{
// console.log('callback');
// console.log(result.results);
document.querySelector('#movieList').innerHTML = '';
result.results && result.results.length > 0 && result.results.forEach(obj => {
        // console.log(obj);  
        //object destruction
      /*  var {title, backdrop_path, vote_average } = obj;
        var divTag = document.createElement('div');
        divTag.className = 'col-md-3 text-center';
        divTag.style.marginTop = '10px';
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
        document.querySelector('#movieList').append(divTag); */

        viewData(obj); 
    });
} 
);
}


// top rated function 
document.getElementById('topRated').addEventListener('click',topRatedDataFunction); 
// function filterTopRated(){
//     topRatedFunction();
//     console.log('topRated');
// }
 function topRatedDataFunction(){
    console.log('topRated');
    fetchDataFromApi('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1', (result)=>{
    // console.log(result);
    // console.log('callback toprated');
    document.querySelector('#movieList').innerHTML = '';
    result.results && result.results.length > 0 && result.results.forEach(obj => {
        console.log(obj);
        // var { title, backdrop_path,vote_average } = obj; 
        viewData(obj);
    }); 
}
);
} 

// top rated function 
document.getElementById('upComing').addEventListener('click',upComingDataFunction); 
// function filterTopRated(){
//     topRatedFunction();
//     console.log('topRated');
// }
 function upComingDataFunction(){
    console.log('topRated');
    fetchDataFromApi('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1', (result)=>{
    // console.log(result);
    // console.log('callback toprated');
    document.querySelector('#movieList').innerHTML = '';
    result.results && result.results.length > 0 && result.results.forEach(obj => {
        // console.log(obj);
        // var { title, backdrop_path,vote_average } = obj; 
        viewData(obj);
    }); 
}
);
} 

document.getElementById('btnSearch').addEventListener('click', serachDataFunction);

function serachDataFunction(){
    console.log(this);
    console.log(this.previousElementSibling.value);
    var movieName = this.previousElementSibling.value;
    fetchDataFromApi(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${movieName}&page=1`, (result)=>{
        console.log(result);

        document.querySelector('#movieList').innerHTML = '';
        result.results && result.results.forEach((obj)=>{
            console.log(obj);
            console.log('check');  
            var imgPath = obj.backdrop_path;
            var str = obj.title;
            movieChar = str.slice(0, 4);
            if(movieName == str){
                viewData(obj);
            }

            
        })
    });
    
}

// view all data
function viewData(obj){ 
    var {title, backdrop_path, vote_average } = obj;
    var divTag = document.createElement('div');
    divTag.className = 'col-md-3 text-center';
    divTag.style.marginTop = '10px';
    divTag.style.marginBottom = ' 20px'; 

    var currentId = obj.id;
    // console.log(currentId);

    var imgTag = document.createElement('img');
    imgTag.className = 'img-fluid';
    imgTag.src = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    // console.log(imgTag);
    imgTag.style.cursor = 'pointer';

    imgTag.addEventListener('click', ()=>{
        // console.log( currentId + 'popup');

        document.querySelector('#modalPopUp').style.display = 'block';
        document.querySelector(".modalDiv").style.display = "block";

          document.querySelector('.modalDiv').innerHTML = '';
        fetchDataFromApi(`https://api.themoviedb.org/3/movie/${currentId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, (detailView)=>{
            //   console.log(detailView);


            var { title, backdrop_path, poster_path, vote_average, runtime, release_date, overview  } = detailView;

            
            var divRow = document.createElement('div');
            divRow.className = 'row';

            divCol3 = document.createElement('div');
            divCol3.className = 'col-md-3';

            divCol7 = document.createElement('div');
            divCol7.className = 'col-md-7';

            divMovieDetails = document.createElement('div');
            divMovieDetails.className = 'movie-details'; 

            divMovieDetailsInfo = document.createElement('div');
            divMovieDetailsInfo.className = 'movie-details_info'; 

            divCol4 = document.createElement('div');
            divCol4.className = 'col-md-4';

            divCol5 = document.createElement('div');
            divCol5.className = 'col-md-5';

            var buttonClose = document.createElement('button');
            buttonClose.innerHTML = `x`;
            buttonClose.className = 'btn-close1';
            buttonClose.addEventListener('click', hidebox);
            
            var imgTag = document.createElement('img');
            imgTag.className = 'img-fluid';
            imgTag.src = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

            var imgBanner = document.createElement('img');
            imgBanner.className = 'img-fluid';
            imgBanner.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
            imgBanner.style.height = '350px';
            imgBanner.style.objectFit = 'cover';
            imgBanner.style.width = '100%';
            imgBanner.style.objectPosition = 'top';

            var h1Tag = document.createElement('h1');
            h1Tag.innerHTML = title;
            h1Tag.style.fontSize = '18px';
            h1Tag.style.color = 'white';
            h1Tag.style.fontWeight = '600';
            // console.log(h1Tag);
            
            var ratingPara = document.createElement('p');
            ratingPara.innerHTML = `Rating : ${parseFloat(vote_average.toFixed(1))}`;
            ratingPara.style.fontSize = '16px';
            ratingPara.style.color = '#c4c4c4';
            
            var timeDurationPara = document.createElement('p');
            timeDurationPara.innerHTML = `<span style="border:1px solid gray; border-radius:3px; padding:2px 5px">${runtime} min </span>`;
            timeDurationPara.style.fontSize = '16px';
            timeDurationPara.style.color = '#c4c4c4'; 

            var datePara = document.createElement('p');
            datePara.innerHTML = `Release Date : ${release_date}`;
            datePara.style.fontSize = '16px';
            datePara.style.color = '#c4c4c4';  
  
            var overviewDataHeading = document.createElement('h2');
            overviewDataHeading.innerHTML = "Overview";

            var overviewData = document.createElement('p');
            overviewData.innerHTML = overview;

            // divRow.append(divCol3);
            // divCol3.append(imgTag);

            divRow.append(buttonClose);
            
            divRow.append(divCol7);
            divCol7.append(divMovieDetails);
            
           
            // divRow.append(divCol4)
            // divCol4.append(h1Tag);
            // divCol4.append(ratingPara);
            // divCol4.append(timeDurationPara);
            // divCol4.append(datePara);

              
             
            divMovieDetails.append(imgTag); 
            divMovieDetails.append(divMovieDetailsInfo);
            divMovieDetailsInfo.append(h1Tag);
            divMovieDetailsInfo.append(ratingPara);
            divMovieDetailsInfo.append(timeDurationPara);
            divMovieDetailsInfo.append(datePara);

            
            divMovieDetails.append(overviewDataHeading);
            divMovieDetails.append(overviewData);


            divRow.append(divCol5);
            divCol5.append(imgBanner);

            
            document.querySelector('.modalDiv').append(divRow);
 

        });

    });

    var h3Tag = document.createElement('h3');
    h3Tag.innerHTML = title;
    h3Tag.className='title';

    var pTag = document.createElement('p');
    pTag.innerHTML = `Rating ${parseFloat(vote_average.toFixed(1))}`;
    pTag.style.color = 'white';

    divTag.append(imgTag);
    divTag.append(h3Tag);
    divTag.append(pTag); 
    document.querySelector('#movieList').append(divTag);
}

// popup
function popUpData(){
    console.log( 'popup');
    document.querySelector('#modalPopUp').style.display = 'block';
    document.querySelector(".modalDiv").style.display = "block";
    
}
function hidebox(){
    document.getElementById("modalPopUp").style.display = "none";
    document.querySelector(".modalDiv").style.display = "none";
}