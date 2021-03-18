import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/start'},
    {
        path: '/start',
        name: 'StartConditionsPage',
        component: () => import(/* webpackChunkName: "startConditions" */ '../views/StartConditionsPage.vue')
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: () => import(/* webpackChunkName: "services" */ '../views/ServicesPage.vue')
    },
    {
        path: '/support',
        name: 'SupportPage',
        component: () => import(/* webpackChunkName: "support" */ '../views/SupportPage.vue')
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
