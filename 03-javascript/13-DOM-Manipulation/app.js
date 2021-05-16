// eventListener
// innerHTML
// textContent
// value
// getAttribute()
// setAttribute()
// href
// src
// parentElement
// children
// getComputedStyle()
// classList
// classList.add()
// classList.remove()

const btn = document.querySelector('button');
const reset = document.querySelector('#reset');
const heading = document.querySelector('h1');

// btn.addEventListener('click', function () {
//     heading.style.color = 'red';
//     heading.style.textAlign = 'center';
// });

btn.addEventListener('click', headingChange);

function headingChange() {
    heading.classList.add('active');
}

reset.addEventListener('click', function () {
    heading.classList.remove('active');
});

const img = document.querySelector('img');

const list = document.querySelector('ul');

const text = document.querySelector('#text');
const email = document.querySelector('#email');
const submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('hello');
});

reset.setAttribute('class', reset.getAttribute('class') + ' ' + 'newClass');
