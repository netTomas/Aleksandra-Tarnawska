const spnText = document.querySelector("[data-text]");
const spnCursor = document.querySelector("[data-cursor]");
const txt = ['Hi, I am Aleksandra Tarnawska,', 'digital designer.'];

const locationAdress = "https://aleksandratarnawska.herokuapp.com";

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {
    if(activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if(activeLetter === txt[activeText].length) {
        activeText++;
        if(activeText === txt.length) return;
        return setTimeout(() => {
            spnText.textContent = '';
            spnText.textContent += txt[activeText];
            setTimeout(openStart, 2000);

        }, 2000);
    }

    setTimeout(addLetter, 100);
}
addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('.active');

}
setTimeout(cursorAnimation, 400);


const openStart = () => {
    location.href='locationAdress/homepage';
}
