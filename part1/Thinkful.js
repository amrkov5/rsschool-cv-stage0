function updateLight(current) {
    let next = ''
    current == 'green' ? next = 'yellow' : current == 'yellow' ? next = 'red' : next = 'green'
    return next
  }