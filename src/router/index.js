import Vue from 'vue'
import Router from 'vue-router'
import bi from '@/components/bi'
import bs from '@/components/bs'
import order from '@/components/order'

import bi1 from '@/views/bi/bi1'
import bi2 from '@/views/bi/bi2'
import bi3 from '@/views/bi/bi3'
import bs1 from '@/views/bs/bs1'
import bs2 from '@/views/bs/bs2'
import order1 from '@/views/order/order1'
import order2 from '@/views/order/order2'
import order3 from '@/views/order/order3'

Vue.use(Router);

var routerObj = [];//定义所有路由信息

var router = new Router({//配置路由项，嵌套路由
	mode: 'history',
	linkActiveClass: 'is-active',
	scrollBehavior: function(to,from,savePosition){
		if(to.hash){
			return{
				selector: to.hash
			}
		}
	},
	routes: [
		{
			path: '/',
			component: bi,//初始路由显示
			alias: '/home'//组件的别名
		},
		{
			path: '/bi',//动态路由的形式
			component: bi,
			children: [
				{
					path: '/bi/tj/bi1',
					components: {
						default: bi,
						center: bi1
					}
				},
				{
					path: 'tj/bi2',
					components: {
						default: bi,
						center: bi2
					}
				},
				{
					path: '/bi/tj/bi3',
					components: {
						default: bi,
						center: bi3
					}
				}
			]
		},
		{
			path: '/bs',
			name: 'Bs',
			component: bs,
			children: [
				{
					path: 'ggzy/sw1',
					name: 'bs1',
					components:{
						default: bs,
						center: bs1
					}
				},
				{
					path: 'ggzy/sw2',
					name: 'bs2',
					components:{
						default: bs,
						center: bs2
					}
				}
			]
		},
		{
			path: '/order',
			name: 'Order',
			component: order,
			children: [
				{
					path: '/order/ddgl/order1',
					name: 'order1',
					components: {
						default: order,
						center: order1
					}
				},
				{
					path: '/order/ddgl/order2',
					name: 'order2',
					components: {
						default: order,
						center: order2
					}
				},
				{
					path: '/order/ddgl/order3',
					name: 'order3',
					components: {
						default: order,
						center: order3
					}
				}

			]
		}
	]
});

export default router