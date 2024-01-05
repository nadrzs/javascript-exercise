function cariMedian(arr) {
    let newNum = 0
    let len = arr.length

    if(len % 2 === 0) {
        newNum = (arr [len / 2 - 2] + arr[len / 2]) / 2
    }
    else {
        newNum = arr[(len - 1) / 2]
    }

    return newNum
}

console.log(cariMedian([1, 2, 3, 4, 5]))
console.log(cariMedian([1, 3, 4, 10, 12, 13]))
console.log(cariMedian([3, 4, 7, 6, 10]))
console.log(cariMedian([1, 3, 3]))
console.log(cariMedian([7, 7, 8, 8]))