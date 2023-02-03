const revStr = 'modeler'

const fac = (i) => {
    if(i==1) {
        return i
    }
    // console.log(i * fac(i-1))
    return i * fac(i-1)
}

console.log(fac(10))