const element = document.getElementById("button");

function myFunction() {
    document.getElementById("text").innerHTML = "Goodbye World";
}

element.addEventListener("click", myFunction);

