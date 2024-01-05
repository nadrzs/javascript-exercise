function cariMean(arr) {
    let newNum = 0

    for(let i = 0; i < arr.length; i++) {
        newNum += arr[i]
    }
    return Math.round(newNum / arr.length)
}

console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7]))

/**
 * Pseudocode
 * 
 * 1. Meng-input 5 number
 * 2. Ubah number menjadi string
 * 3. Buat penampungan angka tengah
 * 4. Compare nilai saat ini dengan nilai tampungan angka tengah
 * 5. Lakukan pengulangan sampai index terakhir
 * 
 */