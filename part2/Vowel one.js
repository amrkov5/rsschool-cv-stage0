function vowelOne(s){
    console.log(s.toLowerCase().split('').map(el => 'aeiou'.split('').includes(el)? el = 1 : el = 0).join(''))
  }

  vowelOne('vowelOne')