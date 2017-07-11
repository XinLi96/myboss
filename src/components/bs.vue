<!-- 备注： 修改router-link 里面的 path 对应相应的父路由 -->
<template>
<div>
  <div class="sideBar">
    <div class="sideList">
      <div class="accordion" id="accordion2">
        <div class="accordion-group slideWrap"  v-for="(outeritem,index) in slideList">
          <div class="accordion-heading slideHead">
            <!--字符串的拼接-->
            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"  :href=" '#'+index" >
              {{outeritem.title}}
            </a>
          </div>
          <div :id='index' class="accordion-body collapse in">
            <div  class="accordion-inner slideInner"  v-for="(inneritem,innerindex) in outeritem.nextmemu" :class="{ block: (index === 0) }">
              <router-link exact :to="{path:'/bs/'+outeritem.msg+'/'+inneritem.info}" style="color: #666" >
                {{inneritem.menu}}
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
  var data=[//后期使用ajax从后台获取到
    {
      title:"公共资源",//返回名字
      msg:"ggzy",
      nextmemu:[
        {menu:"公海数据",info:"sw1"},
        {menu:"领导推荐",info:"sw2"}
      ]
    },
    {
      title:"客户定位",
      msg:"khdw",
      nextmemu:[
        {menu:"客户定位",info:"sw3"}
      ]
    },
    {
      title:"添加客户",
      msg:"tjkh",
      nextmemu:[
        {menu:"添加客户",info:"sw4"},
        {menu:"添加客户2",info:"sw4"}
      ]
    }
  ];
  
  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
        slideList:data,
        slideInfo:{},
        isBlock:false
      }
    },
    watch:{
      $route: function () {
        //路由发生变化的时候 $route会重新赋值 监控这个属性，执行函数

      }
    },
    created: function () {
      // 渲染这个组件会调用一次这个生命周期函数
      // 复用这个组件，这个函数不会再次被调用了
    },
    methods:{
      
    }
  }
</script>