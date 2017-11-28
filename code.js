let $ = require("jquery");
//let audio = new Audio("StarWars.mp3");
let movieData = require("./data");
let rating = movieData.rating;
let ui = {
    title: $("#title"),
    image: $("#image"),
    text: $("#text"),
    list: $("#list"),
    stars: $("#starDiv")
}
let timeout;

function delayedRestart() {
    timeout = window.setTimeout(restart, 34000);
    if (timeout == timeout) {
        timeout = NaN;
    }
}

function restart() {
    var crawl = $("#textDiv"),
        newCrawl = crawl.clone(true);
    crawl.before(newCrawl);

    $("." + crawl.attr("class") + ":last").remove();
    delayedRestart();
}
ui.stars.click("span", function (e) {
    let star = $(e.target);
    let starri = parseInt(star.attr("id"));
    if (starri <= 6 && starri >= 1) {
        rating = starri;
        changeStarRating(starri);
    }
});
ui.stars.mouseover("span", function (e) {
    let star = $(e.target);
    let starri = parseInt(star.attr("id"));
    if (starri <= 6 && starri >= 1) {
        changeStarRating(starri);
    }
});
ui.stars.mouseleave("span", function () {
    changeStarRating(rating);
});

function renderMovie(movie) {
    ui.title.attr("src", movie.title);
    ui.image.attr("src", movie.image);
    ui.text.text(movie.text);
    ui.list.html(movie.actors);
}

function changeStarRating(grade) {
    for (let i = 1; i <= 5; i++) {
        let star = $("#" + i);
        if (i <= grade) {
            star.addClass("filled");
        } else {
            star.removeClass("filled");
        }
    }
}

window.onload = function () {
    renderMovie(movieData);
    changeStarRating(rating);
    //audio.play();
    delayedRestart();
};