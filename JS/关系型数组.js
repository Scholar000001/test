
var obj = [
    { id:3, parent:2 },
    { id:1, parent:null },
    { id:2, parent:1 },
];
/** 
 * 目标效果
{
    obj: {
        id: 1,
        parent: null,
        child: [
            {
                id: 2,
                parent: 1,
                child: [
                    {id:3,parent: 2,child:[]}
                [
            }
        ]
    }
}
*/
function treeObj(obj) {
    let temp = {};
    let tree = {};
    for (let i = 0; i < obj.length; i++) {
        temp[obj[i].id] = obj[i];
    }
    for (let i in temp) {
        if (temp[i].parent) {
            if (!temp[temp[i].parent].child) {
                temp[temp[i].parent].child = new Array();
            }
            temp[temp[i].parent].child.push(temp[i]);
        } else {
            tree = temp[i];
        }
    }
    return tree;
}

console.log(treeObj(obj));


