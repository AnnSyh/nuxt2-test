<template>
<div class="">

	<nav class="bg-nav-color font-neucha mb-8 lg:mb-24">
		<div class="container max-w-6xl m-auto flex items-center justify-between h-20">

		<!-- <div class="flex items-center"> -->

			<div class="flex flex-col lg:flex-row relative">
	
				<div class="flex flex-row-reverse items-center lg:relative">
					<div>
						<img class="hidden lg:block logo-desktop" src="../static/logo.png" alt="">
						<img class="hidden xs:block lg:hidden relative" src="../static/logo-mobile.png" alt="">
					</div>
					
					<button
						class="text-white inline-flex p-3  rounded lg:hidden hover:text-white outline-none nav-toggler"
						data-target="#navigation"
						@click="OpenCloseMenu()"
					>
						<span class="i-mdi-menu text-3xl"></span>
					</button>
				</div>
	
				<div class="
						bg-nav-color absolute top-16 justify-between w-full1 overflow-hidden
						lg:bg-transparent lg:top-auto lg:relative lg:w-full lg:inline-flex lg:flex-grow lg:w-auto
					"
					id="navigation"
				>
					<div class="hidden top-navbar lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex gap-x-6 flex-col">
						<router-link to="/"  class="w-full p-4 lg:p-0 text-white hover:underline link-before"
						>
							<span>Меню</span>
						</router-link>
						<router-link to="/"  class="w-full p-4 lg:p-0 text-white hover:underline link-before"
						>
							<span>Доставка</span>
						</router-link>
						<router-link to="/"  class="w-full p-4 lg:p-0 text-white hover:underline link-before"
						>
							<span>Акции</span>
						</router-link>
						<router-link to="/"  class="w-full p-4 lg:p-0 text-white hover:underline link-before"
						>
							<span>Отзывы</span>
						</router-link>
						<router-link to="/"  class="w-full p-4 lg:p-0 text-white hover:underline"
						>
							<span>Контакты</span>
						</router-link>
					</div>
				</div>
			</div>
	
			<img class="block xs:hidden relative" src="../static/logo-mobile.png" alt="">
		<!-- </div> -->


			<a href="#" class="flex text-white items-center p-4 xs:p-0">
				<span class="i-mdi-phone text-3xl"></span>
				<span class="hidden sm:block">+7 979 700 97 91</span>
			</a>

			<div class="hidden xs:flex xs:gap-4 xs:pr-4">
				<button
					class="text-black inline-flex p-2 bg-gray-100 rounded-full outline-none nav-toggler"
					@click="OpenCloseBasket()"
				>
					<span class="i-mdi-basket text-3xl"></span>
				</button>
				<button
					class="text-black inline-flex items-center px-8 py-2 bg-gray-100 rounded-3xl outline-none nav-toggler"
				>
					Войти
				</button>
			</div>

		</div>
	</nav>

	  <!-- Slide-over -->
	<div class="slide-over hidden fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-10">
		<div class="w-full md:w-[613px] bg-slide shadow-xl absolute right-0 h-screen p-4 sm:p-8">
			<button 
				@click="OpenCloseBasket()"
				class="absolute z-1 top-4 right-4 w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer transition duration-[0.33s] hover:bg-[#f5f5f5]"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
			</button>
			<div class="basket-default-screen flex flex-col h-full">
	
				<div class="text-center text-5xl mb-8">
					<span class="dot-before-after uppercase font-neucha">корзина</span>
				</div>

				<div v-if="this.$store.getters.Cards.length" class="cards-block">
					<div v-for="(card, index) in allCards" :key="card.id">
						<CardBasket
							:id="card.id"
							:count="card.count"
							:title="card.title" 
							:weight="card.weight" 
							:content="card.content"
							:price="card.price"
							:totalPrice="card.totalPrice"
							@delFromCard="delFromCard(index)"
							@IncrementCount="IncrementCount(index)"
							@DecrementCount="DecrementCount(index)"
						/>
					</div>
				</div>
				<div v-else class="text-xl font-neucha">
					 Пока в корзине товаров нет
					 Добавте товары
					 У каждого товара есть кнопка 'добавить в корзину'
				</div>
	
				<div class="mt-auto max-w-[80%]">
					<div class="text-xl flex gap-4 font-neucha">
						<span>Общая сумма</span>
						<span class="text-2xl">{{cardTotalCost}} ₽</span>
					</div>
					<div class="text-star  font-ubuntu">
						Сумма заказа для доставки курьером должна составлять не менее 500 ₽
					</div>
					<div class="flex flex-wrap gap-8">
						<button class="card-btn card-btn-active font-neucha !px-8" 
							@click="OpenCloseBasket()"
						>
							Вернуться к покупкам
						</button>
						<!-- :disabled="formValid" -->
						<button class="card-btn font-neucha !px-8 disabled:opacity-30" 
							@click="Checkout()" 
							:disabled="cardTotalCost ? false : true"
						>
							Оформить заказ
						</button>
					</div>
				</div>
			</div>
			<div class="basket-form hidden">
				<div class="text-center text-5xl mb-8">
					<span class="dot-before-after text-3xl font-neucha">Оформление заказа</span>
				</div>
				<FormBasket :totalCost="cardTotalCost" @backToBucket="backToBucket"/>
				
			</div>
		</div>
	</div>
	<!-- /Slide-over -->
