
var numberToWords = function(num) {
    if (num === 0) return 'Zero'

    const first_digit = ['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const second_digit_less_than_twenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const second_digit_greater_than_twenty = ['', '','Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    const second_digit = (n) => {
        if (n < 10) return first_digit[n]
        else if (n < 20) return second_digit_less_than_twenty[n-10]
        else {
            const tenner = Math.floor(n / 10)
            const rest = n - tenner * 10
            if (rest != 0) {
                return second_digit_greater_than_twenty[tenner] + ' ' + first_digit[rest]
            } else {
                return second_digit_greater_than_twenty[tenner]
            }
        }
    }

    const third_digit = (n) => {
        const hundred = Math.floor(n / 100)
        const rest = n - hundred * 100
        let res = ' '
        if (hundred * rest != 0) {
            res += first_digit[hundred] + ' Hundred ' + second_digit(rest)
        } else if (hundred === 0 && rest !== 0) {
            res += second_digit(rest)
        } else if (hundred !== 0 && rest === 0) {
            res += first_digit[hundred] + ' Hundred'
        }
        return res
    }

    const billion = Math.floor(num / Math.pow(10, 9))
    const million = Math.floor((num - billion * Math.pow(10, 9)) / Math.pow(10, 6))
    const thousand = Math.floor((num - billion * Math.pow(10, 9) - million * Math.pow(10, 6)) / Math.pow(10, 3))
    const rest = num - billion * Math.pow(10, 9) - million * Math.pow(10, 6) - thousand * Math.pow(10, 3)

    let result = ''
    if (billion !== 0 ) {
        result = third_digit(billion) + " Billion"
    }
    if (million !== 0) {
        result += third_digit(million) + ' Million'
    }
    if (thousand != 0 ) {
        result += third_digit(thousand) + ' Thousand'
    }
    if (rest != 0 ){
        result += third_digit(rest)
    }

    return result.trim()
};

const examples = {
    example1: { inputParams: [123], expected: "One Hundred Twenty Three" },
    example2: { inputParams: [12345], expected: "Twelve Thousand Three Hundred Forty Five" },
    example3: { inputParams: [1234567], expected: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven" },
    example4: { inputParams: [0], expected: "Zero" },
    example5: { inputParams: [100], expected: "One Hundred" },
}

module.exports =  {
    examples,
    answer: numberToWords
}
