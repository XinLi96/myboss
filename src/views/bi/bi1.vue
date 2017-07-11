<template>
	<div class="content">我是BI第一个内容
	<div class="progress">
	  <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
	    <span class="sr-only">60% Complete</span>
	  </div>
	</div>
	<div class="progress progress-striped active">
	  <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
	    <span class="sr-only">45% Complete</span>
	  </div>
	</div>
	</div>

</template>

<script>
	//监听到路由发生呢变化的时候，让页面可以重新点击
	export default{
		data: function(){
			return{

			}
		},
		watch: {
			$route: function(){

			}
		},
		created: function(){

		},
		methods:{
			
		}
	}
</script>