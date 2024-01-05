function naikAngkot(listPenumpang) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F']
    const biayaPerRute = 2000
    const result = []

    listPenumpang.forEach(penumpang => {
        const objPenumpang = {}

        objPenumpang['penumpang'] = penumpang[0]
        objPenumpang['naikDari'] = penumpang[1]
        objPenumpang['tujuan'] = penumpang[2]
        
        const indexNaikDari = rute.indexOf(penumpang[1])
        const indexTujuan = rute.indexOf(penumpang[2])

        objPenumpang['bayar'] = (indexTujuan - indexNaikDari) * biayaPerRute
        result.push(objPenumpang)
    })

    return result
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
/* Pseudocode
1. Si A naik angkot dari B hingga F
2. Si A naik dari B
3. Si A turun di F
4. Jarak dari B ke F adalah 4 (B - C - D - E - F)
5. Jumlah bayar dari A adalah 2000 * 4 = 8000

Function naikAngkot(listPenumpang):
    Define rute = ['A', 'B', 'C', 'D', 'E', 'F']
    Define biayaPerRute = 2000
    Define result = []

    For each penumpang in listPenumpang:
        Define objPenumpang = {}
        Set objPenumpang['penumpang'] = penumpang[0]
        Set objPenumpang['naikDari'] = penumpang[1]
        Set objPenumpang['tujuan'] = penumpang[2]

        Define indexNaikDari = IndexOf(rute, penumpang[1])
        Define indexTujuan = IndexOf(rute, penumpang[2])
        
        Set objPenumpang['bayar'] = (indexTujuan - indexNaikDari) * biayaPerRute

        Add objPenumpang to result

    Return result

    Hasil: 
    [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
*/