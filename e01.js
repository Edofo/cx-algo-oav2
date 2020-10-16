function swap(arr, first, second) {
    arr.splice(first, 1, arr.splice(second, 1, arr[first])[0]);
}

function bubble(arr) {

    let len = arr.length

    for (let i = 0; i < len; i++) {
        for(a = 0; a < len-i; a++) {
            if(arr[a] > arr[a+1]) {
                swap(arr, a, a+1)
            }
        }
    }

    console.log('Exo 1 :');
    return arr;
}

console.log(bubble([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3, -1]));
