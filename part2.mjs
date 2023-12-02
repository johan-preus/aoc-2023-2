import {data, testData} from "./data.mjs";

let sum = 0

data.forEach((str, i) => {
    let isValid = true
    let minRed = 0
    let minBlue = 0
    let minGreen = 0
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
                    minRed = Math.max(redNum, minRed)
                    break
                case 'blue':
                    const blueNum = numWithColor.split(' ')[0] * 1
                    minBlue = Math.max(blueNum, minBlue)
                    break
                case 'green':
                    const greenNum = numWithColor.split(' ')[0] * 1
                    minGreen = Math.max(greenNum, minGreen)
                    break
                default:
                    break
            }
        })
    })
    sum += minRed * minBlue * minGreen
})

console.log({sum})