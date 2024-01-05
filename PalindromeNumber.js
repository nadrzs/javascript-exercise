function angkaPalindrome(num) {
    let leftSide = 1
    let rightSide = 2

    while (leftSide !== rightSide) {
        num++

        let string = num.toString()

        leftSide = string.slice(0, Math.ceil(string.length / 2))
        rightSide = string.slice(Math.floor(string.length / 2), string.length).split('').reverse().join('')
    }
    return num
}

console.log(angkaPalindrome(8))
console.log(angkaPalindrome(10))
console.log(angkaPalindrome(117))
console.log(angkaPalindrome(175))
console.log(angkaPalindrome(1000))