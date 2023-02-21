console.log("hello")

const one = document.getElementById('age1');
const two = document.getElementById('age2');

console.log(one)
console.log(two)

function diff() {
    document.getElementById('here').innerHTML = one.value-two.value
}