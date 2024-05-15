// 当出现连续数字的时候以‘-’输出
const arr = [1, 2, 3, 4, 6, 8, 9, 10];

/** 
 * 目标
 * ["1-4", 6, "8-10"]
 * */
function setContinuous(arr){
    let newArr = [];
    let conStart = 0;
    let conEnd = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] === 1){
            conStart = arr[i];
            conEnd = arr[i+1];
            while(arr[i+1] - arr[i] === 1){
                conEnd = arr[i+1];
                i++;
            }
            newArr.push(`${conStart}-${conEnd}`);
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(setContinuous(arr));
