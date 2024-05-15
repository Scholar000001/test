let userDiGui = {
    name: 'John',
    sex: '男',
    age: 30,
    sizes: {
        height: 12,
        width: null
    },
    address: [
        {
            city: '北京',
            area: '朝阳区'
        },
        {
            city: '北京',
            area: '海淀区'
        }
    ],
    fn:function(){
        console.log('我是一个函数')
    }
}


//实现底层原理--在JavaScript中，基础类型值的复制是直接拷贝一份新的一模一样的数据，这两份数据相互独立，互不影响。

/**
 * 深拷贝 递归实现
 * @param {Array | Object} data 需要拷贝的对象
 * @returns {Array | Object} newData 拷贝后的对象
*/
function deepCopy(data) {
    var newData = null;
    //通过typeof判断data是否为非基本数据类型且不等于null 注意typeof (null)===object 
    if (typeof (data) === 'object' && data !== null) {
        // 三元表达式 来判断储存的类型
        newData = data instanceof Array ? [] : {};
        //循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用deepCopy函数
        for (let key in data) {
            newData[key] = deepCopy(data[key]);
        }
    } else { // 为基本数据类型就直接赋值
        newData = data
    }
    return newData
}

// 测试
let ceshi = deepCopy(userDiGui); 
ceshi.name = 'Pete';
ceshi.sizes.width = 190;
ceshi.address[0].city = '上海';
ceshi.fn = function(){
    console.log('我是一个新函数')
}
// console.log(userDiGui);
// console.log(ceshi);

console.log(ceshi.fn());
//从定义层面

