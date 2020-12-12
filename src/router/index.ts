import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import download   from  '../components/download.vue'
import domainList   from  '../components/domainList.vue'
import Home   from  '../components/Home.vue'
import domainInteraction  from  '../components/domainInteraction.vue'
import NeuralStyle   from  '../components/NeuralStyle.vue'
import cladetail from '../components/cladetail.vue'
const searchLists = () => import('../views/searchLists.vue')
const pdbdetail = () => import('../components/pdbfile.vue')
const standardclass = () => import('../components/standardclass.vue')
const tutorial = () => import('../components/tutorial.vue')
const HP = () => import('../components/HP.vue')
Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/HP',
    name: 'HP',
    component: HP
  },{
    path: '/tutorial',
    name: 'tutorial',
    component: tutorial
  },{
    path: '/standardclass',
    name: 'standardclass',
    // component：BrickModel
    component: standardclass
  },{
    path: '/download',
    name: 'download',
    component: download
  },{
    path: '/domainList',
    name: 'product',
    component: domainList
  },{
    path: '/domainInteraction',
    name: 'domainInteraction',
    component: domainInteraction
  },{
    path: '/NeuralStyle',
    name: 'NeuralStyle',
    component: NeuralStyle
  },{
    path: '/searchLists',
    name: 'searchLists',
    component: searchLists
  },{
    path: '/:name',
    name: 'pdbId',
    //component:pdbdetail
    component: pdbdetail
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
