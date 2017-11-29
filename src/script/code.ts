import * as $ from "jquery";
// let audio = new Audio("StarWars.mp3");
import { movieData } from "./data";
import { Ireview } from "./interface";
let rating = movieData.rating;
const ui = {
    title: $("#title"),
    image: $("#image"),
    text: $("#text"),
    list: $("#list"),
    stars: $("#starDiv"),
};
let timeout;

function delayedRestart() {
    timeout = window.setTimeout(restart, 34000);
    if (timeout === timeout) {
        timeout = NaN;
    }
}

function restart() {
    const crawl = $("#textDiv");
    const newCrawl = crawl.clone(true);
    crawl.before(newCrawl);

    $("." + crawl.attr("class") + ":last").remove();
    delayedRestart();
}
ui.stars.click("span", (e) => {
    const star = $(e.target);
    const starri = parseInt(star.attr("id"), 10);
    if (starri <= 6 && starri >= 1) {
        rating = starri;
        changeStarRating(starri);
    }
});
ui.stars.mouseover("span", (e) => {
    const star = $(e.target);
    const starri = parseInt(star.attr("id"), 10);
    if (starri <= 6 && starri >= 1) {
        changeStarRating(starri);
    }
});
ui.stars.mouseleave("span", () => {
    changeStarRating(rating);
});

function renderMovie(movie: Ireview) {
    ui.title.attr("src", movie.title);
    ui.image.attr("src", movie.image);
    ui.text.text(movie.text);
    ui.list.html(movie.actors);
}

function changeStarRating(grade) {
    for (let i = 1; i <= 5; i++) {
        const star = $("#" + i);
        if (i <= grade) {
            star.addClass("filled");
        } else {
            star.removeClass("filled");
        }
    }
}

window.onload = () => {
    renderMovie(movieData);
    changeStarRating(rating);
    // audio.play();
    delayedRestart();
};
