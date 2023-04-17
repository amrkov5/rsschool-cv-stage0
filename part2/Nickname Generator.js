function nicknameGenerator(name){
    const vowel = 'aeiou'.split('')
    if (name.length < 4) {
        return 'Error: Name too short'
    }
    if (vowel.includes(name[3])) {
        return name.slice(0,3)
    } else {return name.slice(0,2)}
  }