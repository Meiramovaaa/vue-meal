import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from "../views/MealsByName.vue"
import MealsByIngredients from "../views/MealsByIngredients.vue"
import DefaultLayout from "../components/DefaultLayout.vue"
import MealDetails from '../views/MealDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: '/name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/ing/:ing?',
          name: 'byIngredient',
          component: MealsByIngredients
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetails
        },
      ]
    },
    // {
    //   path: '/guest',
    //   name: 'guest',
    //   component: GuestLayOut,
    //   children:[
    //     {
    //       path: '/',
    //       name: 'home',
    //       component: Home
    //     },
    //   ]
    // },
  ]
})

export default router
