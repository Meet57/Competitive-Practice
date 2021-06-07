/**
 * You are given n activities with their start and finish times. 
 * Select the maximum number of activities that can be performed 
 * by a single person, assuming that a person can only work on a 
 * single activity at a time.
 */

printMaxActivities = (s, f, n) => {

    sort = (s, f) => {
        final = []
        for (let i = 0; i < s.length; i++) {
            final.push([s[i], f[i]])
        }

        final.sort((a, b) => a[1] - b[1])

        s = [], f = []
        for (let i = 0; i < final.length; i++) {
            s.push(final[i][0])
            f.push(final[i][1])
        }
        return {s,f}
    }

    ({s,f} = sort(s, f))

    i = 0
    res = []
    res.push(i)
    for (let j = 0; j < n; j++) {
        if (f[i] <= s[j]) {
            res.push(j)
            i = j
        }
    }
    return res
}

let s = [1, 3, 0, 5, 8, 5]
let f = [2, 4, 6, 7, 9, 9]
console.log(printMaxActivities(s, f, s.length))


s = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924]
f = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252]
console.log(printMaxActivities(s, f, s.length))