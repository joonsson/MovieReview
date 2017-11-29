import * as angular from "angular";
import { SWep4 } from "./data";
import { SWep5 } from "./data";
import { SWep6 } from "./data";
import { Ireview } from "./interface";
// let audio = new Audio("StarWars.mp3");
const app = angular.module("reviewApp", []);
let fourRating = SWep4.rating;
let fiveRating = SWep5.rating;
let sixRating = SWep6.rating;
let rating = fourRating;
let movie = 4;
let timeout;

app.controller("reviewController", () => {
    this.movie = SWep4;
    this.rating = fourRating;

    this.changeMovie = () => {
        if (movie === 4) {
            movie++;
            fourRating = rating;
            this.movie = SWep5;
            rating = fiveRating;
            this.changeRating(rating);
        } else if (movie === 5) {
            movie++;
            fiveRating = rating;
            this.movie = SWep6;
            rating = sixRating;
            this.changeRating(rating);
        } else {
            movie = 4;
            sixRating = rating;
            this.movie = SWep4;
            rating = fourRating;
            this.changeRating(rating);
        }
    };

    this.changeRating = (newRating) => {
        rating = newRating;
        this.rating = rating;
    };
    this.changeStarRating = (newRating) => {
        if (newRating === 0) {
            this.rating = rating;
        } else {
            this.rating = newRating;
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

    delayedRestart();
}

window.onload = () => {
    // audio.play();
    delayedRestart();
};
