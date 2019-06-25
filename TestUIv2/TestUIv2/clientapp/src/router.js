import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Actions from './views/actions.vue'
import Executions from './views/executions.vue'
import Filters from './views/filters.vue'
import Infosets from './views/infosets.vue'
import Volumes from './views/volumes.vue'

Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
            path: '/actions',
            name: 'actions',
            component: Actions
        },
        {
            path: '/executions',
            name: 'executions',
            component: Executions
        },
        {
            path: '/filters',
            name: 'filters',
            component: Filters
        },
        {
            path: '/infosets',
            name: 'infosets',
            component: Infosets
        },
        {
            path: '/volumes',
            name: 'volumes',
            component: Volumes
        }
  ]
})
