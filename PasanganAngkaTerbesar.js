function pasanganTerbesar(num) {
    let temp = num.toString()
    let bigNum = Number.MIN_VALUE

    for(let i = 0; i < temp.length - 1; i++) {
        let str = `${temp[i]}${temp[i + 1]}`
        let temp2 = Number(str)

        if(temp2 > bigNum) {
            bigNum = temp2
        }
    }

    return bigNum
}

console.log(pasanganTerbesar(641573))       // 73
console.log(pasanganTerbesar(12783456))     // 83
console.log(pasanganTerbesar(910233))       // 91
console.log(pasanganTerbesar(71856421))     // 85
console.log(pasanganTerbesar(79918293))     // 99

/**
 * Pseudocode
 * 1. Menginput number
 * 2. Ubah number jadi string
 * 3. Buat penampungan angka terbesar dengan initial value = -1 (Minimum number)
 * 4. Ambil pasangan angka index saat ini sampai index saat ini ditambah 1 (length of string minimal 2)
 * 5. Compare nilai saat ini dengan nilai tampungan angka terbesar
 * 6. Jika nilai saat ini > dari tampungan angka terbesar, maka angka terbesar di ganti dengan angka saat ini
 * 7. Lakukan pengulagan (Step 4) sampai index terakhir
 * 8. Print
 * 
 * Sebuah function memiliki parameter - parameter scope hanya di dalam function
 * Bisa lebih dari 1 parameter
 * Setiap function, bisa me-return hasil ataupun tidak me-return hasil
 */