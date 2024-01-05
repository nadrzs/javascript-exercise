const kata = "Hello World!"
let reverseKata = ""

for(let i = kata.length - 1; i >= 0; i--) {
    reverseKata += kata[i]
}

console.log(reverseKata)