<!-- Please remove this file from your project -->
<template>
	<div class="">
		<div class="relative flex items-top justify-center min-h-footer bg-nav-color footer-before sm:items-center sm:pt-0">
			
		</div>
	</div>
</template>

<script>

export default {
    name: 'Footer'

}
</script>
<style scoped>
.min-h-footer {
	min-height: 39px;
}

.footer-before {
	@apply relative;

	@screen xl{

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			top: -245px;
			left: 0;
			width: 165px;
			height: 256px;
			background-image: url('../static/bg-img-footer.png');
		}
	}

}

</style>
