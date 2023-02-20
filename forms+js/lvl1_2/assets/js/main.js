console.log("hello");




const d = new Date()
let year2 = d.getFullYear();

const jahr = document.getElementById('year').value

console.log(jahr)

function age() {
    document.getElementById('here').innerHTML = year2-jahr
}