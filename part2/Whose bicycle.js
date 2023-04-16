function whoseBicycle(...diary) {
    const result = {}
    let count = 1
    diary.forEach(element => {
        let sum = 0
        for (key in element) {
            sum += element[key]
        }
        result[count] = sum
        count++
    });
    console.log(result)
    
}

const diary1 = 
  {
    'algebra': 6,
    'history': 7,
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