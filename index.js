//variables
const generalBtn = document.getElementById("General");
const bussinessBtn = document.getElementById("Business");
const sportsBtn = document.getElementById("Sports");
const technologyBtn = document.getElementById("Technology");
const entertainmentBtn = document.getElementById("Entertainment");
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

//Array
let newsDataArr = [];

//API's
const API_KEY = "6f5c50c9e44742d79581b9e15a742584";
const HEADLINE_NEWS ="https://newsapi.org/v2/top-headlines?country=in&apiKey=6f5c50c9e44742d79581b9e15a742584"; 
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=6f5c50c9e44742d79581b9e15a742584";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f5c50c9e44742d79581b9e15a742584";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6f5c50c9e44742d79581b9e15a742584";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6f5c50c9e44742d79581b9e15a742584";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6f5c50c9e44742d79581b9e15a742584";

window.onload=function(){
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>General News</h4>";

    fetchGeneralNews();
});

bussinessBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Business News</h4>";

    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Sports News</h4>";

    fetchSportsNews();

});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Entertainment News</h4>";

    fetchEntertainmentNews();

});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Technology News</h4>";

    fetchTechnologyNews();

});

searchBtn.addEventListener("click", function(){
    
        newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";

        fetchQueryNews(newsQuery.value);

});
const fetchHeadlines = async ()=> {
    const response = await fetch(HEADLINE_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchGeneralNews = async ()=> {
    const response = await fetch(GENERAL_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchBusinessNews = async ()=> {
    const response = await fetch(BUSINESS_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchSportsNews = async ()=> {
    const response = await fetch(SPORTS_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchEntertainmentNews = async ()=> {
    const response = await fetch(ENTERTAINMENT_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchTechnologyNews = async ()=> {
    const response = await fetch(TECHNOLOGY_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchQueryNews = async (query)=> {

    if(query==null)
    {
        return;
    }
    let SEARCH_NEWS = `https://newsapi.org/v2/everything?q=${query}&from=2023-10-01&sortBy=popularity&apiKey=6f5c50c9e44742d79581b9e15a742584`;
    const response = await fetch(SEARCH_NEWS);
    if(response.status >=200 && response.status<300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handle erors
        console.log(response.status, response.statusText);

    }

    displayNews();
}

function displayNews() {

    if(newsDataArr.length==0)
    {
        newsDetails.innerHTML="<h5>No data found.</h5>"
        return;
    }

    newsDetails.innerHTML = "";

    newsDataArr.forEach(news =>{

        var date = news.publishedAt.split("T"); 

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className="p-2";

        
        var cardBody = document.createElement('div');

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","400");
        image.src = news.urlToImage;

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerText = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className= "text-muted";
        description.innerText = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target","_blank");
        link.href=news.url;
        link.innerText = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        
        
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        newsDetails.appendChild(col);


    });

}

