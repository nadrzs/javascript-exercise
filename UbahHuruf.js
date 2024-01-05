function ubahHuruf(kata) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''

    for(let i = 0; i < kata.length; i++) {
        let temp = kata[i]
        let index = alphabet.indexOf(temp) + 1

        if(alphabet[index]) {
            hasil += alphabet[index]
        }
        else {
            hasil += alphabet[0]
        }
    }

    return hasil
}

console.log(ubahHuruf('woz'))
console.log(ubahHuruf('developer'))
console.log(ubahHuruf('javascript'))
console.log(ubahHuruf('keren'))
console.log(ubahHuruf('semangat'))

//looping -> find -> if -> index + 1
/**
 * String punya index (index pakai angka dimulai dari 0)
 */