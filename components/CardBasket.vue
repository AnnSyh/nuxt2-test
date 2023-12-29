<template>
	<div class="card">

		<img width="80" height="80" src="../static/card-img.png" alt="">

		<div class="max-w-[210px] relative flex flex-col justify-between">
			<span class="i-mdi-heart-outline text-xl absolute top-0 right-0 "></span>
			<div class="card-title">{{title}}</div>
			<div class="card-content"> {{content}} </div>
			<div class="card-weight">({{weight}} г)</div>
		</div>

		<div class="flex flex-col justify-between items-center">
			<div class="card-price">Цена {{price}} ₽</div>
			<div class="card-count flex gap-1 items-center py-2">
				<button class="count-btn" @click="minusOne()">-</button>
				<input class="w-[35px] text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" 
					type="number" 
					value="99"
				>
				<button class="count-btn" @click="pluseOne()">+</button>
			</div>
			<div class="card-price">Сумма {{price}} ₽</div>
		</div>	
		
		
		<button class="btn-trash">
			<span class="i-mdi-trash"></span>
		</button>
	</div>
</template>

<script>

export default {
	name: 'CardBasket',
	props: {
		active: {
			type: Boolean
		},
	  title: {
		type: Object,
		required: true
	  },
	  weight: {
		type: Object,
		required: true
	  },
	  content: {
		type: Object,
		required: true
	  },
	  price: {
		type: Object,
		required: true
	  },
	},
	methods: {
		minusOne(i){
			return i--
		},
		pluseOne(i){
			return i++
		}
	}
}
</script>
<style scoped>

.count-btn {
	@apply flex items-center justify-center rounded-full text-white bg-yellow-900 w-[28px] h-[28px];
	font-size: 15px;
}
 .card {
	@apply flex gap-4 items-start relative p-3 bg-white border border-gray-200 rounded-lg m-1 overflow-hidden;
	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);


	&-title {
		@apply uppercase text-base;
		color:#141414;
	}
	&-weight {
		font-size:13px;
		color:#808080;
		font-family: Arial, Helvetica, sans-serif;
	}
	&-price {
		font-size:13px;
		font-weight: 400;
		color:#141414;
	}
	&-content {
		font-size: 13px;
		color:#808080;
	}


	.btn-trash {
		@apply absolute right-[-25px] p-[25px] flex rounded-full bg-yellow-800;
		top: calc(50% - 31px);

		span {
			@apply relative left-[-8px] text-white;
		}

	}

 }
</style>