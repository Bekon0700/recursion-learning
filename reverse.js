const revStr = 'modeler'

const rev = (str, i) => {
    if(i >= str.length) {
        return
    }

    rev(str, i+1);
    console.log(str[i])
}

rev(revStr, 0)