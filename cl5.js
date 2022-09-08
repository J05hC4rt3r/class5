// HTML Element Selectors
const body = document.body
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");


input.addEventListener("focusin", focusInput);

input.addEventListener("focusout", endFocus);

overlay.addEventListener("click", endFocus);

form.addEventListener("submit", createLink)

// Function

// Adds "focus-form" class to body
function focusInput() {
    body.classList.add("focus-form");
}

// Remove "focus-form" class from body
function endFocus() {
    if (body.classList.contains("focus-form"))
        body.classList.remove("focus-form");
}

const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

form.addEventListener("submit", createLink);

function createLink(e) {
    e.preventDefault();

    const url = input.value;
}

function createLink(e) {
    const linkContainer = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.className = "link";
    newLink.innerText = url;
    newLink.href = url;
    newLink.target = "_blank";

    linkContainer.appendChild(newLink);
    linkList.appendChild(linkContainer);

    form.reset();
}