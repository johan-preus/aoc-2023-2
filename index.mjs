import {data, testData} from "./data.mjs";

let sum = 0

data.forEach((str, i) => {
    let isValid = true
    const draws = str.split(':')[1].trim().split(';')
    draws.forEach(draw => {
        const numsWithColors = draw.split(',')
        numsWithColors.forEach(numWithColor => {
            numWithColor = numWithColor.trim()
            let color = ''
            if (numWithColor.includes('red'))
                color = 'red'
            if (numWithColor.includes('blue'))
                color = 'blue'
            if (numWithColor.includes('green'))
                color = 'green'
            switch (color) {
                case 'red':
                    const redNum = numWithColor.split(' ')[0] * 1
                    if (redNum > 12){
                        isValid = false
                    }
                    break
                case 'blue':
                    const blueNum = numWithColor.split(' ')[0] * 1
                    if (blueNum > 14){
                        isValid = false
                    }
                    break
                case 'green':
                    const greenNum = numWithColor.split(' ')[0] * 1
                    if (greenNum > 13){
                        isValid = false
                    }
                    break
                default:
                    break
            }
        })
    })
    if (isValid){
        sum += i + 1
    }
})

console.log({sum})