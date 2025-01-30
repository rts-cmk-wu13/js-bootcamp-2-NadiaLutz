
function skjulElementViaCssSelector(cssSelector) {
    var element = document.querySelector(cssSelector);
    if (element) {
        element.style.display = "none";
    }
}