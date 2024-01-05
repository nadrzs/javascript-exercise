function tukarBesarKecil(kalimat) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz'
    const split = String(kalimat).split('')

    const change = split.map((c) => {
        const index = alphabet.indexOf(c)

        if(index < 0) {
            return c
        }
        if(index == 26) {
            return alphabet[index]
        }
        if(index > 26) {
            return alphabet[index - 26 - 1]
        }
        return alphabet[index + 26 + 1]
    })
    return change.join('')
}

console.log(tukarBesarKecil('Hello World'))
console.log(tukarBesarKecil('I aM aLAY'))
console.log(tukarBesarKecil('My Name is Bond!!'))
console.log(tukarBesarKecil('IT sHOULD bE me'))
console.log(tukarBesarKecil('001-A-3-5TrdYW'))