// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(element => element * (-1))
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(element => element * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(element => element ** 2)
}

// function reduceToTotal(sourceArray, startingPoint=0) {
//     return sourceArray.reduce(getSum, startingPoint)
// }

// function getSum(total, num) {
//     return total + num
// }

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++) {
           total += sourceArray[i] 
    }
    return total
}


// function reduceToAllTrue(sourceArray){
//     const value = sourceArray.find(element => element === false)
//     if (value === undefined) { return true } else { return false }
// }

function reduceToAllTrue(sourceArray){
    let a = []
    for(let i = 0; i < sourceArray.length; i ++){
        if (!!sourceArray[i] === true){} else {return false}
    }
    return true
}

// function reduceToAnyTrue(sourceArray){
//     const value = sourceArray.find(element => element === true)
//     if (value === undefined) { return false } else { return true }
// }

function reduceToAnyTrue(sourceArray){
    let a = []
    for(let i = 0; i < sourceArray.length; i ++){
        if (!!sourceArray[i] === false){} else {return true}
    }
    return false
}

