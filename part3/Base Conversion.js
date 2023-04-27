function convert(input, source, target) {
    console.log('input', input, typeof input)
    let result = ''
    let inputNum = ''
    if (source.length == 10) {
        for (let i = 0; i<input.length; i++) {
            inputNum += source.indexOf(input[i])
        }
        console.log('inputNum',inputNum)
        do {
            result = target[inputNum % target.length] + result
            console.log('%',inputNum % target.length)
            inputNum = Math.floor(inputNum / target.length)
            console.log('result',result)
        }
        while (inputNum > 0) 
        return result
    } else {
        let decimal = 0
        for (let i = 0; i<input.length; i++) {
            decimal +=Math.pow(source.length,input.length - i - 1) * source.indexOf(input[i])
        }
        if (target.length == 10) {
            return decimal
        } else return convert(decimal.toString(), Alphabet.DECIMAL, target)
    }
}

var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
// console.log('check',Math.floor('0' / Alphabet['ALPHA'].length))
// convert('hello',Alphabet.ALPHA_LOWER,Alphabet.HEXA_DECIMAL)
// convert('1010',Alphabet.BINARY,Alphabet.DECIMAL)
// convert('0',Alphabet.DECIMAL,Alphabet.ALPHA)
// convert('15',Alphabet.DECIMAL,Alphabet.OCTAL)
// convert('27',Alphabet.DECIMAL,Alphabet.ALPHA_LOWER)
console.log(convert('1010',Alphabet.BINARY,Alphabet.DECIMAL))
// let a = Math.pow(26,0)*14
// let b = Math.pow(26,1)*11
// let c = Math.pow(26,2)*11
// let d = Math.pow(26,3)*4
// let e = Math.pow(26,4)*7

// console.log('hello'.toString(10))