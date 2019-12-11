const state = {
  cards: [
    {name: 'Card1', id: '1'},
    {name: 'Card2', id: '2'},
    {name: 'Card3', id: '3'}
  ]
}

const mutations = {
  ADD_CARD (state, card) {
    state.cards.push(
      {name: card.name,
      type: card.type, 
      currency: card.currency, 
      balance: card.balance
      })
  },
  CLEAR_CARDS (state) {
    state.cards = [
      {name: 'Card1', id: '1'},
      {name: 'Card2', id: '2'},
      {name: 'Card3', id: '3'}
    ]
  },
  DELETE_CARD (state, cardid) {
    state.cards = state.cards.filter(card => card.id !== cardid)
  }
}

const actions = {
  addCard ({ commit }, card) {
    commit('ADD_CARD', card)
  },
  deleteCard ({ commit }, cardid) {
    commit('DELETE_CARD', cardid)
  },
  clearCards ({ commit }) {
    commit('CLEAR_CARDS')
  }
}

export default {
  state,
  mutations,
  actions
}
