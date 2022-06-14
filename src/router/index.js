import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// import Header from '../layouts/Header.vue'
// import Footer from '../layouts/Footer.vue'

import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProductList
    },
    {
        path: '/detail',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/create',
        name: 'ProductCreate',
        component: ProductCreate
    },
    {
        path: '/update',
        name: 'ProductUpdate',
        component: ProductUpdate
    },
    {
        path: '/sales',
        name: 'SalesList',
        component: SalesList
    },
    {
        path: '/image_insert',
        name: 'ImageInsert',
        component: ImageInsert
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
    // {
    //     path: '/header',
    //     name: 'HeaderPage',
    //     component: Header
    // },
    // {
    //     path: '/footer',
    //     name: 'FooterPage',
    //     component: Footer
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
