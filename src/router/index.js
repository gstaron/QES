import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const requireAuth = (to, from, next) => {
    if (!('token' in localStorage) || !localStorage.token) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
          })        
    } else if (localStorage.role === 'anonymous') {
      next({
        path: '/voting',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [
        {
            path: '/',
            redirect: '/voting-management/manage-voting'
        },
        {
            name: 'new-voting',
            path: '/voting-management/new-voting',
            component: () => import('../pages/NewVoting.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting',
            path: '/voting-management/manage-voting',
            component: () => import('../pages/ManageVotings.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voter',
            path: '/voting-list-management/manage-voter',
            component: () => import('../pages/ManageVoters.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting-list',
            path: '/voting-list-management/manage-list',
            component: () => import('../pages/ManageVotersLists.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'vote',
            path: '/voting/vote/:id',
            component: () => import('../pages/Vote.vue'),
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../pages/Login.vue'),
        },
        // {
        //     path: '/',
        //     redirect: '/voting-management',
        // },
        // {
        //     name: 'voting-management',
        //     path: '/voting-management',
        //     redirect: '/voting-management/manage-voting',
        //     children: [
        //         {
        //             name: 'new-voting',
        //             path: '/voting-management/new-voting',
        //             component: () => import('../pages/NewVoting.vue'),
        //         },
        //         {
        //             name: 'manage-voting',
        //             path: '/voting-management/manage-voting',
        //             component: () => import('../pages/ManageVotings.vue')
        //         },
        //     ],
        //     // beforeEnter: requireAuth
        // },
        // {
        //     name: 'voting',
        //     path: '/voting',
        //     redirect: '/voting/vote',
        //     children: [
        //         {
        //             name: 'vote',
        //             path: '/voting/vote',
        //             component: () => import('../pages/Vote.vue'),
        //         },
        //     ],
        // },
        // {
        //     path: '/login',
        //     name: 'login',
        //     meta: {layout: 'userpages'},
        //     component: () => import('../pages/Login.vue')
        // }
    ]
})
