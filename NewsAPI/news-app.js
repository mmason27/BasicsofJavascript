function nullCheck(property) {
    if (property === null) {
        return ""
    } else {
        return property
    }
}

let newsContent = document.getElementById("newsContent");

window.addEventListener('DOMContentLoaded', function(){

    let newsArray = news.articles;
    newsArray.map(function(article) {
        
        let newsItem = `
                    <div id="articleList">
                        <h2 class="title">${nullCheck(article.title)}</h2>
                        <img src="${nullCheck(article.urlToImage)}" class="images" alt="Sorry this image is unavailable">
                        <p class="author">${nullCheck(article.author)}</p>
                        <p class="timeStamp">${nullCheck(article.publishedAt)}</p>
                        <p class="description">${nullCheck(article.description)}</p>
                        <a href="${nullCheck(article.url)}">Click here for the full article</a>
                    </div>
                    `
        newsContent.innerHTML += newsItem;
    })
})


