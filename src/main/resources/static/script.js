const API_KEY="789696a0dc794c108891dc97d9ff69ed";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener('load',() => fetchNews("pune"));
async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    console.log(data);
    bindData(data.articles);
}
function bindData(articles){
    const cardsContainer=document.getElementById("cards-container");
    const templatenewscard=document.getElementById("template-news-card");
    cardsContainer.innerHTML="";
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardclone=templatenewscard.content.cloneNode(true);
        fillDataInCard(cardclone,article);
        cardsContainer.appendChild(cardclone);
           
    });
    
}

function onNavItemClick(id){
    fetchNews(id);
}
 function  fillDataInCard(cardclone,article){
		   const newsImg=cardclone.querySelector('#newsImg');
		   const newstitle=cardclone.querySelector('#news-title');
		   const newssource=cardclone.querySelector('#news-source');
		   const newsdesc=cardclone.querySelector('#news-desc');
           newsImg.src=article.urlToImage;
           newstitle.innerHTML=article.title;
           newsdesc.innerHTML=article.description;
           const date=new Date(article.publishedAt).toDateString('en-US',{
            timeZone:"Asia/Jakarta"
           })
           newssource.innerHTML=`${article.source.name}  ${date}`;
           cardclone.firstElementChild.addEventListener('click',()=>{
            window.open(article.url,"_blank");
           })
           }
           const searchbtn=document.getElementById("searchbtn");
           const newsInput=document.getElementById("news-Input");
           searchbtn.addEventListener('click',()=>{
            const query=newsInput.value;
            fetchNews(query);
           })
           function reload(){
            window.location.reload();
           }