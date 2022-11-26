function toNumber(code) {
    codeNumber = code.replace(/[-]/g, '11').replace(/[.]/g, '10')
    if (codeNumber.length < 10) {
        codeNumber = '0'.repeat(10 - codeNumber.length) + codeNumber
    }
    return codeNumber
}

function morseCodeDecoder(text) {
    let alfabeto = {
        A: '.-',
        B: '-...',
        C: '-.-.',
        D: '-..',
        E: '.',
        F: '...',
        G: '--.',
        H: '....',
        I: '..',
        J: '.---',
        K: '-.-',
        L: '.-..',
        M: '--',
        N: '-.',
        O: '---',
        P: '.--.',
        Q: '--.-',
        R: '.-.',
        S: '...',
        T: '-',
        U: '..-',
        V: '...-',
        W: '.--',
        X: '-..-',
        Y: '-.--',
        Z: '--..'
    }
    
    let result = ''
    console.log('1')
    for (let num = 0; num < text.length; num++) {
        console.log('2')
        char = text.toUpperCase()[num]
        console.log(alfabeto[char])
        result = result + toNumber(alfabeto[char])
        console.log(result)
    }
    return result
}
