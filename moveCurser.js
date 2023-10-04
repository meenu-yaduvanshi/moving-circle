var circleMove = document.querySelector(".circle");
document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "w" || e.key === "W") {
        let currTop;
        if (!circleMove.style.top) {
            currTop = 0;
        }
        else {
            currTop = parseInt(circleMove.style.top);
        }
        let newTop = currTop - 20;
        circleMove.style.top = newTop + "px";
    }

    else if (e.key === "s" || e.key === "S") {
        let currTop;
        if (!circleMove.style.top) {
            currTop = 0;
        }
        else {
            currTop = parseInt(circleMove.style.top);
        }
        let newTop = currTop + 20;
        circleMove.style.top = newTop + "px";
    }

    else if (e.key === "a" || e.key === "A") {
        let currLeft;
        if (!circleMove.style.left) {
            currLeft = 0;
        }
        else {
            currLeft = parseInt(circleMove.style.left);
        }
        let newLeft = currLeft - 20;
        circleMove.style.left = newLeft + "px";
    }

    else if (e.key === "d" || e.key === "D") {
        let currLeft;
        if (!circleMove.style.left) {
            currLeft = 0;
        }
        else {
            currLeft = parseInt(circleMove.style.left);
        }
        let newLeft = currLeft + 20;
        circleMove.style.left = newLeft + "px";
    }
});
