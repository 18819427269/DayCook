import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import child from '@/components/child'



Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  }
		{
      path: '/',
      component: home
   },
   {
      path: '/child',
      component: child
   	}
  ]
})
