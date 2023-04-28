function bingo(ticket, win){
    let count = 0
    ticket.forEach(element => {
        for (let i = 0; i<element[0].length; i++) {
            if (String.fromCharCode(element[1]) == element[0][i]) {
                count++
                console.log('count', count)
                break
            }
        }        
    });
    if(count >= win) return 'Winner!'
    return 'Loser!'
}

ticket = [['ABC', 65], ['HGR', 74], ['BYHT', 74]]
win = 2

console.log(bingo(ticket, win))