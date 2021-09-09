// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let i = 0;
let text = 'Software Engineer.';
let speed = 120;

function typeWriter() {
    if (i < text.length && document.getElementById("typewriter-effect") != null) {
        document.getElementById("typewriter-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});