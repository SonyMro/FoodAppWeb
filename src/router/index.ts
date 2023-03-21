import ComidasPage from '@/views/ComidasView.vue'
import HomeView from '@/views/HomeView.vue'
import MenuSemanalView from "@/views/MenuSemanalView.vue";
import menuSemanalPage from '@/menuSemanal/menuSemanalPage.vue';
import menuSemanalConfirmacionPage from '@/menuSemanal/menuSemanalConfirmacionPage.vue';
import ListaComprasView from "@/views/ListaComprasView.vue";
import IngredintesView from "@/views/IngredientesView.vue";
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Publicas
    {
      path: '/', name: 'Home', component: HomeView,

    },

    //Privadas
    {
      path: '/menuSemanal',
      redirect:'/menuSemanal/list',
      name:'Menu Semanal',
      component: MenuSemanalView,
      children: [
        {
          name:'Lista',
          path:'list',
          component: menuSemanalPage
        },
        {
          path: 'confirmacion',
          name: 'Confirmar menu',
          component: menuSemanalConfirmacionPage
        }
      ]
    },
    {
      path: '/listaCompras', name:'Lista de Compras', component: ListaComprasView
    },
    {
      path: '/comidas', name: 'Comidas', component: () => import('@/views/ComidasView.vue')
    },
    {
      path: '/ingredientes', name: 'Ingredientes', component: IngredintesView
    },
    //Default
    {
      path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' })
    }
  ]
})

export default router
