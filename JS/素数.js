function isPrime(num){
	if (num === 2 || num === 3) {
		return true;
	};
	if (num % 2 === 0) {
		return false;
	};
    //不能被其小于它的平方根的奇数整除，为素数
	let divisor = 3,limit = Math.sqrt(num);
	while(limit >= divisor){
		if (num % divisor === 0) {
			return false;
		}
		else {
			divisor += 2;
		}
	}
	return true;
}
console.log(isPrime(4));  // false