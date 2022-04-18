function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
  
    // sort highscores by score property in descending order
    highscore.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscore.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.innerText = score.initial + " / " + score.score;
  
      // display on page
      var olEl = document.getElementById("scores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();