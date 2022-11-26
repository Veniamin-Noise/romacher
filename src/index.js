function morseCodeDecoder(code) {
    let alfabeto = {
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
    
    let result = ''
    
    morseCode = code.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').split(' ')
    for (let num = 0; num < morseCode.length; num++) {
        result = result + alfabeto[morseCode[num]]
    }
    return result
}
