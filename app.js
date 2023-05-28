// const spans= document.querySelectorAll('progress-bar span');

// spans.forEach((span) => {
//     span.style.width = span.dataset.width;
//     span.innerHTML = span.dataset.width;
// });

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web-Developer";
            }, 1000);
            setTimeout(() => {
                text.textContent = "Fronted Developer";
            }, 4000);
            // setTimeout(() => {
            //     text.textContent = "Good Problem Solver";
            // }, 6000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);