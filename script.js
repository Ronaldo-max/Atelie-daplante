const contentImages = document.querySelectorAll(".secundary-section-contents div");
const nextBtn = document.getElementById("#nextBtn");

const max = contentImages.length;

let currentIndex = 0;

function nextImage () {

    contentImages[currentIndex]
        .classList.remove("selected");

    currentIndex++;

    if(currentIndex >= max)
        currentIndex = 0;

        console.log(currentIndex)

    contentImages[currentIndex]
        .classList.add("selected");
}
