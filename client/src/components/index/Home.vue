<template>
	<div>
		<br>
	<div class="container bg">
		<div class="container">
			<br><br>
		<h2><b>All Watch Brand Product</b></h2>
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
												{{ blog.content }}
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
.bg {
	background-color:#F6F6F6;
	border-radius: 50px;
}
.bg-pd{
	padding-right: 50px ;
}
</style>




