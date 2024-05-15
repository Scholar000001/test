function father(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this.name,this.age);
    }
}

function child(name,age){
    this.name = name;
    this.age = age;
}

child.prototype = new father();
let son = new child('小明',18);
son.say(); //小明 18 