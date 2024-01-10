<template>
	<a href="#top-page" @click="scrollToTop" v-if="showScrollButton" class="scroll-button">
		<svg 
		  	width="60" 
			height="60" 
			viewBox="0 0 60 60" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="30" cy="30" r="30" 
					fill="#312525"
			/>
			<path d="M29.5245 21.5552L18.3994 32.6805C18.1419 32.9378 18 33.2813 18 33.6476C18 34.0138 18.1419 34.3573 18.3994 34.6146L19.2185 35.4339C19.7522 35.9671 20.6197 35.9671 21.1526 35.4339L30.4948 26.0917L39.8474 35.4443C40.1049 35.7016 40.4482 35.8437 40.8142 35.8437C41.1807 35.8437 41.524 35.7016 41.7817 35.4443L42.6006 34.625C42.8581 34.3675 43 34.0242 43 33.6579C43 33.2917 42.8581 32.9482 42.6006 32.6909L31.4653 21.5552C31.207 21.2973 30.8621 21.1556 30.4954 21.1564C30.1273 21.1556 29.7826 21.2973 29.5245 21.5552Z" 
				fill="white"
			/>
		</svg>
	</a>
</template>

<script>
export default {
name: 'TopArrow',
  data() {
	return {
	  showScrollButton: false
	};
  },
  mounted() {
	window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
	handleScroll() {
	  if (window.scrollY > 200) {
		this.showScrollButton = true;
	  } else {
		this.showScrollButton = false;
	  }
	},
	scrollToTop() {
	  window.scrollTo({ top: 0, behavior: "smooth" });
	}
  }
};
</script>
<style scoped>
</style>
