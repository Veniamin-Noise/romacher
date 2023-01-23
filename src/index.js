function decode(expr) {
    let result = ''
    
    morseCode = expr.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').split(' ')
    for (let num = 0; num < morseCode.length; num++) {
        result = result + MORSE_TABLE[morseCode[num]]
    }
    return result
}

module.exports = {
    decode
}
