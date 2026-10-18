let div = document.querySelector("div");

setTimeout(() => {
    div.classList.add("moveRight");
    setTimeout(() => {
        div.classList.add("moveDown");
        setTimeout(() => {
            div.classList.add("circle");
            setTimeout(() => {
                div.classList.add("changeColor");
                setTimeout(() => {
                    div.classList.remove("changeColor");
                    setTimeout(() => {
                        div.classList.remove("circle");
                        setTimeout(() => {
                            div.classList.remove("moveDown");
                            setTimeout(() => {
                                div.classList.remove("moveRight");
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}, 500);