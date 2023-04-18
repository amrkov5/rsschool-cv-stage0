function sentence(list) {
    keysArr = []
    list.forEach(element => {
            keysArr.push(Object.keys(element))
    });
    let result = ''
    keysArr.sort((a,b) => a-b)
    for(let i = 0; i < keysArr.length;i++) {
        let p = list.filter(el => el[keysArr[i]])
        result += `${p[0][keysArr[i]]} `
    }
    console.log(result.trim())
    // list.forEach(el => 
    //     objList = el)

    // for(let i = 0; i < keysArr.length;i++) {
    //     console.log(list[keysArr[i]])
    // }
    
}

list = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ]

sentence(list)