<template>
	<!--<p>
		<p><button v-on:click="navigateTo('/blog/create')">สร้าง blog</button></p>
				<button v-on:click="navigateTo('/blog/edit/' + blog.id)">
					แก้ไข blog
				</button>
				<button v-on:click="deleteBlog(blog)">ลบข้อมูล</button>
			</p>-->
			<div>
		<br>
	<div class="container bg">
		<div class="container">
			<br><br>
		<div class="container">
			<div class="row">
				<div class="col-5">
					<h2><b>All Watch Brand Product</b></h2>
				</div>
				<div class="col-4">&nbsp;</div>
				<div class="col">
					<button class="btn btn-add" v-on:click="navigateTo('/blog/create')">สร้าง blog</button>
				</div>
			</div>
		</div>
		<br>
		<h5><b>Watch Item in Page : </b>{{ blogs.length }}</h5><br><br>
		<div class="row">
			<div class="container">
				<div class="col-12">
					<div v-for="blog in blogs" v-bind:key="blog.id">
						<div class="row">
							<div class="col-12">
								<div class="row">
									<div class="col">
										<div class="thumbnail-pic" v-if="blog.thumbnail!= 'null'">
										<img :src="BASE_URL + blog.thumbnail" alt="thumbnail" width="500px"/>
										</div><br>
									</div>
									<div class="col">
										<div class="container">
											<div class="col-2">&nbsp;<br></div>
											<div class="col-8">
												<p>ProductItem : {{ blog.id }}</p>
												<p>{{ blog.brand }} || {{ blog.gen }}</p>
												<h4>{{ blog.title }}</h4>
												<h4>{{ blog.price }} บาท</h4><br>
											</div>
										</div>
										<div class="container">
											<div class="col-2">&nbsp;<br></div>
											<div class="col-8">
											</div>
										</div>
										<div class="container">
											<br><br><br>
											<div class="row">
												<div class="col-1">&nbsp;</div>
												<div class="col-4">
												<button class="btn btn-edit" v-on:click="navigateTo('/blog/edit/' + blog.id)">แก้ไข blog</button>
												</div>
												<div class="col-4">
													<button class="btn btn-del" v-on:click="deleteBlog(blog)">ลบข้อมูล</button>
												</div>
												<div class="col-1">&nbsp;</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">&nbsp;<hr><br></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	</div>
</template>
<script>
import BlogsService from "@/services/BlogsService";
export default {
	data() {
		return {
			blogs: [],
			BASE_URL: "http://localhost:8081/assets/uploads/",
		};
	},
	async created() {
		this.blogs = (await BlogsService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteBlog(blog) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await BlogsService.delete(blog);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.blogs = (await BlogsService.index()).data;
		},
	},
};
</script>
<style scoped>
.btn {
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.btn-add{
	font-size: 20px;
	font-weight: bold;
	padding: 10px;
	padding-left: 30px;
	padding-right: 30px;
	background-color:#63EE4D;
}
.btn-edit{
	font-size: 20px;
	padding: 10px;
	padding-left: 30px;
	padding-right: 30px;
	text-align: center;
	background-color:#FFFB00;
}
.btn-del{
	font-size: 20px;
	padding: 10px;
	padding-left: 30px;
	padding-right: 30px;
	text-align: center;
	background-color:#EE4D4D;
}
.bg {
	background-color:#F6F6F6;
	border-radius: 50px;
}
.bg-pd{
	padding-right: 50px ;
}
</style>



