function targetTerdekat(arr) {
    if(arr.indexOf('x') == -1) {
        return 0
    }
    let charO = arr.indexOf('o') //index ke-2
    let charX = arr.indexOf('x', charO) > 0 ? arr.indexOf('x', charO) : arr.indexOf('x')

    if(arr.indexOf('x', charO) > 0 ) {
        charX = arr.indexOf('x', charO)
    }
    else {
        charX = arr.indexOf('x')
        console.log(charX)
    }
    
    // console.log(arr.indexOf('x', charO), charO)
    // return charX - charO > 0 ? (charX - charO) : ((arr.length - 1) - charO) + charX
    if(charX - charO > 0) {
        return charX - charO
    }
    else {
        return charO - charX
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2