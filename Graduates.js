const dbSiswa = []  //name, score, class
function graduates (students) {
    let score = students.score

    if(score >= 75) {
        students.grade = "Lulus"
    }
    else {
        students.grade = "Tidak Lulus"
    }

    dbSiswa.push(students)
}

function groupByClass() {
    let grouped = {}

    dbSiswa.forEach(function(data) {
        grouped[data.class] = grouped[data.class] || []

        grouped[data.class].push({
            nama: data.nama,
            class: data.class,
            score: data.score,
            grade: data.grade 
        })
    })

    return grouped
}

graduates({ nama: 'Dimitri', class: 'foxes', score: 90 }) 
graduates({ nama: 'Alexei', class: 'tiger', score: 71 })
graduates({ nama: 'Sergei', class: 'wolves', score: 85 })

const result = groupByClass()

console.log(dbSiswa)
console.log(result)


/* Pseudocode

1. Masukkan database students
2. Menampilkan database students sesuai class
3. Jika score > 75 maka dimunculkan
4. Jika score < 75 maka tidak dimunculkan

*/