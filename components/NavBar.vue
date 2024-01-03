<template>
<div class="">

	<nav class="bg-nav-color mb-8 lg:mb-24">
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
		<div class="w-[613px] bg-slide shadow-xl absolute right-0 h-screen p-8">
			<button 
				@click="OpenCloseBasket()"
				class="absolute z-10 top-4 right-4 w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer transition duration-[0.33s] hover:bg-[#f5f5f5]"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
			</button>
			<div class="basket-default-screen flex flex-col h-full">
	
				<div class="text-center text-5xl mb-8">
					<span class="dot-before-after uppercase font-neucha">корзина</span>
				</div>
				<CardBasket
					:title="'ролл лайт'" 
					:weight="190" 
					:content="'Листья салата, огурец, перец, помидор, сырный соус, чипсы'"
					:price="165"
				/>
				<CardBasket
					:title="'ролл лайт'" 
					:weight="190" 
					:content="'Листья салата, огурец, перец, помидор, сырный соус, чипсы'"
					:price="165"
				/>
	
				<div class="mt-auto max-w-[80%] border border-red-700">
					<div class="text-xl flex gap-4 font-neucha">
						<span>Общая сумма</span><span>16995 ₽</span>
					</div>
					<div class="text-base leading-none my-11">
						Сумма заказа для доставки курьером должна составлять не менее 500 ₽
					</div>
					<div class="flex gap-8">
						<button class="card-btn card-btn-active font-neucha">Вернуться к покупкам</button>
						<button class="card-btn font-neucha" @click="Checkout()">Оформить заказ</button>
					</div>
				</div>
			</div>
			<div class="basket-form hidden">
				<div class="text-center text-5xl mb-8">
					<span class="dot-before-after uppercase font-neucha">Оформление заказа</span>
				</div>
				<FormBasket/>
				
			</div>
		</div>
	</div>
	<!-- /Slide-over -->
</div>
	
</template>

<script>
import CardBasket from './CardBasket';
import FormBasket from './FormBasket';


export default {
	name: 'NavBar',
	components: { CardBasket, FormBasket},
	data() {
	  return {
		model: false,
	  }
	},
	methods: {
		OpenCloseMenu() {
			document.querySelector('.top-navbar').classList.toggle('hidden')
		},
		OpenCloseBasket() {
			document.querySelector('.slide-over').classList.toggle('hidden')
		},
		Checkout() {
			console.log('Checkout');
			document.querySelector('.basket-default-screen').classList.toggle('hidden')
			document.querySelector('.basket-form').classList.toggle('hidden')
			// e.preventDefault();
		}
	}
  }
	
</script>

<style scoped>
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

	@screen lg {

		&::after {
			content: '';
			@apply absolute bg-white rounded-full;
			top:calc(50% - 1.5px);
			right: -14px;
			width:3px;
			height: 3px;
		}
	}
 }
 .dot-before-after {
	@apply relative;

	@screen lg {

		&::after,
		&::before {
			content: '.';
			@apply absolute;
			top: 0;

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
</style>
