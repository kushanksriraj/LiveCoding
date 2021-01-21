function rotateLeft(d, arr) { 
    
    let len = arr.length;
    
    let temp  = [];
        
    for(let i=0; i<len; i++){
        
        let k = (i+d) % len;  
        
        temp[i] = arr[k];
    }
    
    return temp;
}

console.log(rotateLeft(2, [1,2,3,4,5]));