//输出三角
let num = 5;
for(let i=0;i<num;i++){
    let str = "";
    for(let k =0 ;k<=i;k++){
        str += " ";
    }
    str += "*";
    for(let j = 1;j<num-i;j++){
        str += "*";
        str += "*";
    }
    console.log(str);
}
