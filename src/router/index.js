import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/PracticeView.vue'
import PracticeView from "@/views/PracticeView";
import TheoryView from "@/views/TheoryView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/practice',
    name: 'practice',
    component: PracticeView
  },
  {
    path: '/theory',
    name: 'theory',
    component:  TheoryView
  }
]

const router = new VueRouter({
  routes
})

export default router
