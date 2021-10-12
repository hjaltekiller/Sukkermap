var popupBoxContainer = document.getElementById("popupBox");
var btnOpen = document.getElementById("btnOpen");
var xClose = document.getElementById("xBtn");
var colorInp = document.getElementById("colorInp");
var hjælpBtn = document.getElementById("hjælpBtn");
var hjælpereNavigation = document.getElementById("hjælpereNavigation");
var hjælpereContainer = document.getElementById("hjælpereContainer");
var hjælperekoordinater = document.getElementById("hjælperekoordinater");

var farveInp = "rgb(255,0,0)";
var farveSelect = document.getElementById("farveRute");
var option;
var hastighedPil = document.getElementById("hastighedPil").value;

class PopupBox {
    constructor() {}

    loop() {
        if (mouseIsPressed && hjælpereNavigation.style.display == "block") {
            hjælpereNavigation.style.display = "";
            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSep8enf79hcOt7ceU7cjjck3FUsWZuqNVXYul5Xf5ZrG9XI3g/viewform?usp=pp_url&entry.1017160509=" +
                    `Koordinater(${floor(mouseX)}, ${floor(mouseY)})`,
                "_blank"
            );
        }
    }
}

// Hastighed på pilen
document.getElementById("hastighedPil").onchange = function () {
    hastighedPil = document.getElementById("hastighedPil").value;
};

// skifter farve på ruten iforhold til select
farveSelect.onchange = function () {
    farveSelect = document.getElementById("farveRute");
    option = farveSelect.options[farveSelect.selectedIndex];

    if (option.value == "pink") {
        farveInp = "rgb(255, 0, 200)";
        // document.getElementById("colorInp").style.display = "none";
    } else if (option.value == "blå") {
        farveInp = "rgb(0, 0, 200)";
        // document.getElementById("colorInp").style.display = "none";
    } else if (option.value == "grøn") {
        farveInp = "rgb(0, 200, 0)";
        // document.getElementById("colorInp").style.display = "none";
    } else if (option.value == "rød") {
        farveInp = "rgb(200, 0, 0)";
        // document.getElementById("colorInp").style.display = "none";
    } else if (option.value == "orange") {
        farveInp = "rgb(255,165,0)";
        // document.getElementById("colorInp").style.display = "none";
    } else if (option.value == "anden farve") {
        // document.getElementById("colorInp").style.display = "inline";
        document.getElementById("colorInp").click();
    }
};

//skifter farve iforhold til inputtet
colorInp.onchange = function () {
    farveInp = colorInp.value;
};

//Hvis man trykker på indstilling ikonet, så kommer der en popup box
btnOpen.onclick = function () {
    popupBoxContainer.style.display = "block";
};

//Hvis man klikker på kryds ikonet, så lukker den
xClose.onclick = function () {
    popupBoxContainer.style.display = "";
};

// Hvis man klikker udenfor popup Boxen, så lukker den
window.onclick = function (event) {
    if (event.target == popupBoxContainer) {
        popupBoxContainer.style.display = "";
    } else if (event.target == hjælpereContainer) {
        hjælpereContainer.style.display = "";
    }
};

//Knap for indstillinger til hjælp med kordinatter
hjælpBtn.onclick = function () {
    popupBoxContainer.style.display = "";
    hjælpereNavigation.style.display = "block";
};
