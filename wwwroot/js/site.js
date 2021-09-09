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

/* Switching between active tab underline
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const current = document.querySelector('.tab.active');
        current.classList.remove('active');
        this.classList.add('active');
        //event.preventDefault(); // Prevents form from being submitted
    })
})
*/

/*let links = document.querySelectorAll('a');
if (links) {
    links.forEach((link) => {
        link.onclick = (event) => {
            let body = document.querySelector('body');
            let html = document.querySelector('html');
            event.preventDefault();
            setTimeout(function () {
                if (body.classList.contains('fade-out')) {
                    console.log('switching..');
                    if (!event.srcElement.parentElement.href) {
                        window.location = event.srcElement.href;
                    } else {
                        window.location = event.srcElement.parentElement.href;
                    }
                } else {
                    console.log('error', event.srcElement.parentElement.href);
                }
            }, 500);
            body.classList.add('fade-out');
            html.classList.add('fade-out');
        }
    });
} */