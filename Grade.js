const dbSiswa = []  //id, nama, class, score

function inputSiswa(siswa) {
    let indexTerakhir = dbSiswa[dbSiswa.length - 1]
    let siswaID = 1

    if(indexTerakhir !== undefined) {
        siswaID = indexTerakhir.id + 1
    }

    siswa.id = siswaID
    
    let score = siswa.score

    if(score >= 90) {
        siswa.grade = "A"
    }
    else if(score >= 80 && score < 90) {
        siswa.grade = "B"
    }
    else if(score >= 70 && score < 80) {
        siswa.grade = "C"
    }
    else if(score >= 60 && score < 70) {
        siswa.grade = "D"
    }
    else {
        siswa.grade = "E"
    }
    dbSiswa.push(siswa)
}

function groupByClass() {
    let grouped = {}

    dbSiswa.forEach(function(data) {
        grouped[data.class] = grouped[data.class] || []

        grouped[data.class].push({
            nama: data.nama,
            class: data.class,
            score: data.score,
            id: data.id,
            grade: data.grade 
        })
    })

    return grouped
}


inputSiswa({ nama: 'Dimitri', class: 'foxes', score: 90 }) 
inputSiswa({ nama: 'Alexei', class: 'tiger', score: 78 })
inputSiswa({ nama: 'Sergei', class: 'wolves', score: 85 })

const result = groupByClass()

console.log(dbSiswa)
console.log(result)

/*
dbSiswa, ambil data index terakhir
kalo datanya ada, ambil object id
idSiswa = objSiswa.id terakhir + 1
*/