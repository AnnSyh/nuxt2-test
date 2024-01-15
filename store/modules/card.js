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
        INC_COUNT({commit},index){            
            commit('COUNT_PLUS_ONE',index)
        },
        DECR_COUNT({commit},index){            
            commit('COUNT_MINUS_ONE',index)
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
            state.cards[index].totalPrice = state.cards[index].count*state.cards[index].price
        },
        COUNT_PLUS_ONE(state, index){
            // this.count++;
            state.cards[index].count++ 
            state.cards[index].totalPrice = state.cards[index].count*state.cards[index].price
        },
        COUNT_MINUS_ONE(state, index){
			// if (this.count > 0) {
			// 	this.count--;
			// 	this.totalPrice = this.price*this.count
			// }
            if (state.cards[index].count > 0){
                state.cards[index].count-- 
                state.cards[index].totalPrice = state.cards[index].count*state.cards[index].price
            }
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