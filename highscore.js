function printHighscores() {
    // get scores from localstorage or set to empty array
    var highscore = JSON.parse(window.localStorage.getItem("highScore")) || [];
  
    // sort highscore by score property in descending order
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
    window.localStorage.removeItem("highScore");
    window.location.reload();
  }
  
  // clear the page by clicking the clear button
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();