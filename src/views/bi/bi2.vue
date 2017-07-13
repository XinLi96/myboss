<template>
	<div class="content">
		<h2 style="text-align:center">过滤器功能</h2>
		<hr>
		<div class="bt-po">
			<input type="button" value="年龄升序" class="bt" @click="sortFn(0,'age')">
			<input type="button" value="年龄降序" class="bt" @click="sortFn(1,'age')">
			<input type="button" value="姓名升序" class="bt" @click="sortFn(0,'name')">
			<input type="button" value="姓名降序" class="bt" @click="sortFn(1,'name')">
			<input type="button" value="新增" class="bt" @click="addFn">
		</div>

		<table style="border:1px solid #000;margin:20px auto;">
			<thead>
				<tr style="border:1px solid #000;">
					<th style="border:1px solid #000;">名字</th>
					<th style="border:1px solid #000;">年龄</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in dataList" style="border:1px solid #000;">
					<td v-for="(val, key, index) in item" style="border:1px solid #000;">{{val}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data: function () {
	      return {
	      	dataList:[
	      		{
	            	name:"liqin",
	            	age:12
	         	},
		        {
		            name:"daiwei",
		            age:25
		        },
		        {
		            name:"aaaa",
		            age:1
		        },
		        {
		            name:"zhaoliu1",
		            age:33
		        },
		        {
		            name:"xiaoming",
		            age:13
		        }
	      	]
	      }
	    },
	    watch:{
	      $route: function () {
	      }
	    },
	    created: function () {
	    },
	    methods:{
	    	addFn: function(){
	    		this.dataList.push({
	    			name: "tt"+Math.floor(Math.random()*100),
	    			age: Math.floor(Math.random()*100)
	    		})
	    	},
	    	sortFn: function(flag,str){
	    		var temp = {};
	    		if(flag == 0){
	    			temp = this.dataList[0];
	    			for(var i=1 ; i<this.dataList.length ; i++){
	    				if(this.dataList[i][str] < this.dataList[i-1][str]){
	    					temp = this.dataList[i-1];
	    					this.dataList[i-1] = this.dataList[i];
	    					this.dataList[i] = temp;
	    					this.sortFn(0,str);
	    				}else{
	    					temp = this.dataList[i-1];
	    				}
	    			}
	    		}else if(flag == 1){
	    			temp = this.dataList[0];
	    			for(var i=1 ; i<this.dataList.length ; i++){
	    				if(this.dataList[i][str] > this.dataList[i-1][str]){
	    					temp = this.dataList[i];
	    					this.dataList[i] = this.dataList[i-1];
	    					this.dataList[i-1] = temp;
	    					this.sortFn(1,str);
	    				}else{
	    					temp = this.dataList[i-1];
	    				}
	    			}
	    		}
	    		this.dataList = this.dataList.splice(0);
	    		temp = {};
	    	}
	    }
	}
</script>
<style>
	.bt-po{
		text-align: center;
	}
	.bt{
		margin-right: 20px;
		margin-top: 10px;
	}
</style>