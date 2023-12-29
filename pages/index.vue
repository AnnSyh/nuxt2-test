<template>
	<div class="bg-img">
			<NavBar/>
			<div class="container max-w-6xl m-auto">
				<Cards/>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import "../global.css"

export default {
	name: 'IndexPage'
}
</script>
<style scoped>
.bg-img {
	background-image: none;

	/* @screen xs {
		background-color:red;
	}
	@screen sm {
		background-color:green;
	}
	@screen md {
		background-color:blue;
	}
	@screen lg {
		background-color:violet;
	} */
	@screen xl {
		/* background-color:yellow; */
		background-image: url('../static/bg-img.png');
		background-repeat: no-repeat;
		background-position: 0 81px;
		background-size: cover;
	}
}
</style>
