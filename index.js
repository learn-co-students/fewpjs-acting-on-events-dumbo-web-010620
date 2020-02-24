// Your code here

let dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "red";


document.addEventListener("keydown", function (e) {
    console.log(e.key);
});


const moveDodgerLeft = () => {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


const moveDodgerRight = () => {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
}


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});


const moveDodgerDown = () => {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(upNumbers, 10);

    dodger.style.bottom = `${bottom - 1}px`;
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
})


const moveDodgerUp = () => {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(upNumbers, 10);

    dodger.style.bottom = `${bottom + 1}px`;
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
})