var whatTimeIsIt = function(angle) {
    let hour = ''
    let minute = ''
    hour = Math.floor((angle *2) / 60)
    minute = Math.floor((angle*2) % 60)
    if (angle < 30) {
        hour += 12
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour
    }
    if (minute.toString().length == 1) {
        minute = '0'+ minute
    }
    console.log('hour', hour, typeof hour)
    console.log('minute', minute, typeof minute)
    
    return `${hour}:${minute}`
  }

whatTimeIsIt(15)