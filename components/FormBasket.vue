<template>
	<form class="" @submit.prevent="submitHandler">

		<div class="card">
			<div class="flex gap-4">
				<div class="flex items-center justify-center rounded-full text-white bg-red-700 w-[32px] h-[32px];">1</div>
				<div class="form-title">Способ доставки</div>
			</div>
			<div class="pl-12">
				<div class="grid-container mb-4">
					<input disabled id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.6575 17.8362C20.5723 17.8362 18.876 19.5325 18.876 21.6177C18.876 23.7029 20.5723 25.3992 22.6575 25.3992C24.743 25.3992 26.439 23.7029 26.439 21.6177C26.439 19.5325 24.7427 17.8362 22.6575 17.8362ZM22.6575 23.5085C21.6148 23.5085 20.7667 22.6604 20.7667 21.6177C20.7667 20.575 21.6148 19.7269 22.6575 19.7269C23.7002 19.7269 24.5483 20.575 24.5483 21.6177C24.5483 22.6605 23.7002 23.5085 22.6575 23.5085Z" fill="#A5A5A5"/>
						<path d="M9.73758 17.8362C7.6524 17.8362 5.95605 19.5325 5.95605 21.6177C5.95605 23.7029 7.6524 25.3992 9.73758 25.3992C11.8228 25.3992 13.5191 23.7029 13.5191 21.6177C13.5191 19.5325 11.8228 17.8362 9.73758 17.8362ZM9.73758 23.5085C8.69484 23.5085 7.84682 22.6604 7.84682 21.6177C7.84682 20.575 8.69484 19.7269 9.73758 19.7269C10.78 19.7269 11.6283 20.575 11.6283 21.6177C11.6283 22.6605 10.7803 23.5085 9.73758 23.5085Z" fill="#A5A5A5"/>
						<path d="M25.2042 7.01218C25.0435 6.69296 24.7167 6.49158 24.3594 6.49158H19.3804V8.38234H23.7764L26.3506 13.5025L28.0404 12.6529L25.2042 7.01218Z" fill="#A5A5A5"/>
						<path d="M19.8213 20.7036H12.668V22.5944H19.8213V20.7036Z" fill="#A5A5A5"/>
						<path d="M6.90133 20.7036H3.62406C3.10187 20.7036 2.67871 21.1268 2.67871 21.649C2.67871 22.1712 3.10193 22.5943 3.62406 22.5943H6.90139C7.42357 22.5943 7.84674 22.1711 7.84674 21.649C7.84674 21.1268 7.42351 20.7036 6.90133 20.7036Z" fill="#A5A5A5"/>
						<path d="M29.8016 14.9243L27.942 12.5294C27.7634 12.2987 27.4876 12.1638 27.1955 12.1638H20.3257V5.54618C20.3257 5.02399 19.9025 4.60083 19.3804 4.60083H3.62406C3.10187 4.60083 2.67871 5.02405 2.67871 5.54618C2.67871 6.06831 3.10193 6.49153 3.62406 6.49153H18.435V13.1092C18.435 13.6314 18.8582 14.0545 19.3803 14.0545H26.7325L28.1093 15.828V20.7037H25.4938C24.9716 20.7037 24.5484 21.1269 24.5484 21.649C24.5484 22.1712 24.9716 22.5944 25.4938 22.5944H29.0547C29.5769 22.5944 30 22.1712 30.0001 21.649V15.5042C30.0001 15.2943 29.9301 15.0901 29.8016 14.9243Z" fill="#A5A5A5"/>
						<path d="M6.83807 15.9138H2.4893C1.96711 15.9138 1.54395 16.337 1.54395 16.8592C1.54395 17.3814 1.96717 17.8045 2.4893 17.8045H6.83801C7.3602 17.8045 7.78336 17.3813 7.78336 16.8592C7.78342 16.337 7.3602 15.9138 6.83807 15.9138Z" fill="#A5A5A5"/>
						<path d="M9.0126 12.1954H0.945352C0.423223 12.1954 0 12.6187 0 13.1408C0 13.663 0.423223 14.0862 0.945352 14.0862H9.0126C9.53479 14.0862 9.95795 13.663 9.95795 13.1408C9.95795 12.6187 9.53479 12.1954 9.0126 12.1954Z" fill="#A5A5A5"/>
						<path d="M10.5565 8.47693H2.4893C1.96711 8.47693 1.54395 8.90015 1.54395 9.42228C1.54395 9.94447 1.96717 10.3676 2.4893 10.3676H10.5565C11.0787 10.3676 11.5019 9.94441 11.5019 9.42228C11.502 8.90015 11.0787 8.47693 10.5565 8.47693Z" fill="#A5A5A5"/>
					</svg>
					<label for="default-radio-1" class="text-lg text-[#A5A5A5]">Курьер</label>
					<span class="text-xs text-[#FF0000]">Временно недоступно</span>
				</div>
				<div class="grid-container mb-4">
					<input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_3_971)">
						<path d="M25.334 27.3722L23.8127 9.07532C23.7712 8.57565 23.3834 8.19292 22.919 8.19292H19.7818V6.66483C19.7818 3.81694 17.6366 1.5 14.9998 1.5C12.3631 1.5 10.2182 3.81694 10.2182 6.66483V8.19292H7.07886C6.61441 8.19292 6.22664 8.57565 6.18513 9.07532L4.65788 27.4442C4.63539 27.7153 4.71938 27.9839 4.88939 28.1847C5.05941 28.3855 5.29977 28.4999 5.55162 28.4999H24.4464C24.4471 28.4999 24.448 28.4999 24.4487 28.4999C24.9444 28.4999 25.3461 28.066 25.3461 27.5308C25.346 27.4769 25.3419 27.4238 25.334 27.3722ZM12.0128 6.66483C12.0128 4.88568 13.3528 3.43822 14.9999 3.43822C16.6472 3.43822 17.9873 4.88568 17.9873 6.66483V8.19292H12.0128V6.66483ZM6.53317 26.5618L7.89925 10.1311H10.2182V11.8642C10.2182 12.3994 10.6198 12.8333 11.1155 12.8333C11.6112 12.8333 12.0128 12.3994 12.0128 11.8642V10.1311H17.9873V11.8642C17.9873 12.3994 18.389 12.8333 18.8846 12.8333C19.3803 12.8333 19.782 12.3994 19.782 11.8642V10.1311H22.0987L23.4648 26.5618H6.53317Z" fill="#222222"/>
						</g>
						<defs>
						<clipPath id="clip0_3_971">
						<rect width="25" height="27" fill="white" transform="translate(2.5 1.5)"/>
						</clipPath>
						</defs>
					</svg>
					<label for="default-radio-2" class="text-lg">Самовывоз</label>
					<div class="text-[#3F4871] font-bold">
						<div class="text-base">Скидка - 10%</div>
						<div class="text-small">на стоиомость покупки</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="flex gap-4 pb-10">
				<div class="flex items-center justify-center rounded-full text-white bg-red-700 w-[32px] h-[32px];">2</div>
				<div class="form-title">Данные для доставки</div>
			</div>
			<div class="pl-12 pr-20 pb-8 flex flex-col gap-14">
				<div class="">
					<div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
						<svg class="absolute pointer-events-none" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_3_1354)">
								<path d="M12.4182 10.481H5.58181C2.504 10.481 0 11.5243 0 12.8067V17.5158C0 17.7727 0.499803 17.981 1.11636 17.981H16.8836C17.5002 17.981 18 17.7727 18 17.5158V12.8067C18 11.5243 15.496 10.481 12.4182 10.481Z" fill="#474747"/>
								<path d="M9.0042 0C6.75104 0 4.91797 1.83307 4.91797 4.08628C4.91797 5.61461 5.7615 6.9494 7.00724 7.65019C7.59811 7.98257 8.27932 8.17252 9.0042 8.17252C9.72908 8.17252 10.4103 7.98257 11.0012 7.65019C12.2469 6.9494 13.0904 5.61457 13.0904 4.08628C13.0904 1.83312 11.2574 0 9.0042 0Z" fill="#474747"/>
							</g>
							<defs>
								<clipPath id="clip0_3_1354">
									<rect width="18" height="18" fill="white"/>
								</clipPath>
							</defs>
						</svg>
						<input 
							placeholder="Имя"
							class="w-full pl-10 border-b border-[#D9D9D9] focuse:border-none" 
							type="text"
						>
					</div>
					<div class="text-xs text-[#FF0000]">Это обязательное поле</div>	
				</div>

				<div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
					<svg class="absolute pointer-events-none"  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.5557 11.8149C15.4537 11.8149 14.3716 11.6426 13.3462 11.3037C12.8438 11.1323 12.2261 11.2896 11.9194 11.6045L9.8955 13.1324C7.54833 11.8794 6.10252 10.4341 4.8667 8.10455L6.34959 6.13336C6.73486 5.74861 6.87305 5.18658 6.70748 4.65923C6.36717 3.62845 6.1943 2.54691 6.1943 1.44441C6.19434 0.647953 5.54639 0 4.74998 0H1.44436C0.647953 0 0 0.647953 0 1.44436C0 10.5733 7.42678 18 16.5557 18C17.3521 18 18 17.352 18 16.5556V13.2593C18 12.4629 17.352 11.8149 16.5557 11.8149Z" fill="#474747"/>
					</svg>
					<input 
						placeholder="Телефон"
						class="w-full pl-10 border-b border-[#D9D9D9] focuse:border-none" 
						type="text"
					>
				</div>	
				<div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
					<svg class="absolute pointer-events-none" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_3_934)">
							<path d="M18 9C18 13.9706 13.9706 18 9 18C4.02937 18 0 13.9706 0 9C0 4.02937 4.02937 0 9 0C13.9706 0 18 4.02937 18 9Z" fill="#474747"/>
							<path d="M9 16.0312C5.12292 16.0312 1.96875 12.8771 1.96875 9C1.96875 5.12292 5.12292 1.96875 9 1.96875C12.8771 1.96875 16.0312 5.12292 16.0312 9C16.0312 12.8771 12.8771 16.0312 9 16.0312ZM9 3.02344C5.70451 3.02344 3.02344 5.70451 3.02344 9C3.02344 12.2955 5.70451 14.9766 9 14.9766C12.2955 14.9766 14.9766 12.2955 14.9766 9C14.9766 5.70451 12.2955 3.02344 9 3.02344Z" fill="white"/>
							<ellipse cx="8.99993" cy="9.00017" rx="7.71429" ry="7.71429" fill="#474747"/>
							<path d="M9 12.4799C8.70872 12.4799 8.47266 12.2439 8.47266 11.9526V8.4032C8.47266 8.11206 8.70872 7.87585 9 7.87585C9.29128 7.87585 9.52734 8.11206 9.52734 8.4032V11.9526C9.52734 12.2439 9.29128 12.4799 9 12.4799Z" fill="white"/>
							<path d="M9.74396 6.43301C9.74396 6.8439 9.4108 7.17706 8.99991 7.17706C8.58902 7.17706 8.25586 6.8439 8.25586 6.43301C8.25586 6.02199 8.58902 5.68896 8.99991 5.68896C9.4108 5.68896 9.74396 6.02199 9.74396 6.43301Z" fill="white"/>
						</g>
						<defs>
							<clipPath id="clip0_3_934">
								<rect width="18" height="18" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					<input 
						placeholder="Дополнительная информация"
						class="w-full pl-10 border-b border-[#D9D9D9] focuse:border-none" 
						type="text"
					>
				</div>	

			</div>
		</div>

		<div class="card">

			
			<div class="pl-12 pr-20 pb-8 pt-4">
				<div class="flex gap-4 border-b pb-4 border-gray-300 mb-4">
					<div class="text-lg">Cтоимость товаров</div>
					<div class="text-lg font-normal">450 ₽</div>
				</div>
				<div class="flex gap-4 mb-4">
					<div class="text-lg">Итого к оплате</div>
					<div class="text-lg font-normal">450 ₽</div>
				</div>
			</div>

			<button type="submit" class="form-btn">Купить и оплатить</button>
			<div class="text-xs font-light text-[#212121] mt-4">
				Создавая заказ, вы соглашаетесь с <a href="#" class="text-[#185598]">политикой обработки персональных данных</a>
			</div>

		</div>

	</form>

</template>

<script>

export default {
	name: 'FormBasket',
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
		submitHandler(){
			this.router.push('/')
		}
	}
}
</script>
<style scoped>
/* Remove outline on the forms and links */
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
.text-small {
	font-size: 8px;
}
.grid-container {
	display: grid;
	grid-template-columns: 50px 50px 44% 40%;
	align-items:center;
}
.form-title {
	font-size: 22px;
}
.form-btn {
	@apply rounded-md px-6 py-3 text-white w-full;
	background-color: #0C334A;
}
.count-btn {
	@apply flex items-center justify-center rounded-full text-white bg-yellow-900 w-[28px] h-[28px];
	font-size: 15px;
}
 .card {
	@apply relative p-3 bg-white border border-gray-200 rounded-lg m-3 overflow-hidden;
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

 }
</style>