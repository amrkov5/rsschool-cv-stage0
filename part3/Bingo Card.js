function getCard() {
    let result = []
    let bingo = 'BINGO'
    let min = 1
    let max = 15
    for (let i = 0; i<bingo.length; i++) {
        console.log('min', min, '\n', 'max', max)
        let k = 0
        if (bingo[i] == 'N'){k++}
        while (k<5) {
            rand = Math.floor(Math.random() * (max - min + 1) + min)
            while (result.includes(bingo[i] + rand)) {
                rand = Math.floor(Math.random() * (max - min + 1) + min)
            }
            result.push(bingo[i] + rand)
            k++
        }
        min +=15
        max +=15
    }
  console.log(result)
    return result
}

getCard()