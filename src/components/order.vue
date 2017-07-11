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
	                <router-link exact :to="{path:'/order/'+outeritem.msg+'/'+inneritem.info}" style="color: #666" >
	                  {{inneritem.menu}}
	                </router-link>
	              </div>
	            </div>
	          </div>

	        </div>
	      </div>
	    </div>
	    <!-- 嵌套路由 -->
	    <div class="rightInfos">
	    	<transition mode="out-in">
	    		<router-view name="center"></router-view>
	    	</transition>
	    </div>
	</div>
</template>

<script>
	  //动态路由机制  这些数据是从后台动态 暂时造假数据

  var data=[//后期使用ajax从后台获取到
    {
      title:"订单管理",//返回名字
      msg:"ddgl",
      nextmemu:[
        {menu:"客户检索",info:"order1"},
        {menu:"暂存录入",info:"order2"},
        {menu:"产品检索",info:"order3"},
        {menu:"我提交的特批",info:"order4"},
        {menu:"特批查阅",info:"order5"},
        {menu:"订购修改",info:"order6"},

        {menu:"变更查询",info:"order7"},
        {menu:"订单修改",info:"order8"},
        {menu:"我负责的订单",info:"order9"},
        {menu:"我管理的订单",info:"order10"},
        {menu:"ZTS可交付(无尾款)",info:"order11"},
        {menu:"ZTS可交付(有尾款)",info:"order12"},
        {menu:"ZTS不可交付产品",info:"order13"}
      ]
    },
    {
      title:"结算单管理",
      msg:"jsd",
      nextmemu:[
        {menu:"审核",info:"order14"},
        {menu:"特批",info:"order15"},
        {menu:"退赔",info:"order16"},
        {menu:"待付款",info:"order17"},
        {menu:"结算单查询",info:"order18"},
        {menu:"我的结算单",info:"order19"},
        {menu:"在线购买单",info:"order20"},
        {menu:"退转款查询",info:"order21"},
        {menu:"5.19前合同退转款查询",info:"order22"},
        {menu:"5.19前合同退转款添加",info:"order23"},
        {menu:"付款列表",info:"order24"}
      ]
    }
  ];

  export default{
  	data: function(){
  		return {
  			slideList: data,
  			slideInfo: {},
  			isBlock: false
  		}
  	},
  	watch: {
  		$route: function(){

  		}
  	},
  	created: function(){

  	},
  	methods: {
  		
  	}
  }
</script>