console.log("hello")

const one = document.getElementById('age1').value
const two = document.getElementById('age2').value

console.log(one)
console.log(two)

function diff() {
    document.getElementById('here').innerHTML = one-two
}