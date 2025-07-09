import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLayout from '@/views/Admin/Layout/LayoutView.vue';
import AdminLogin from '@/views/Admin/Auth/LoginView.vue';
import AdminDashboard from '@/views/Admin/DashboardView.vue';
import AdminStudents from '@/views/Admin/StudentView.vue';
import AdminTeachers from '@/views/Admin/TeacherView.vue';
// import { name } from '@vue/eslint-config-prettier/skip-formatting';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'admin.login',
          component: AdminLogin
        },
        {
          path: 'dashboard',
          name: 'admin.dashboard',
          component: AdminDashboard
        },
        {
          path: 'students',
          name: 'admin.students',
          component: AdminStudents
        },
        {
          path: 'teachers',
          name: 'admin.teacher',
          component: AdminTeachers
        },
        {
          path: 'teachers',
          name: 'admin.teacher',
          component: AdminTeachers
        },
        {
          path: 'teachers',
          name: 'admin.teacher',
          component: AdminTeachers
        },
        {
          path: 'teachers',
          name: 'admin.teacher',
          component: AdminTeachers
        },

      ]

    }
  ],
})

export default router
