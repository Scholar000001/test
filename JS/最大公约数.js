// 如果数a能被数b整除，a就叫做b的倍数，b就叫做a的约数。

//求两个数的最大公约数
//1、函数递归
function greatestCommonDivisor(a,b){
	if (b === 0) {
		return a;
	} else {
		return greatestCommonDivisor(b,a%b);
	}
};
//2、for循环

function getMaxDivisor(a,b){
	let temp = a < b ? a  : b;
	for(let i=temp;i>0;i--){
		if(a%i===0 && b%i===0){
			return i;
		}
	}
}

// 3求法二：更相减损法
// 通过上面的求解我们可以了解，是非常的暴力。万一两个数是质数呢？那不是一直减到1才找到吗？有一点复杂。
// 所以我们要了解更相减损法，定义如下：

// 更相减损法：也叫更相减损术，是出自《九章算术》的一种求最大公约数的算法，它原本是为约分而设计的，但它适用于任何需要求最大公约数的场合。

// 思路分析：
// 以较大的数减较小的数，接着把所得的差与较小的数比较，并以大数减小数。继续这个操作，直到它们两个数相等为止。则相等的两个数就是所求的最大公约数。
function getDivisor3(a,b){
	if(a===b){
		return a;
	}
	let temp = a < b ? a  : b;
	return getDivisor3(temp,Math.abs(a-b));
}


//12,18

//最大公约数  -- 6
//最小公倍数  -- 36

//最小公倍数 = 两数之积 / 最大公约数
//最大公约数 = 两数之积 / 最小公倍数
//两数之积 = 最大公约数 * 最小公倍数


console.log(12*18/6);



// console.log(greatestCommonDivisor(12,18));
// console.log(getMaxDivisor(12,18));
// console.log(getDivisor3(12,18));


