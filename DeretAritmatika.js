function deretAritmatika(arr) {
    let result

    for(let i = 0; i < arr.length - 1; i++) {
        result = arr[i+1] - arr[i] === arr[0] ? true : false;

        if ( !result) {
            break;
        }
    }
    return result
}

console.log(deretAritmatika([1, 2, 3, 4, 5, 6]))
console.log(deretAritmatika([2, 4, 6, 12, 24]))
console.log(deretAritmatika([2, 4, 6, 8]))
console.log(deretAritmatika([2, 6, 18, 54]))
console.log(deretAritmatika([1, 2, 3, 4, 7, 9]))