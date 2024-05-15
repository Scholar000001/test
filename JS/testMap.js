var arr = [1, 2, 3, 4, 5];
//map -- 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
var newArr = arr.map(function (item) {
	return item * 2;
});
console.log(newArr);
function firstEven(num) {
	return num % 2 === 0;
}
//find -- 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
var newArr = arr.find(item => item % 2 === 0);
// console.log(newArr);

const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];
const user = users.find(u => u.id === 2);
console.log(user); // 输出：{id: 2, name: 'Bob'}

//filter -- 返回一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
const newUsers = users.filter(u => u.id !== 2);
console.log(newUsers); // 输出：[{id: 1, name: 'Alice'}, {id: 3, name: 'Charlie'}]