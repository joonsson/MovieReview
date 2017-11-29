import * as angular from "angular";
import { SWep4 } from "./data";
import { SWep5 } from "./data";
import { SWep6 } from "./data";
import { Ireview } from "./interface";
// let audio = new Audio("StarWars.mp3");
const app = angular.module("reviewApp", []);
let rating = SWep4.rating;
let movie = 4;
let timeout;

app.controller("reviewController", ($scope) => {
    $scope.movie = SWep4;
    $scope.rating = rating;

    $scope.changeMovie = () => {
        if (movie === 4) {
            movie++;
            $scope.movie = SWep5;
        } else if (movie === 5) {
            movie++;
            $scope.movie = SWep6;
        } else {
            movie = 4;
            $scope.movie = SWep4;
        }
    };

    $scope.changeRating = (newRating) => {
        rating = newRating;
        $scope.rating = rating;
    };
    $scope.changeStarRating = (newRating) => {
        if (newRating === 0) {
            $scope.rating = rating;
        } else {
            $scope.rating = newRating;
        }
    };
});

function delayedRestart() {
    timeout = window.setTimeout(restart, 34000);
    if (timeout === timeout) {
        timeout = NaN;
    }
}

function restart() {

    const crawl = document.getElementById("textDiv");
    crawl.classList.remove("crawl");
    setTimeout(() => {
        crawl.classList.add("crawl");
    }, 1);

    /* const crawl = document.getElementById("textDiv");
    const newCrawl = crawl.cloneNode(true);
    crawl.insertBefore(newCrawl, crawl);

    document.querySelector("." + crawl.getAttribute("class") + ":last").remove(); */
    delayedRestart();
}

/* ui.stars.click("span", (e) => {
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
} */

window.onload = () => {
    // audio.play();
    delayedRestart();
};
