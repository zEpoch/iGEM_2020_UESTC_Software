
import Home from '../views/Home.vue'
import AboutUs   from  '../components/AboutUs.vue'


const router = new VueRouter({
  routes:Routes,
  mode:'history',

    routers=[
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
]
})


