let arr = ["c", "a", "z", "a", "x", "a"];

function findIndex(arr, target) {
    let index = [];
    arr.forEach((item, i) => {
        if (item === target) {
            index.push(i);
        }
    });
    return index;
}
console.log(findIndex(arr, "a"));