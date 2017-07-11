<template>
  <div>
    <div class="sideBar">
      <div class="sideList">
      	<div class="accordion" id="accordion2">
          <div class="accordion-group slideWrap"  v-for="(outeritem,index) in slideList">
            <div class="accordion-heading slideHead">
              <!--字符串的拼接-->
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"  :href=" '#'+index" >
                {{outeritem.title}}{{index}}
              </a>
            </div>
            <div :id='index' class="accordion-body collapse in">
              <div  class="accordion-inner slideInner"  v-for="(inneritem,innerindex) in outeritem.nextmemu" :class="{ block: (index === 0) }">
                <router-link exact :to="{path:'/bi/'+outeritem.msg+'/'+inneritem.info}" style="color: #666" >
                  {{inneritem.menu}}{{ innerindex }}
                </router-link>
              </div>
            </div>
          </div>

        </div>

      </div>
     </div>
  <!--嵌套路由-->
    <div class="rightInfos">
      <transition  mode="out-in">
        <router-view  name="center"></router-view>
      </transition>
    </div>

  </div>
</template>
<script>
	var data=[//后期使用ajax从后台获取到数据
    {
      title:"统计分析",//返回名字
      msg:"tj",
      nextmemu:[
        {id:1,menu:"经营概况",info:"bi1"},
        {id:2,menu:"会员概况",info:"bi2"},
        {id:3,menu:"订单统计",info:"bi3"}
      ]
    },
    {
      title:"系统设置",
      msg:"xt",
      nextmemu:[
        {id:1,menu:"模板管理",info:"bi4"},
        {id:2,menu:"商城设置",info:"bi5"},
        {id:3,menu:"验证码设置",info:"bi6"}
      ]
    },
    {
      title:"会员管理",
      msg:"hy",
      nextmemu:[
        {id:1,menu:"会员列表",info:"bi7"},
        {id:2,menu:"会员等级",info:"bi8"},
        {id:3,menu:"验证码设置",info:"bi9"}
      ]
    }
  ];

  	//监听到路由发生变化的时候，让页面可以重新点击
    export default{
    	data: function(){
    		return{
    			slideList: data,
    			slideInfo: {},
    			isBlock: false
    		}
    	},
    	watch: {
    		$route: function(){
    			//路由发生变化时，$route会重新赋值，监控这个属性，执行函数
    			this.getData();
    		}
    	},
    	created: function (){
    		//渲染这个组件会调用一次这个生命周期函数
    		//复用这个组件，这个函数不会再次被调用
    		this.getData();
    	},
    	methods: {
			getData: function(){//从后台获取数据
				let id = this.$route.params;
			}    		
    	}
	}
</script>