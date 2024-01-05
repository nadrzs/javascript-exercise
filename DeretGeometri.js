function deretGeometri(arr) {
    let result
    let divide = arr[1] / arr[0]

    for(let i = 0; i < arr.length - 1; i++) {
        result = arr[i] * divide === arr[i + 1] ? true : false

        if (!result) {
            break;
        }
    }
    return result
}

console.log(deretGeometri([1, 3, 9, 27, 81]))
console.log(deretGeometri([2, 4, 8, 16, 32]))
console.log(deretGeometri([2, 4, 6, 8]))
console.log(deretGeometri([2, 6, 18, 54]))
console.log(deretGeometri([1, 2, 3, 4, 7, 9]))