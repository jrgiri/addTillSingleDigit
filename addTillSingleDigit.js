let number = 942
let additionTillSingleDigit = (number) => {
    let add = 0
    let convertString = number.toString()
    for (let i = 0; i < convertString.length; i++) {
        add += parseInt(convertString[i])
    }
    if(add.toString().length > 1) 
        setTimeout(function() {
            additionTillSingleDigit(add)
        }, 0)
    console.log(add);
}
additionTillSingleDigit(number)