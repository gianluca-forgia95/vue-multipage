import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Series from '../views/Series.vue'
import Movies from '../views/movies/Movies.vue'
import JobDetails from '../views/movies/JobDetails.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/series',
    name: 'Series',
   component: Series
  },
  {
    path: '/movies',
    name: 'Movies',
   component: Movies
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catch404
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
