<template>
	<a 	href="/" class="card" :class="{'card-active': active }">
		<span class="i-mdi-heart text-3xl absolute top-4 right-4 bg-red-600"></span>
		<img class="m-auto" src="../static/card-img.png" alt="">
		<div class="flex justify-between items-center mt-8 mb-4">
			<div class="card-title font-neucha">{{title}}</div>
			<div class="card-weight">{{weight}} г</div>
		</div>
		<div class="card-content mb-6">
			{{content}}
		</div>
		<div class="flex justify-between items-center">
			<div class="card-price">{{price}} ₽</div>
			<!-- @click="addToCard" -->
			<button 
				class="card-btn font-neucha" 
			>В корзину</button>
		</div>				
	</a>
</template>

<script>

export default {
	name: 'Card',
	props: {
		active: {
			type: Boolean
		},
	  title: {
		type: String
	  },
	  weight: {
		type: Number
	  },
	  content: {
		type: String
	  },
	  price: {
		type: Number
	  },
	},
	methods:{
		// addToCard(){
		// 	this.$emit(event:'addToCard',this.product_data);
		// }
	}
}
</script>
<style scoped>
 .card {
	@apply relative block p-6 bg-white border border-gray-200 rounded-lg max-w-xs mx-4 xs:m-auto;
	background-color: #FAFAFA;
	/* box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25); */
	box-shadow: 0px 0px 12px 0px #00000040;

	min-width: 270px;

	&-active,
	&:hover {
		border-color: #312525;
		background-color: #312525;
		color:#fff;

		.card-title,
		.card-weight,
		.card-content,
		.card-price {
			color:#fff;
		}

		img {
			box-shadow: 15px 12px 37px 0px rgba(203, 182, 137, 0.7);
		}
	}

	&-title {
		@apply uppercase;
		font-size:19px;
		color:#141414;
	}
	&-weight {
		font-size:13px;
		color:#808080;
		font-family: Arial, Helvetica, sans-serif;
	}
	&-price {
		font-size:19px;
		font-weight: 400;
		color:#141414;
	}
	&-content {
		font-size: 15px;
		color:#808080;
	}
	&-btn {
		@apply rounded-xl px-6 py-2 text-white bg-yellow-900;
		font-size: 15px;
	}

 }
</style>