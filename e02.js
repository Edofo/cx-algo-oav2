let sort = (arr) => {

    for (let i = 0; i < arr.length; i++) { 

        let key = arr[i];
        let a = i - 1;

        while (a >= 0 && arr[a] > key) {
            arr[a + 1] = arr[a];
            a = a - 1;
        }
        arr[a + 1] = key;
    }
    return arr;
};

console.log(sort([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3, -1]));

