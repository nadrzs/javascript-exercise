function digitPerkalianMinimum(angka) {
    let min = Infinity

    for(let i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            const faktor1 = String(i)
            const faktor2 = String(angka / i)

            const jumlahDigit = faktor1.length + faktor2.length

            min = Math.min(min, jumlahDigit)
        }
    }

    return min
}

console.log(digitPerkalianMinimum(24))
console.log(digitPerkalianMinimum(90))
console.log(digitPerkalianMinimum(20))
console.log(digitPerkalianMinimum(179))
console.log(digitPerkalianMinimum(1))