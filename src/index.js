const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    }

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
