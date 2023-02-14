let activeImg = 0;

const spans= document.querySelectorAll(".material-symbols-outlined");

const navPrev = document.querySelector("[data-nav-prev]");
const navNext = document.querySelector("[data-nav-next]");

const slider = document.querySelectorAll('[data-slider]');
const newSlider = [...slider];

const sliderLeft = document.querySelector('.img-left');
const sliderCenter = document.querySelector('.img-center');
const sliderRight = document.querySelector('.img-right');

const content = document.querySelector("[data-content]");

const images = [
    '/assets/images_main/home library homepage mockup.jpg',
    '/assets/images_main/mocakmokap.jpg',
    '/assets/images_main/rtmokap.jpg'
];
const imagesLeft = [
    '/assets/images_main/mocakmokap.jpg',
    '/assets/images_main/rtmokap.jpg',
    '/assets/images_main/home library homepage mockup.jpg'
];
const imagesRight = [
    '/assets/images_main/rtmokap.jpg',
    '/assets/images_main/home library homepage mockup.jpg',
    '/assets/images_main/mocakmokap.jpg'
];

spans.forEach((span, index) => {
    span.addEventListener("click", () => {
        if (span === navNext) {
            activeImg++;
            if (activeImg === images.length) {
                activeImg = 0;
            }
            sliderCenter.src = images[activeImg];

            if (activeImg === imagesLeft.length) {
                activeImg = 0;
            }
            sliderLeft.src = imagesLeft[activeImg];

            if (activeImg === imagesRight.length) {
                activeImg = 0;
            }
            sliderRight.src = imagesRight[activeImg];

        } else if (span === navPrev) {
            activeImg--;
            if (activeImg === -1) {
                activeImg = images.length - 1;
            }
            sliderCenter.src = images[activeImg];

            if (activeImg === -1) {
                activeImg = imagesLeft.length - 1;
            }
            sliderLeft.src = imagesLeft[activeImg];

            if (activeImg === -1) {
                activeImg = imagesRight.length - 1;
            }
            sliderRight.src = imagesRight[activeImg];
        }

        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 39) {
                activeImg++;
                if(activeImg === images.length) {
                    activeImg = 0;
                }
                sliderCenter.src = images[activeImg];
            } else if (e.keyCode === 37) {
                activeImg--;
                if(activeImg === -1) {
                    activeImg = images.length - 1;
                }
                sliderCenter.src = images[activeImg];
            }
        })
    })
})



const titles = ["Home library", "Mocak Museum of Contemporary Art in Cracow", "Online hadmade products store"];

const addInfo = function() {
    content.textContent = titles[activeImg];
}
content.addEventListener("mouseover", addInfo);

const subInfo = function() {

    content.textContent = "";


    console.log("czyszcze");
}
content.addEventListener("mouseout", subInfo);

const port = process.env.PORT || 3000;

function onclickHandler() {
    if(titles[activeImg] === titles[0]) {
        location.href="locationAdress/homelibrary";
    } else if (titles[activeImg] === titles[1]) {
        location.href="locationAdress/mocak";
    } else if (titles[activeImg] === titles[2]) {
        location.href="locationAdress/handmade";
    }

}