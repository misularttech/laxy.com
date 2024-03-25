function love() {
    document.getElementById("loveBtn").textContent = "I love you too";
    document.getElementById("noBtn").style.display = "Miss Laxy";
    document.getElementById("image").style.display = "none"; // hide image
  }

  function no() {
    document.getElementById("loveBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
    document.getElementById("image").style.display = "block"; // show image
  }