function whoseBicycle(...diary) {
    const result = []
    let count = 0
    diary.forEach(element => {
        let sum = 0
        for (key in element) {
            sum += element[key]
        }
        result[count] = sum
        count++
    });
    let count_same = []
    for (let i = 0; i<result.length; i++) {
      if (result[i] == Math.max(...result)) {
        count_same.push(i)
      }
    }
    console.log(count_same)
    let final = 0
    if (count_same.length > 1) {
      const age = Object.values(ageTable)
      console.log(age)
      for (let i = 0; i < count_same.length; i++) {
        if (age[count_same[i]] > age[count_same[i+1]]) {
          final = count_same[i+1]
          console.log(final)
        }
      }
    } else {final = count_same[0]}
    if (final == 0) {
      console.log('I need to buy a bicycle for my first son.')
    } else if (final == 1) {
      console.log('I need to buy a bicycle for my second son.')
    } else {console.log('I need to buy a bicycle for my third son.')}
    console.log(result)
    
}

const diary1 = 
  {
    'algebra': 6,
    'history': 9,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }
const diary2 = 
  {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }
const diary3 = 
  {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
  }

  const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8
  }

  whoseBicycle(diary1,diary2,diary3)