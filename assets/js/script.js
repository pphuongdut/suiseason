// Scroll Icon
const icon = document.getElementById('scroll-icon');
const typingSpeed = 100;

// Function to update the icon position based on scroll percentage
const updateIconPosition = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / totalHeight) * 100;

    // Update the top position of the icon based on the scroll percentage
    icon.style.top = `${scrollPercentage}%`;
};

// Attach the function to the 'scroll' event
window.addEventListener('scroll', updateIconPosition);

// Call the function initially to set the initial position of the icon
updateIconPosition();

// Header Typewriter
const headerDescription = document.getElementById('header-description');
const aText = [
    `$SOSE - a token marking a new explosion milestone of Meme season on Solana. 100% community-led, no roadmap, no real value. Don't jump in if you're not feeling good about it!"`,
];

let typewriter = () => {
    let iIndex = 0;
    let iTextPos = 0;
    let iArrLength = aText[0].length;
    let iScrollAt = 20;
    let sContents = '';

    let printText = () => {
        sContents = ' ';
        let iRow = Math.max(0, iIndex - iScrollAt);

        while (iRow < iIndex) {
            sContents += aText[iRow++] + ' ';
        }

        headerDescription.innerHTML =
            sContents + aText[iIndex].substring(0, iTextPos) + '|';

        if (iTextPos++ === iArrLength) {
            iTextPos = 0;
            iIndex++;

            if (iIndex !== aText.length) {
                iArrLength = aText[iIndex].length;
                setTimeout(printText, typingSpeed);
            }
        } else {
            setTimeout(printText, 50);
        }
    };

    printText();
};

typewriter();
