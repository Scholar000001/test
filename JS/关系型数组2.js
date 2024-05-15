/**
 o = {
    obj: {
        id: 1,
        parent: null,
        child: {
            id: 2,
            parent: 1,
            child: {
                id: ,3,
                parent: 2
            }
        }
    }
}
 */
var obj = [
    { id:3, parent:2 },
    { id:1, parent:null },
    { id:2, parent:1 },
];

function treeObj(data){
	let temp = {};
	let tree = {};
	for(let i=0;i<data.length;i++){
		temp[data[i].id] = data[i];//完成data的重新排序
	}
	for(let key in temp){
		if(temp[key].parent){
			if(!temp[temp[key].parent].child){
				temp[temp[key].parent].child = new Array();
			}
			temp[temp[key].parent].child.push(temp[key]);
		}else{
			tree = temp[key];
		}
	}
	
	return {obj:tree};
}


console.log(treeObj(obj));