function groupAnimals(animals) {
    let temp = [[]]
    let kata = 0

    animals.sort()
    temp[0].push(animals[0])

    for(let i = 1; i < animals.length; i++) {
        if(animals[i][0] === temp[kata][0][0]) {
            temp[kata].unshift(animals[i])
        }
        else {
            kata++
            temp[kata] = [animals[i]]
        }
    }

    return temp
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))