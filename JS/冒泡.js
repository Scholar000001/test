var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]

for (i = 0; i < arr.length - 1; i++) {
	for (j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j+1]){
            let temp =arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);