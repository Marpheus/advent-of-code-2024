import {Day} from "../day";

class Day1 extends Day {

    constructor(){
        super(3);
    }

    solveForPartOne(input: string[]): string {
        let text = ''

        input.forEach((line) => {
            text += line
        })

        const matches = text.match(/mul\(\d+,\d+\)/g)
        if (!matches) {
            return ''
        }
        console.log(matches)
        let sum = 0
        matches.forEach((match) => {
            const [a, b] = match.substring(4, match.length - 1).split(',')
            sum += parseInt(a) * parseInt(b)
        })

        return sum.toString()
    }

    solveForPartTwo(input: string[]): string {

        let text = ''

        input.forEach((line) => {
            text += line
        })

        const matches = text.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g)
        if (!matches) {
            return ''
        }
        console.log(matches)
        let sum = 0
        let enable = true
        matches.forEach((match) => {
            if (match === 'do()') {
                enable = true
            } else if (match === 'don\'t()') {
                enable = false
            } else if (enable) {
                const [a, b] = match.substring(4, match.length - 1).split(',')
                sum += parseInt(a) * parseInt(b)
            }
        })

        return sum.toString()
    }
}

export default new Day1;
