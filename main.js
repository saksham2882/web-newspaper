// url = f"https://newsapi.org/v2/everything?q={query}&from=2023-12-02&sortBy=publishedAt&apiKey=7f6f1a7451e24ba686029872265f3ece"
// let query = "What Type of News are You Interested in? :"


document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '7f6f1a7451e24ba686029872265f3ece';
    const searchInput = document.querySelector('.news-input');
    const searchButton = document.querySelector('button');
    const newsTopic = document.querySelector('.news-topic');
    const content = document.querySelector('.content');

    // Function to fetch news from the API
    function fetchNews(query) {
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => displayNews(data.articles))
            .catch(error => console.error('Error fetching news:', error));
        }

    // Function to display a list of news articles
    function displayNews(articles) {
        if (articles.length > 0) {
            const newsList = document.createElement('ul');

            articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${article.title}</strong> <br><p> ${article.description}</p> <br> <b>News Source: </b> ${article.source.name} <br> <a href="${article.url}">View more </a> <br> <img src="${article.urlToImage}"> <hr>`;
                newsList.appendChild(listItem);
                // console.log(listItem);
            });

            newsTopic.textContent = 'News Articles';
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newsList);
        } else {
            newsTopic.textContent = 'No news found';
            content.textContent = '';
        }
        console.log(articles);
    }

    // Event listener for the search button
    searchButton.addEventListener('click', function () {
        performSearch();
    });

    // Event listener for the Enter key in the search input
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Function to perform the search
    function performSearch() {
        const query = searchInput.value.trim();

        if (query !== '') {
            fetchNews(query);
        }
    }
});


// -----------------------  PreLoader ------------------------

var loader = document.getElementById('preloader');

window.addEventListener("load" , function(){
    loader.style.display = "none";
})
