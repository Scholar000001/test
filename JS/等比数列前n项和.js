//有一个细胞，每1个小时分裂一次，生命周期为3小时，求n小时后，容器内有多少细胞
	
function cell(n) {
	let sum = 1;
	for (let i = 1; i <= n; i++) {
		if (i < 3) {
			sum = sum + Math.pow(2, i);
		}
		if (i >= 3) {
			sum = sum + Math.pow(2, i) - Math.pow(2, i - 3);
		}
	}
	return sum;
}
//n=2
console.log(cell(2));
//n=4
console.log(cell(4));
