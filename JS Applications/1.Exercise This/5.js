function getArticleGenerator(articles) {
    const divElements = document.getElementById('content');
 
    return function () {
        if (articles.length > 0) {
            const newArticleElem = document.createElement('article');
            newArticleElem.textContent = articles.shift();
            divElements.appendChild(newArticleElem);
        }
    }}