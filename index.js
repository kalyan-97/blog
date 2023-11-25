let cardContainerEl = document.getElementById("cardContainer");
let ImageInputEl = document.getElementById("image")
let InputEl = document.getElementById("input");
let TextAreaEl = document.getElementById("textarea");
let AddButtonEl = document.getElementById("AddBtn");

let Articles = [

]


function getInput(){
    let ImageValue = ImageInputEl.value;
    let userValue = InputEl.value;
    console.log(ImageValue)
    let descriptionValue = TextAreaEl.value;
    
    let newArticle = {
        image : ImageValue,
        title : userValue,
        description: descriptionValue
    }
    Articles.push(newArticle);
    createAndAddArticles(newArticle);
    InputEl.value = "";
    TextAreaEl.value="";
}


AddButtonEl.addEventListener("click",getInput)

function createAndAddArticles(article){
    let cardEl = document.createElement("div");
    cardEl.className = "card";
    cardContainerEl.appendChild(cardEl);

    let ImageEl = document.createElement("img");
    ImageEl.src = article.image;
    cardEl.appendChild(ImageEl)
    
    let TitleEl = document.createElement("h1");
    TitleEl.textContent = article.title;
    TitleEl.className = "title"
    cardEl.appendChild(TitleEl);
    
    let DescriptionEl = document.createElement("p");
    DescriptionEl.textContent = article.description;
    cardEl.appendChild(DescriptionEl)
}
 



for(let article of Articles){
    createAndAddArticles(article)
}


 