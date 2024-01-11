<template>
	<div class="">
		<h1 class="text-center text-5xl mb-8">
			<span class="dot-before-after uppercase font-neucha">Меню</span>
		</h1>
		<NavCards/>
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

			<div v-for="(card, index) in cards" 
				:key="index" 
				class="flex flex-col items-center p-6"
			>
				<Card
					:id="card.id" 
					:count="card.count" 
					:title="card.title" 
					:weight="card.weight" 
					:content="card.content"
					:price="card.price"
					:active="card.active"
					@addToCard="addToCard"
				/>
			</div>

			<!-- <div v-for="(image, index) in photos" 
				:key="index" 
				class="flex flex-col items-center p-6"
			>
				<img 	width="200" height="200" 
						:src="image.url" 
						@click="showModalWindow(index)" 
						class="cursor-pointer"
				>
			</div> -->
		</div>

		<Modal :image="selectedImage" :show="showModal" @close="closeModal" />
	</div>
</template>

<script>
import Card from './Card';
import Modal from './Modal.vue';
import NavCards from './NavCards.vue'
import {mapActions} from 'vuex'

export default {
	name: 'Cards',
	components: {
		Modal,
		Card
	},
	data() {
		return {
			photos:[],
			cards:[
				{id:1, title:'ролл ясай', 	weight:185, content:'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 	price:200, count:1, totalPrice:200 },
				{id:2, title:'2-ролл ясай', weight:222, content:'2-Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',	price:222, count:1, totalPrice:222 },
				{id:3, title:'3-ролл ясай', weight:333, content:'3-Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 	price:333, count:1, totalPrice:333 },
				{id:4, title:'3-ролл ясай', weight:333, content:'3-Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 	price:333, count:1, totalPrice:333 , active:true},
			],
			selectedImage: {},
			showModal: false
		};
	},
	mounted(){
		this.fetchTodo()
	},
	methods: {
		...mapActions([
			'ADD_TO_CARD'
		]),
		addToCard(data){
			console.log('addToCard: data = ', data);
			this.ADD_TO_CARD(data)
		},
		async fetchTodo() {
			this.photos = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then(res => res.json())
		},
		showModalWindow(index) {
			this.selectedImage = this.photos[index];
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		}
	}
	
}
</script>
<style scoped>

.dot-before-after {

	@apply relative;


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
</style>