<template>
	<div class="nav-cards-menu ">
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			Роллы
		</router-link>
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			суши и гунканы
		</router-link>
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			сеты
		</router-link>
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			лапша и рис
		</router-link>
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			салаты
		</router-link>
		<router-link to="/"  
					class="
						text-nav-cards  px-4 py-2
						hover:bg-yellow-900 hover:rounded-full
					"
		>
			ГОрячие блюда
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'NavCards',
	components: { },
	data() {
	  return {
		model: false,
	  }
	},
	methods: {
		OpenCloseMenu() {
			document.querySelector('.top-navbar').classList.toggle('hidden')
		}
	}
  }
	
</script>

<style scoped>
.text-nav-cards {
	color:#B3A296;
	&:hover {
		color:#fff;
	}
}
.nav-cards-menu {
	@apply flex flex-wrap justify-center  uppercase my-16;
	font-size:28px;
}
</style>
