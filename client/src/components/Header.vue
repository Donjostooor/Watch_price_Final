<template>
		<div>
			<div class="container">
			<div><h1>PriceWatch Wiki</h1></div>
			</div>
			<div class="nv-navbar">
				<ul class="nav">
					<li><router-link :to="{ name: 'index' }">Home</router-link></li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li><router-link :to="{ name: 'blogs' }">ManagerContent</router-link></li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				</ul>
				<div class="clearfix" />
			</div>
		</div>
</template>
<script>
import BlogsService from "@/services/BlogsService";
export default {
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
			window.location.replace("Login.vue")
		},
	}
};
</script>
<style scoped>
.nv-navbar {
	background-color: rgb(143, 141, 250);
	width: 100%;
	border-radius: 50px;
	padding: 11px 0px 11px 30px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: center;
}
.nv-navbar .nav li {
	float: center;
}
.nv-navbar .nav li a {
	border-radius: 50px;
	padding: 10px;
	text-decoration: none;
	color: rgb(0, 0, 0);
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: darkslategrey;
}
.nv-navbar .nav li a.router-link-active {
	background-color: rgb(245, 245, 245);
	color: darkslategrey;
}
.clearfix {
	clear: center;
}
</style>
