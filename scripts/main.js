

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/self-portrait.png") {
      myImage.setAttribute("src", "images/soccerball.png");
    } else {
      myImage.setAttribute("src", "images/self-portrait.png");
    }
  };

document.querySelector("button").addEventListener("click", function () {
    alert("Hello!");
  });