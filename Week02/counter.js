// sachindabas
// adopted from cs50 web development

let counter = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});

// function to count
function count() {
    counter++;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }
    document.querySelector('h1').innerHTML = counter;
}
