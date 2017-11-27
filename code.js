function renderMovie(movie){
    document.getElementById("title").innerText = movie.title;
    document.getElementById("image").src = movie.image;
    document.getElementById("text").innerText = movie.text;
    document.getElementById("list").innerHTML = movie.actors;
  }

  renderMovie(movieData);