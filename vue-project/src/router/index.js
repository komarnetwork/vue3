import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import AboutView from '../views/About.vue'
import UserView from '../views/User.vue'
import UserDetailView from '../views/UserDetail.vue'
import UserPostView from '../views/UserPost.vue'
import UserProfileView from '../views/UserProfile.vue'
import UserIndexView from '../views/UserIndex.vue'
import TodoListView from '../views/TodoList.vue'

const routes = [
  {
    path: '',
    component: DashboardView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/user',
    component: UserView
  },
  // Route biasa
  // {
  //   path: '/user/:name',
  //   component: UserDetailView
  // },
  // {
  //   path: '/user/:name/posts',
  //   component: UserPostView
  // },
  // {
  //   path: '/user/:name/profile',
  //   component: UserProfileView
  // }

  // Nested Route
  {
    path: '/user/:name',
    component: UserIndexView,
    children: [
      {
        path: '',
        component: UserDetailView
      },
      {
        path: '/user/:name/posts',
        component: UserPostView
      },
      {
        path: '/user/:name/profile',
        component: UserProfileView
      }
    ]
  },
  {
    path: '/todolist',
    component: TodoListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
