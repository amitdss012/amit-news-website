const Menu = document.querySelector(".HamborgerMenu");
const NewsTopics = document.querySelector(".NewsTopicsUl");
const Newsdata = document.querySelector(".newsContainer");
const SeachIcon = document.getElementById("SearchICon");
const inputData = document.getElementById("inputData");

Menu.addEventListener("click", () => {
  NewsTopics.classList.toggle("aajao");
});

let API = "https://newsapi.org/v2/everything?q=";
let API_KEY = "3099295e6cdc4ab8955a8dd44f1b8994";

window.addEventListener("load", () => {
  GetData("india");
});

const GetData = async (query) => {
  let Response = await fetch(`${API}${query}&apiKey=${API_KEY}`)
  let Data = await Response.json();
  // console.log(Data.articles)

  Newsdata.innerHTML = "";
  Data.articles.forEach(function (NewsArticle) {
    let Divs = document.createElement("div");
    Divs.classList.add("newsCard");
    Newsdata.appendChild(Divs);
    if(!NewsArticle.urlToImage) return
    Divs.innerHTML = `
    <div class="newsImage">
        <img src=${NewsArticle.urlToImage} alt="Data.articles.">
    </div>

    <div class="newsDetail">
        <h1>${NewsArticle.title}</h1>
        <span>${NewsArticle.source}</span>
        <p>${NewsArticle.description}</p>
    </div>
    `;

    Divs.addEventListener('click' , () => {
        window.open(NewsArticle.url)
    })
  });

};

SeachIcon.addEventListener("click", () => {
  let inputText = inputData.value;
  if(inputText === "") return;
  GetData(inputText);
});


function NavClick(navName){
    GetData(navName)
}

