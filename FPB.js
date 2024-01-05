function fpb(angka1, angka2) {
    let temp1 = []
    let temp2 = []
    let result = 0

    for(let i = 1; i <= angka1; i++) {
        if(angka1 % i === 0) {
            temp1.push(i)
        }
    }

    for(let i = 1; i <= angka2; i++) {
        if(angka2 % i === 0) {
            temp2.push(i)
        }
    }

    let temp3 = -1
    console.log(temp1)
    console.log(temp2)

    for(let i = 0; i < temp1.length; i++) {
        let hasil = temp2.find((value, j) => {
            console.log('find: ', value, temp1[i])

            return value === temp1[i]
        })

        if(hasil > temp3) {
            temp3 = hasil
        }
    }
    // console.log(temp3)
    // console.log(temp2)
}

console.log(fpb(12, 16))
// console.log(fpb(50, 40))
// console.log(fpb(22, 99))
// console.log(fpb(24, 36))
// console.log(fpb(17, 23))

/**
 * FPB
 * 12 = 1, 2, 3, 4, 6, 12
 * 16 = 1, 2, 4, 8, 16
 */