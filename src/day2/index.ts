import {Day} from "../day";

class Day1 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string[]): string {
        let sum = 0

        for (let report of input) {

            let levels: number[] = report.split(' ').map((x) => parseInt(x))

            let safe = this.iterateLevel(levels)
            if (safe) {
                sum += 1
            }

        }


        return sum.toString()
    }

    solveForPartTwo(input: string[]): string {

        let sum = 0

        for (let i = 0; i < input.length; i++){
            let report = input[i];

            let levels: number[] = report.split(' ').map((x) => parseInt(x))

            let safe = false
                safe = this.iterateLevel(levels)
            if (safe) {
                sum += 1
            } else {
                let newSafe = false
                for (let i = 0; i < levels.length; i++) {
                    const levels2 = [...levels]
                    levels2.splice(i, 1)
                    console.log(levels + ' ==> ' + levels2)


                    if (this.iterateLevel(levels2)) {
                        newSafe = true
                        break
                    }
                }
                if (newSafe) {
                    sum += 1
                }
            }

        }


        return sum.toString()
    }

    iterateLevel(levels: number[]): boolean {
        let inc = undefined

        if (levels[0] < levels[1]) {
            inc = true
        } else if (levels[0] > levels[1]) {
            inc = false
        }

        let safe = false
        if (inc !== undefined) {
            safe = true
            for (let i = 1; i < levels.length; i++) {
                if (inc === true) {
                    const diff = levels[i] - levels[i - 1]

                    if (diff < 1 || diff > 3) {
                        safe = false
                        break
                    }
                } else if (inc === false) {
                    const diff = levels[i - 1] - levels[i]

                    if (diff < 1 || diff > 3) {
                        safe = false
                        break
                    }
                }
            }
        }
        return safe
    }
}

export default new Day1;
