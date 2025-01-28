let number

do {
    number = prompt("Enter a number between 1 and 255 to converse it to binary")
    if (!isNaN(number) && number >= 0 && number < 256 && number != null && number != ''){
        let numAux = number
        let result = ''
        let contIter = 0

        while (number >= 1){
            let digit = parseInt(number) % 2
            result = String(digit) + result
            number /= 2
            contIter++;
        }

        for (let i = 0; i < 8 - contIter; i++){
            result = String(0) + result
        }

        alert(`${numAux} is ${result} on binary`)
    } else {
        number == 'F' || number == 'f' ? 
            alert(`Goodbye!`) : 
            alert(`Error: Enter a positive number or a number between 1 and 255`)
    }
} while (number != 'F' && number != 'f')
