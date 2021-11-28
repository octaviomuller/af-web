import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import BankStatements from '../pages/BankStatements.vue'
import Investments from '../pages/Investments.vue'
import Cards from '../pages/Cards.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: Home },
      { path: '/statements', component: BankStatements },
      { path: '/investments', component: Investments },
      { path: '/cards', component: Cards },
    ]
})