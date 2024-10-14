const scoreAndBullet = { score: 0, bullets: 5 };

Object.defineProperty(scoreAndBullet, "updatedScore", {
  get: function () {
    return ++this.score;
  },
});

function myfunction(bird) {
  if (scoreAndBullet.bullets > 0) {
    bird.style.display = "none";
    document.getElementById("birdscore").innerHTML = scoreAndBullet.updatedScore;
    document.getElementById("bulletSound").play();
  }
}

window.onclick = function () {
  if (scoreAndBullet.bullets > 0) {  
    scoreAndBullet.bullets--; 
    document.getElementById("bullets").innerHTML = "Bullets: " + scoreAndBullet.bullets;
    document.getElementById("bulletSound").play(); 
  }
};
