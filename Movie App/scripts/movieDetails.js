'use strict';

function handleResponse(res) {
    if (!res.ok) {
        console.warn('Something bad happened');
        throw 'This is a bad error';
    }
    return res.json();
}

async function getDetails() {
    const params = new URLSearchParams(window.location.search);
    const listDetails = await fetch(`https://movies-app-siit.herokuapp.com/movies/${params.get('id')}`)
        .then(handleResponse);
    const displayPoster = document.querySelector('#image');
    const title = document.createElement('p');
    const poster = document.createElement('img');
    const genre = document.createElement('p');
    const plot = document.createElement('p');
    const imdbRating = document.createElement('p');
    const displayRatings = document.querySelector('#allRatings');
    for (let i = 0; i < listDetails.Ratings.length; i++) {
        const allRatings = document.createElement('p');
        const source = document.createElement('p');
        const value = document.createElement('p');
        source.append(listDetails.Ratings[i].Source);
        value.append(listDetails.Ratings[i].Value);
        imdbRating.append(listDetails.imdbRating)
        allRatings.append(source, value);
        displayRatings.append(allRatings);
    }
    poster.src = listDetails.Poster;
    document.getElementById('title').innerHTML = listDetails.Title;
    displayPoster.append(poster);
    document.getElementById('plot').innerHTML = listDetails.Plot;
    document.getElementById('genre').innerHTML = listDetails.Genre;
    document.getElementById('imdbRating').innerHTML = listDetails.imdbRating;
    document.getElementById('rating').innerHTML = listDetails.imdbRating;
}
getDetails();