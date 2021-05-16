// getElementByTagName

// const btn = document.getElementsByTagName('button');
// const h1 = document.getElementById('heading');

// document.querySelector
// document.querySelectorALl

const btn = document.querySelectorAll('button');

for (let el of btn) {
    el.innerHTML = "I'm changed";
}
