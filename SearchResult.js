var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)})


const searchFormMarvel = document.getElementById("search-form-marvel");
searchFormMarvel.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=60717f10&s=${document.getElementById("search-input-marvel").value}`, {headers: {Accept: 'application/json'}, method: 'GET'})
    .then(response => {
        console.log("response")
        return response.json()})
    .then(update => {
        results = update.Search;
        console.log("results");
        newTab();})
    .catch(e => {
        console.error("Error " + e)})
    return false;});

const searchFormSW = document.getElementById("search-form-SW");
searchFormSW.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=60717f10&s=${document.getElementById("search-input-SW").value}`, {headers: {Accept: 'application/json'}, method: 'GET'})
    .then(response => {
        console.log("response")
        return response.json()})
    .then(update => {
        results = update.Search;
        console.log("results");
        newTab();})
    .catch(e => {
        console.error("Error " + e)})
    return false;});

const searchFormPixar = document.getElementById("search-form-pixar");
searchFormPixar.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=60717f10&s=${document.getElementById("search-input-pixar").value}`, {headers: {Accept: 'application/json'}, method: 'GET'})
    .then(response => {
        console.log("response")
        return response.json()})
    .then(update => {
        results = update.Search;
        console.log("results");
        newTab();})
    .catch(e => {
        console.error("Error " + e)})
    return false;});

const searchFormNG = document.getElementById("search-form-NG");
searchFormNG.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=60717f10&s=${document.getElementById("search-input-NG").value}`, {headers: {Accept: 'application/json'}, method: 'GET'})
    .then(response => {
        console.log("response")
        return response.json()})
    .then(update => {
        results = update.Search;
        console.log("results");
        newTab();})
    .catch(e => {
        console.error("Error " + e)})
    return false;});

const searchFormDisney = document.getElementById("search-form-disney");
searchFormDisney.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=60717f10&s=${document.getElementById("search-input-disney").value}`, {headers: {Accept: 'application/json'}, method: 'GET'})
    .then(response => {
        console.log("response")
        return response.json()})
    .then(update => {
        results = update.Search;
        console.log("results");
        newTab();})
    .catch(e => {
        console.error("Error " + e)})
    return false;});

var results = [];
function newTab(){
    let html = '';
    results.forEach(function(movie, i){
    html += '<div class="col">'
        +'<div class="card" style="width: 15rem;">'
            +`<img src="${movie.Poster}" class="card-img-top" alt="...">`
            + '<div class="card-body">'
                +`<h5 class="card-title">${movie.Title}</h5>`
                +`<p class="card-text">${movie.Year}</p>`
                +`<a href="https://www.disneyplus.com/" class="btn btn-primary">Watch now</a>`
                +'</div>'
            +'</div>'
        +'</div>';
    })
    document.getElementById("container-result").innerHTML = html;
}