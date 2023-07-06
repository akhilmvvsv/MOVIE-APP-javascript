const api_key='ce3d62297f2b166455dac56060246cae';
//const api=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${MOVIE_TITLE}`;
//const api2=`https://api.themoviedb.org/3/trending/movie/day?api_key=${YOUR_API_KEY}`;
//const img_url=`https://image.tmdb.org/t/p/w500/{file_path}`;
const title=document.getElementById('title');
const search1=document.getElementById('search1');
const search=document.getElementById('search');
const row1=document.getElementById('row1');
const app=document.getElementById('app');
const form=document.querySelector('form');
const image2=document.querySelectorAll('.image');
const ab=document.querySelectorAll('.ab');
const container=document.querySelector('#container');


    ab[0].addEventListener('click',display);

form.addEventListener('submit',function(event)
{
     event.preventDefault();
    const title1=search.value;
    if(title1!='')
    {
    console.log(title1);
    loadData1(title1);
    }
    else
    {
        loadData();
    }
})

Start();
function Start()
{
    loadData();
   
}
async function loadData()
{
    url=`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
    const response=await fetch(url);
    if(response.ok)
    {
        const data=await response.json();
        console.log(data);
        display1(data);
    }
    else{
        console.log('error',response.error);
    }
}
async function loadData1(title1)
{
    url=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title1}`;
    const response=await fetch(url);
    if(response.ok)
    {
        const data=await response.json();
        console.log(data);
        display1(data);
    }
    else{
        console.log('error',response.error);
    }

}
function display1(data)
{
    row1.innerHTML=
    `<div class="image">
    <img src="https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}" alt="" class="ab" data-cellIndex="0">
</div>
<div class="image" >
    <img src="https://image.tmdb.org/t/p/w500/${data.results[1].poster_path}" alt="" class="ab" data-cellIndex="1">
</div>
<div class="image">
    <img src="https://image.tmdb.org/t/p/w500/${data.results[2].poster_path}" alt="" class="ab" data-cellIndex="2">
</div>
<div class="image">
    <img src="https://image.tmdb.org/t/p/w500/${data.results[3].poster_path}" alt="" class="ab" data-cellIndex="3">
</div>
<div class="image">
    <img src="https://image.tmdb.org/t/p/w500/${data.results[4].poster_path}" alt="" class="ab" data-cellIndex="4">
</div>` 
const ab=document.querySelectorAll('.ab');
ab.forEach(function(abc,k)
{
    
    abc.addEventListener('click',function(event)
    {
        const ele=event.target;
        const ele2=ele.getAttribute('data-cellIndex');
        console.log(ele);
        console.log(ele2);
        display(ele2,data);
    });
        


    
}
);

}

function display(k,data3)
{
    container.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data3.results[k].poster_path})`;
    container.style.filter = "brightness(1)"; 
    container.innerHTML=`
    <div id="app">
    <div id="picture">
    <img id="poster" src="https://image.tmdb.org/t/p/w500/${data3.results[k].poster_path}">
    </div>
    <div id="information">
    <h1 id="heading">${data3.results[k].title}</h1>
    <pre id= "information2">
    Original Language:${data3.results[k].original_language}

    Original Title:${data3.results[k].original_title}

  <p id="paragraph">Overview:${data3.results[k].overview}</p>

    Release Date:${data3.results[k].release_date}

    Popularity:${data3.results[k].popularity}
    </pre>
    </div>
    </div>`
    
}
