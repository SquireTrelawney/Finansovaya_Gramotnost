window.addEventListener(`resize`, event => {
    if (window.innerWidth < 1480) {

        document.getElementsByClassName("header").item(0).style.display = "block";
        document.getElementsByClassName("c").item(0).style.height = "50%";
        document.getElementsByClassName("menu").item(0).style.height = "50%";
        var a = document.getElementsByClassName("menu-item");
        for (i in a) {
            a.item(i).style.fontSize = "86%";
        }
    } else {
        document.getElementsByClassName("header").item(0).style.display = "flex";
        document.getElementsByClassName("c").item(0).style.height = "100%";
        document.getElementsByClassName("menu").item(0).style.height = "100%";
        var a = document.getElementsByClassName("menu-item");
        for (i in a) {
            a.item(i).style.fontSize = "100%";
        }
    }
}, false);
