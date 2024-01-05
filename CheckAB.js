function checkAB(num) {
    for (let i  = 0; i < num.length; i++) {
        if(num[i] === "a" && num[i + 4] === "b") {
            return true
        }
        else if(num[i] === "b" && num[i + 4] === "a") {
            return true
        }
    }
    return false
}

console.log(checkAB('lane borrowed'))
console.log(checkAB('i am sick'))
console.log(checkAB('you are boring'))
console.log(checkAB('barbarian'))
console.log(checkAB('bacon and meat'))