<template>
	<div class="bg-img relative">
		<div id="top-page"></div>
		<NavBar/>
		
		<div class="container max-w-6xl m-auto">
			<Cards/>
		</div>
		<TopArrow/>
		<Footer></Footer>
	</div>
</template>

<script>
import "../global.css"
import TopArrow from '../components/TopArrow'

export default {
	name: 'IndexPage',
	components: {TopArrow },
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
