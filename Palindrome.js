function palindrome(kata) {
    let temp = kata.length - 1

    for(let i = 0; i < kata.length; i++) {
        if(kata[i] != kata[temp]) {
            return false
        }
        temp--
    }
    return true
}

console.log(palindrome('katak'))
console.log(palindrome('blanket'))
console.log(palindrome('civic'))
console.log(palindrome('kasur rusak'))
console.log(palindrome('mister'))