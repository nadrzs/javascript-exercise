function changeMe(arr) {
    if(arr.length === 0) {
        console.log('')
    }

    var result = {}

    for(var i = 0; i < arr.length; i++) {
        result.firstName = arr[i][0]
        result.lastName = arr[i][1]
        result.gender = arr[i][2]

        if(arr[i][3] === undefined) {
            result.age = 'Invalid Birth Year'
        }
        else {
            result.age = 2023 - arr[i][3]
        }
        var tagName = (i + 1) + '. ' + result.firstName + ' ' + result.lastName

        console.log(tagName)
        console.log(result)
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
changeMe([])