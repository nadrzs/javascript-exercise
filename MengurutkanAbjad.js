function urutkanAbjad(str) {
    const word = String(str).split('').sort().join('')

    return word
}

console.log(urutkanAbjad('hello'))
console.log(urutkanAbjad('truncate'))
console.log(urutkanAbjad('developer'))
console.log(urutkanAbjad('software'))
console.log(urutkanAbjad('aegis'))