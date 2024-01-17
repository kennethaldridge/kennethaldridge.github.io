document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });


const myImage = document.querySelector("img");
const myButton = document.querySelector("button")

myButton.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/self-portrait.png") {
      myImage.setAttribute("src", "images/secondphoto.png");
    } else {
      myImage.setAttribute("src", "images/self-portrait.png");
    }
  };