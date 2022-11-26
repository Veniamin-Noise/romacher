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
    for (let num = 0; num < text.length; num++) {
        char = text.toUpperCase()[num]

        codeNumber = alfabeto[char].replace(/[-]/g, '11').replace(/[.]/g, '10')
        if (codeNumber.length < 10) {
            codeNumber = '0'.repeat(10 - codeNumber.length) + codeNumber
        }

        result = result + codeNumber
    }
    return result
}
