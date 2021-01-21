function reverseArray(a) {

    let temp = [];
    let len = a.length;
    
    for(let i=(len-1); i>=0; i--){
        temp.push(a[i]);
    }
    
    return temp;
}

console.log(reverseArray([1, 2, 8, 0, 5, 7]));