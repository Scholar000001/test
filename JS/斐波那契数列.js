var i = 1;
var j = 1;
var num =0;
function sumNum(n){
	if(n <= 1){
		return 0;
	}
	for (let k = 0; k <= n; k++) {
		if (k <= 2) {
			num = i;
		} else {
			let temp = j;
			j = i + j;
			i = temp;
			num = j;
		}
	}
	return num;
}

console.log(sumNum(40));
/* 斐波那契数列：递归 */
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377
// function fib(n) {
//     // 终止条件 
// 	 if(n === 0 || n === 1) {
//         return n;
//     }
//     // 递归调用 f(n) = f(n-1) + f(n-2)
//     const res = fib(n - 1) + fib(n - 2);
//     // 返回结果 f(n)
//     return res;
// }
// console.log(fib(1));