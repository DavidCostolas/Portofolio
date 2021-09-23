'use strict';

function handleResponse(res) {
    if (!res.ok) {
        console.warn('Something bad happened');
        throw 'This is a bad error';
    }
    return res.json();
}

let nextPage, previousPage;
let prevHide = document.querySelector('#data-prev');
let nextHide = document.querySelector('#data-next')

async function getList(url) {
    const list = await fetch(url)
        .then(handleResponse);

    const listResult = list.results;
    const displayGrid = document.querySelector('#root');
    displayGrid.innerHTML = '';

    for (let i = 0; i < listResult.length; i++) {
        const newArticle = document.createElement('article');
        const title = document.createElement('p');
        const poster = document.createElement('img');
        poster.src = listResult[i].Poster;
        title.append(listResult[i].Title);
        title.classList.add('highlight');
        newArticle.append(title, poster);
        displayGrid.append(newArticle);
        title.addEventListener("click",()=> window.location.href=`movieDetails.html?id=${listResult[i]._id}`)
    }

    previousPage = list.pagination.links.prev;
    nextPage = list.pagination.links.next
    let currentPage = list.pagination.currentPage;
    document.getElementById('current-page').innerHTML = currentPage;


    if (previousPage === null) {
        prevHide.classList.add("hide");
    }
    else {
        prevHide.classList.remove("hide");
    }
    if (nextPage === null) {
        nextHide.classList.add("hide");
    }
    else {
        nextHide.classList.remove("hide");
    }
}

function pagination(url) {
    if (url) {
        getList(url);
    }
}

prevHide.addEventListener("click", () => pagination(previousPage));
nextHide.addEventListener("click", () => pagination(nextPage));

getList('https://movies-app-siit.herokuapp.com/movies');