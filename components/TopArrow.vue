<template>
	<a href="#top-page" @click="scrollToTop" v-if="showScrollButton" class="scroll-button">
		<svg
			class="fill-current"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
		  >
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
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