</div>
	
</template>

<script>
import FormBasket from './FormBasket'
import CardBasket from './CardBasket'
import {mapGetters, mapActions} from 'vuex'


export default {
	name: 'NavBar',
	components: { 
		FormBasket,
		CardBasket
	},
	props:{

	},
	data() {
	  return {
		model: false,
		localCount: this.count
	  }
	},
	computed: {
		...mapGetters([
			'CARDS',
		]),
		allCards() {
     	 return this.$store.getters.Cards
		},
		cardTotalCost(){
			let rezult=[]
			// this.$store.getters.Cards.length
			// console.log(' this.$store.getters.Cards = ',this.$store.getters.Cards);
			if(this.$store.getters.Cards.length){

				for(let item of this.$store.getters.Cards){
					// rezult.push(item.price * item.count)
					rezult.push(item.totalPrice)
				}
	
				rezult = rezult.reduce(function(sum, el){
					return sum + el;
				})
				return rezult
			} else {
				return 0
			}
		},
	
	},
	methods: {
		...mapActions([
			'DEL_FROM_CARD',
			'CALC_TOTAL_CARD',
			'INC_COUNT',
			'DECR_COUNT'
		]),
		OpenCloseMenu() {
			document.querySelector('.top-navbar').classList.toggle('hidden')
			document.getElementsByTagName('html')[0].classList.toggle('!overflow-y-hidden')
		},
		OpenCloseBasket() {
			document.querySelector('.slide-over').classList.toggle('hidden')
			// console.log(' html = ', document.getElementsByTagName('html')[0].classList.toggle('!overflow-y-hidden'))
			document.getElementsByTagName('html')[0].classList.toggle('!overflow-y-hidden')
		},
		Checkout() {
			document.querySelector('.basket-default-screen').classList.toggle('hidden')
			document.querySelector('.basket-form').classList.toggle('hidden')
		},

		delFromCard(index){
			// console.log('delFromCard index = ',index );
			this.DEL_FROM_CARD(index)
		},
		calculateTotalCard(index){
			// console.log('delFromCard index = ',index );
			this.CALC_TOTAL_CARD(index)
		},
		IncrementCount(index){
			// console.log('IncrementCount index = ',index );
			this.INC_COUNT(index)
		},
		DecrementCount(index){
			// console.log('IncrementCount index = ',index );
			this.DECR_COUNT(index)
		},
		backToBucket(){
			document.querySelector('.basket-form').classList.add('hidden')
			document.querySelector('.basket-default-screen').classList.remove('hidden')
		}
	}
  }
	
</script>

<style scoped>
.cards-block {
	/* max-height: 530px; */
	max-height: calc(100vh - 381px);
	overflow-y: auto;
	@apply p-4;
}
.text-star {
	@apply text-base leading-none my-8 leading-5 relative ml-4;
	/* letter-spacing: 0.03rem; */

	&::before {
		content: '*';
		position: absolute;
		top: 0;
		left:-1rem;
	}
}
.bg-slide {
	background: #EBE1D7;
}
.nav-target {
  display: none;
}

.logo-top {
	top: 27px 
}
.logo-desktop {
	min-width: 160px;
	height: 160px;
	position: absolute;
	top: -28px;
}
#navigation {
	
	@screen lg {
		margin-left:190px;

	}
}
.link-before {
	@apply relative;

	&::after {
		content: '';
		@apply absolute bg-white rounded-full;
		top:calc(50% - 1.5px);
		right: -14px;
		width:3px;
		height: 3px;
	}
 }
 .dot-before-after {
	@apply relative;

	@screen lg {

		&::after,
		&::before {
			content: '.';
			@apply absolute;
			top: -82%;
    		font-size: 100px;

		}
		&::after {
			right: -24px;
		}
		&::before {
			left: -24px;
		}
	}
 }

 /* .slide-over-transition {
	transform: none;
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
 } */

 .card-btn {
	@apply rounded-lg p-4 text-white bg-yellow-900;
	font-size: 18px;
	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);


	&-active{
		@apply rounded-lg p-4 text-black bg-white ;
		font-size: 18px;
	}
}

.card {
	@apply flex flex-col sm:flex-row  gap-4 items-start relative pt-3 pl-3 pb-3 bg-white border border-gray-200 rounded-lg m-1 overflow-hidden justify-around pr-20;
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
