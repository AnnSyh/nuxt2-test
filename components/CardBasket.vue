<template>
	<div class="card">
		<img width="80" height="80" src="../static/card-img.png" alt="">
		<div class="max-w-[210px] relative flex flex-col justify-between">
			<span class="i-mdi-heart-outline text-xl absolute top-0 right-0 "></span>
			<div class="card-title font-neucha">{{title}}</div>
			<div class="card-content"> {{content}} </div>
			<div class="card-weight">({{weight}} г)</div>
		</div>
		<div class="flex flex-col justify-between items-center">
			<div class="card-price font-neucha">Цена {{price}} ₽</div>
			<div class="card-count flex gap-1 items-center py-2">
				<div class="card-count flex gap-1 items-center py-2">
					<button class="count-btn" @click="DecrementCount()">-</button>
					<span class="w-8 text-center">{{ count }}</span>
					<button class="count-btn"  @click="IncrementCount()">+</button>
				</div>
			</div>
			<div class="card-price font-neucha">Сумма {{totalPrice}} ₽</div>
		</div>
		<button class="btn-trash"  @click="delFromCard">
			<span class="i-mdi-trash"></span>
		</button>
	</div>
</template>

<script>

export default {
	name: 'CardBasket',
	props: {
		id: {
			type: Number
		},
		count: {
			type: Number
		},
		active: {
			type: Boolean
		},
		title: {
			type: String,
			required: true
		},
		weight: {
			type: Number,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		totalPrice: {
			type: Number,
		},
	},
	data() {
		return {
			localCount: this.count
		}
	},
	methods: {
		IncrementCount() {
			this.$emit('IncrementCount')
			this.$emit('update:count', this.localCount);
		},
		DecrementCount() {
			this.$emit('DecrementCount')
			this.$emit('update:count', this.localCount);
		},
		delFromCard(){
			this.$emit('delFromCard')
		}, 
		calculateTotalCard() {
			this.$emit('calculateTotalCard')
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