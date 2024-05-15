const list = document.querySelector(".list");
let sourceNode;
list.ondragstart = e => {   //拖拽开始
	setTimeout(() => {
		e.target.classList.add("moving");
	}, 0);
	//设置拖动元素是鼠标样式为箭头
	e.dataTransfer.effectAllowed = "move";
	sourceNode = e.target;
};

list.ondragenter = e => {  //拖拽一个元素进入另一个元素时触发
	console.log(e.target);
	e.preventDefault();
	if (e.target == list || e.target == sourceNode) {
		return;
	}
	const children = [...list.children];
	const sourceIndex = children.indexOf(sourceNode);
	const targetIndex = children.indexOf(e.target);
	if (sourceIndex < targetIndex) {
		// console.log("向下拖拽");
		list.insertBefore(sourceNode, e.target.nextElementSibling);
	} else {
		// console.log("向上拖拽");
		list.insertBefore(sourceNode, e.target);
	}
	// console.log(e.target)
};

list.ondragend = e => {//拖拽结束松开鼠标或者按esc键
	e.preventDefault();
	e.target.classList.remove("moving");
};
