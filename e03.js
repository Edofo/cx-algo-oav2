function selection(arr) {

    let len = arr.length

    for(let i = 0; i < len; i++) {
        let min = i;

        for(let a = i + 1; a < len; a++) {
            
            if(arr[a] < arr[min]) {
                min = a;
            }
        }

        if(min !== i) {

            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    console.log('Exo 3 :');
    return arr;
}


console.log(selection([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3, -1]));
