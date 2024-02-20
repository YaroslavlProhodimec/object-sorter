// object-sorter
function objectSort(obj) {

    let sortedArray = Object.entries(obj).sort()
    let resultObj = {}

    for (const [key, value] of sortedArray) {
        resultObj[key] = value
    }

    return resultObj
}


console.log(objectSort({b: 'b', e: 'e', a: 'a', d: "d", w: "w"}))

function objectSort(obj) {
    let sortedArray = Object.entries(obj).sort()
    return Object.fromEntries(sortedArray);
}

console.log(objectSort({b: 'b', e: 'e', a: 'a', d: "d", w: "w"}))

