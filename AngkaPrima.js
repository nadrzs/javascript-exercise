function angkaPrima(angka) {
    let check = true

    for(let i = angka - 1; i > 1; i--) {
        if(angka % i === 0) {
            check = false
        }
    }

    return check
}

console.log(angkaPrima(3))
console.log(angkaPrima(7))
console.log(angkaPrima(6))
console.log(angkaPrima(23))
console.log(angkaPrima(33))