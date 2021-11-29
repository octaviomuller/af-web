import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bankStatement: [
      {
        value: '300.00',
        date: '27/11/2021',
        description: 'PIX RECEBIDO DE JULIANA MATARAZO',
        incoming: true
      },
      {
        value: '27.50',
        date: '10/11/2021',
        description: 'COMPRA NA PADARARIA REAL',
        incoming: false
      },
      {
        value: '1600.00',
        date: '08/11/2021',
        description: 'DEPÓSTIO DO ALEXANDRE DIAS',
        incoming: true
      },
      {
        value: '65.99',
        date: '30/10/2021',
        description: 'COMPRA NA RIACHUELO',
        incoming: false
      },
      {
        value: '8.00',
        date: '25/10/2021',
        description: 'COMPRA NA CANTINA SANTA RITA',
        incoming: false
      },
      {
        value: '200.00',
        date: '15/10/2021',
        description: 'DEPÓSITO DE RENATA GARCIA',
        incoming: true
      },
      {
        value: '50.40',
        date: '07/10/2021',
        description: 'PIX DE ADRIELLE CAMARGO',
        incoming: true
      },
      {
        value: '1000',
        date: '06/10/2021',
        description: 'COMPRA NA SHOPEE',
        incoming: false
      }
    ],
    investments: [],
    cards: []
  },
  getters: {
      
  },
  mutations: {
      
  },
  actions: {
      
  }
})