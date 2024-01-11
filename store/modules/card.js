export default {
    actions: {
		async fetchCards(ctx, limit = 3){
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/photos?_limit=" + limit
            )
            const cards = await res.json()
            ctx.commit('updateCards',cards)
        },
        ADD_TO_CARD({commit},product){
            commit('SET_CARD',product)
        },
        DEL_FROM_CARD({commit},index){
            commit('REMOVE_FROM_CARD',index)
        },
        CALC_TOTAL_CARD({commit},index){
            commit('ADD_TOTAL_PRICE',index)
        },
	},
	mutations: {
		updateCards(state, cards){
            state.cards = cards
        },
        SET_CARD(state, product){
            if(state.cards.length){
                let isProductExist = false

                state.cards.map(function(item){

                    if ( item.id === product.id ) {
                        isProductExist = true
                        item.count++
                        item.totalPrice = item.count * item.price;

                    }
                })

                if(!isProductExist){
                    state.cards.push(product)
                }

            } else {
                state.cards.push(product)
            }
        },
        REMOVE_FROM_CARD(state, index){
            state.cards.splice(index, 1)
        },
        ADD_TOTAL_PRICE(state, index){
            console.log('index = ', index);
            // state.cards.splice(index, 1)
        },
	},
	state: {
        cards:[],
	},
	getters: {
        Cards(state){
            return state.cards
        },
        postsCount(state){
            return state.cards.length
        }
	},
}