function killer(suspectInfo, dead) {
    suspectInfo['countDead'] = 0
    let killerFounded = ''
    for (key in suspectInfo) {
        let count = 0
        for (let i = 0; i<dead.length; i++) {
            if (Object.values(suspectInfo[key]).includes(dead[i])) {count++}
        }
        if (suspectInfo['countDead'] < count) {
            killerFounded = key
            suspectInfo['countDead'] = count
        }
    }
    console.log(killerFounded)
}

const suspectInfo = 
    {'James': ['Jacob', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas','Bill'],
    'Peter': ['Lucy', 'Kyle']}

const dead = 
    ['Lucas', 'Bill']

killer(suspectInfo, dead)