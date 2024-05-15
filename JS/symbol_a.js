const user_name = Symbol('user_name');

class user{
    constructor(name,age){
        this.age = age;
        this[user_name] = name;
    }

    getName(){
        return this[user_name];
    }
}

//导出模块
module.exports = user;