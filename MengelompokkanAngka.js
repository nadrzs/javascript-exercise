function mengelompokkanAngka(arr) {
    let odd = [];
    let even = [];
    let multiple3 = [];
    let result = [even, odd, multiple3];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0) {
            multiple3.push(arr[i]);
        }
        else if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
        else if(arr[i] % 2 !== 0) {
             odd.push(arr[i]);
        }
    }

    console.log(result);
}

console.log(mengelompokkanAngka([2, 4, 6])); 
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

/**
 * Pseudocode
 * 
 * 1. Meng-input beberapa angka
 * 2. 
 */