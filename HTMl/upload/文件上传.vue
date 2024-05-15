<template>
<div>
	<div id="index">
		<input type="file" id="uploadFile" />
		<div>
			<img src="../../assets/upload.png" />
			<div style="text-align: center; color: #000; font-size: 12px">
				点击/拖动文件
			</div>
		</div>
		
	</div>
	<div v-for="iten in 20" style="width:100px;height:100px;background-color:red"></div>
</div>
	
	
</template>

<script>
import axios from "axios";
export default {
	name: "index",
	data() {
		return {};
	},
	mounted() {
		this.initialize();
		// this.login();
	},
	methods: {
		initialize() {
			var that = this;
			const uploadFile = document.getElementById("uploadFile");
			//监听id=index的点击事件
			const index = document.getElementById("index");
			document.getElementById("index").addEventListener("click", () => {
				//触发id=uploadFile的点击事件
				uploadFile.click();
			});
			uploadFile.addEventListener("change", function () {
				const file = uploadFile.files[0];
				that.uploadFileFN(file);
			});
			//ondragenter进入
			index.ondragenter = e => {
				e.preventDefault();
			};
			//ondragover托进。
			index.ondragover = e => {
				e.preventDefault();
			};
			//ondrop放置元素内容必须有preventDefault()，否则ondrop事件不会被触发
			index.ondrop = e => {
				e.preventDefault();
				if (e.dataTransfer.files.length > 1) {
					alert("只允许上传单文件");
					return;
				}
				const file = e.dataTransfer.files[0];
				// uploadFile.file = file;
				that.uploadFileFN(file);
			};
		},
		//测试请求
		async test(id) {
			axios.post("/ceshi", {
				id: id,
			});
		},
		//上传文件
		async uploadFileFN(file) {
			let res = await this.$http.uploadFile(file);
			console.log(res);
		},
		//上传图片
		uploadImgFN(file) {
			alert("上传图片");
			console.log(file);
		},
		async login() {
			let value = { phone: "13273245228", password: "Aa12345678901!" };
			let res = await this.$http.login(value);
		},
	},
};
</script>

<style lang="scss" scoped>
#index {
	width: 200px;
	height: 200px;
	border: 1px solid #7aaded;
	display: flex;
	justify-content: center;
	align-items: center;
	#uploadFile {
		display: none;
	}
	img {
		width: 100px;
		height: 100px;
	}
}
</style>
