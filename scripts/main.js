

const myImage = document.querySelector("img");
const myButton = document.querySelector("button")

myButton.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/self-portrait.png") {
      myImage.setAttribute("src", "images/soccerball.png");
    } else {
      myImage.setAttribute("src", "images/self-portrait.png");
    }
  };