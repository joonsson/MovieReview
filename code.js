let rating = 5;
function renderMovie(movie) {
    document.getElementById("title").innerText = movie.title;
    document.getElementById("image").src = movie.image;
    document.getElementById("text").innerText = movie.text;
    document.getElementById("list").innerHTML = movie.actors;
}

function changeStarRating(grade) {
    let stars = document.getElementById("starDiv");
    stars.innerHTML="";
    for (let i = 1; i <= grade; i++) {
        let filledStar = document.createElement("span");
        filledStar.innerHTML="&#9733";
        filledStar.className = "filled star";
        filledStar.addEventListener("click", function() {
            rating = i;
            changeStarRating(i);
        });
        filledStar.addEventListener("mouseenter", function() {
            changeStarRating(i);
        });
        filledStar.addEventListener("mouseleave", function() {
            changeStarRating(rating);
        });
        stars.appendChild(filledStar);
    }
    for (let i = grade + 1; i <= 5; i++) {
        let emptyStar = document.createElement("span");
        emptyStar.innerHTML="&#9733";
        emptyStar.className = "empty star";
        emptyStar.addEventListener("click", function() {
            rating = i;
            changeStarRating(i);
        });
        emptyStar.addEventListener("mouseenter", function() {
            changeStarRating(i);
        });
        emptyStar.addEventListener("mouseleave", function() {
            changeStarRating(rating);
        });
        stars.appendChild(emptyStar);
    }
}

renderMovie(movieData);
changeStarRating(rating);