import {Day} from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string[]): string {
        let sum = 0

        let lefts: string[] = []
        let rights: string[] = []

        input.forEach((line) => {
            const [left, right] = line.split('   ')
            lefts.push(left.trim())
            rights.push(right.trim())
        })

        lefts = lefts.sort()
        rights = rights.sort()

        for (let i = 0; i < lefts.length; i++) {
            const distance = Math.abs(parseInt(lefts[i]) - parseInt(rights[i]))
            sum += distance
        }

        return sum.toString()
    }

    solveForPartTwo(input: string[]): string {
        let sum = 0
        let lefts: string[] = []
        let rights: string[] = []

        input.forEach((line) => {
            const [left, right] = line.split('   ')
            lefts.push(left.trim())
            rights.push(right.trim())
        })

        lefts = lefts.sort()
        rights = rights.sort()


        for (let i = 0; i < lefts.length; i++) {

            let score = 0
            for (let j = 0; j < rights.length; j++) {
                if (lefts[i] === rights[j]) {
                    score += 1
                }
            }
            sum += score * parseInt(lefts[i])
        }

        return sum.toString()
    }
}

export default new Day1;
