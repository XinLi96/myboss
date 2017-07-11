<template>
	 <div class="container body-content ls">  
        
        <div id="test" class="form-group">  
            <div class="form-group">  
                <div class="page-header">  
                    后台管理数据  
                </div>  
                <form action="" class="form-inline" style="margin-bottom: 30px;">
                	<div class="form-group">
                		<input type="text" placeholder="姓名" class="form-control" v-model="searchName">
                		<button class="btn btn-primary">搜索</button>
                	</div>
                	<div class="form-group">
                		<button class="btn btn-danger" @click="resetData()">重置</button>
                	</div>
                	<div class="form-group">
			            <button type="button" class="btn btn-primary" data-toggle="modal"  @click="showModal()">
			              新增
			            </button>
		          	</div>
                </form>
                <table class="table table-striped">  
                    <tr>  
                        <th>姓名</th>  
                        <th>年龄</th>  
                        <th>删除信息</th>  
                    </tr>  
                    <tr v-for="(item,index) in arrayData">  
                        <td class="text-center">{{item.name}}</td>  
                        <td>{{item.age}}</td>  
                        <td>
                        	<a href="javascript:void(0)" v-on:click="deleteItem($index,item.age)">
                        	<button class="btn btn-primary btn-sm" @click="showModalDel(index,item.age)" data-toggle="modal">删除</button>
                       		</a>
                 	    </td>  
                    </tr>  
                </table>  
                <div class="pager" id="pager">
          <!--开头的页码-->
          <span class="form-inline">
              <select class="form-control" v-model="pagesize" @change="showPage(pageCurrent,$event,true)" number>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
          </span>
          <!--中间页码-->
          <template v-for="item in pageCount+1">
                        <span v-if="item==1" class="btn btn-default" v-on:click="showPage(1,$event)">
                            首页
                        </span>
                        <span v-if="item==1" class="btn btn-default" v-on:click="showPage(pageCurrent-1,$event)">
                            上一页
                        </span>
                        <span v-if="item==1" class="btn btn-default" v-on:click="showPage(item,$event)">
                            {{item}}
                        </span>
                        <span v-if="item==1&&item<showPagesStart-1" class="btn btn-default disabled">
                            ...
                        </span>
                        <span v-if="item>1&&item<=pageCount-1&&item>=showPagesStart&&item<=showPageEnd&&item<=pageCount" class="btn btn-default" v-on:click="showPage(item,$event)">
                            {{item}}
                        </span>
                        <span v-if="item==pageCount&&item>showPageEnd+1" class="btn btn-default disabled">
                            ...
                        </span>
                        <span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(item,$event)">
                            {{item}}
                        </span>
                        <span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(pageCurrent+1,$event)">
                            下一页
                        </span>
                        <span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(pageCount,$event)">
                            尾页
                        </span>
          </template>

          <!--尾部-->
           <span class="form-inline">
                <input class="pageIndex form-control"
                       style="width:60px;text-align:center"
                       type="text"
                       v-model="pageCurrent"
                       @keyup.enter="showPage(pageCurrent,$event,true)"
                  />
               </span>
          <span>{{pageCurrent}}/{{pageCount}}</span>
          </div>
            </div>  
        </div>  

           <!-- Add Modal -->
	    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	            <h4 class="modal-title" id="myModalLabel">新增菜单</h4>
	          </div>
	          <div class="modal-body">
	            <form>
	              <div class="form-group text-left">
	                <label for="recipient-name" class="control-label">姓名:</label>
	                <input type="text" class="form-control" id="recipient-name"  v-model="addName">
	              </div>
	              <div class="form-group text-left">
	                <label for="recipient-age" class="control-label" >年龄:</label>
	                <input type="text" class="form-control" id="recipient-age" v-model="addAge">
	              </div>

	            </form>
	          </div>
	          <div class="modal-footer">
	            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	            <button type="button" class="btn btn-primary" @click="saveAddData()">保存</button>
	          </div>
	          </div>
	        </div>
	      </div>

	    <!--Delete Modal-->
	    <div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
	      <div class="modal-dialog">
	        <div class="modal-content">
	          <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal">
	              <span>&times;</span>
	            </button>
	            <h4 class="modal-title">确认删除么?</h4>
	          </div>
	          <div class="modal-body text-right">
	            <button data-dismiss="modal" class="btn btn-primary btn-sm">取消</button>
	            <button data-dismiss="modal" class="btn btn-danger btn-sm" @click="deleteMsg(nowIndex)">确认</button>
	          </div>
	        </div>
	      </div>
	    </div>

	    </div>
</template>

<script>
	var arrayData=[
    {
      "name":"zhangsan",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    }
    ,
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":12
    },
    {
      "name":"lx",
      "age":11
    },
    {
      "name":"wang",
      "age":20
    }
  ];
  export default{
  	data: function(){
  		return {
			//总项目数  
			totalCount: 200,  
			//分页数  
			pageCount: 20,  
			//当前页面  
			pageCurrent: 1,  
			//分页大小  
			pagesize: 10,  
			//显示分页按钮数  
			showPages: 5,  
			//开始显示的分页按钮  
			showPagesStart: 1,  
			//结束显示的分页按钮  
			showPageEnd: 100,  
			//分页数据  
			arrayData: [], 
			
			 //搜索的项
	        searchName:"",
	        searchAge:"",

	        //新增用户信息
	        addName:"",
	        addAge:"",

	        // 删除用户记录索引
	        nowIndex:-100
			}
		},
		computed: {//计算属性
	      filterArrayData: function () {
	        var self = this;
	        return self.arrayData.filter(function (item) {
	          return item.name.indexOf(self.searchName) == -1
	        })
	      }
	    },
	    watch: {
	      $route: function () {

	      }
	    },
	    created: function () {
	      this.showPage(this.pageCurrent, null, true);

	    },	
	    methods: {
	    	showModalDel: function(index){
	    		$('#layer').modal('show');
	    		this,nowIndex = index;
	    	},
	    	deleteMsg: function(index){
	    		this.arrayData.splice(index,1);
	    	},
	    	showModal: function(){
	    		this.addName = "";
	    		this.addAge = "";
	    		$("#myModal").modal('show');
	    	},
	    	saveAddDate: function(){
	    		if(this.addName && this.addAge){
	    			console.log(this.addName+','+this.addAge);
	    			this.arrayData.push({
	    				"name":this.addName,
	    				"age":this.addAge
	    			})
	    		}
	    		$('#myModal').modal('hide');
	    	},
	    	resetData: function(){
	    		this.searchName="";
	    	},
	    	showPage: function (pageIndex, $event, forceRefresh) {//显示分页的代码
	        var This=this;
	        if (pageIndex > 0) {
	          if (pageIndex > this.pageCount) {
	            pageIndex = this.pageCount;
	          }
	          //判断数据是否需要更新
	          var currentPageCount = Math.ceil(this.totalCount / this.pagesize);
	          if (currentPageCount != this.pageCount) {
	            pageIndex = 1;
	            this.pageCount = currentPageCount;
	          }
	          else if (this.pageCurrent == pageIndex && currentPageCount == this.pageCount && typeof (forceRefresh) == "undefined") {
	            console.log("not refresh");
	            return;
	          }
	          //处理分页点中样式
	          var buttons = $("#pager").find("span");
	          for (var i = 0; i < buttons.length; i++) {
	            if (buttons.eq(i).html() != pageIndex) {
	              buttons.eq(i).removeClass("active");
	            }
	            else {
	              buttons.eq(i).addClass("active");
	            }
	          }

	          //测试数据 随机生成的
	          var newPageInfo = [];
	          for (var i = 0; i < this.pagesize; i++) {
	           newPageInfo[newPageInfo.length] = {
	           name: "test" + (i + (pageIndex - 1) * 20),
	           age: (i + (pageIndex - 1) * 20)
	           };
	           }
	          var that=this;
	          function getData(){//动态获取数据  slice可以控制显示的条数
	            that.$http.get('../js/data.json',{
	              pageIndex:pageIndex,
	              pagesize:This.pagesize
	            }).then(function(res){
	              newPageInfo = newPageInfo.concat(res.data);
	              console.log(newPageInfo);//将请求的数据存放到提前设置的数组中
	              This.pageCurrent = pageIndex;
	              This.arrayData = newPageInfo;
	            },function(res){
	              alert(res.status);
	            });
	          }
	          //getData();

	           this.pageCurrent = pageIndex;
	           this.arrayData = newPageInfo;

	          //计算分页按钮数据 20 5
	          if (this.pageCount > this.showPages) {
	            if (pageIndex <= (this.showPages - 1) / 2) {
	              this.showPagesStart = 1;
	              this.showPageEnd = this.showPages - 1;
	              console.log("showPage1")
	            }
	            else if (pageIndex >= this.pageCount - (this.showPages - 3) / 2) {
	              this.showPagesStart = this.pageCount - this.showPages + 2;
	              this.showPageEnd = this.pageCount;
	              console.log("showPage2");
	            }
	            else {
	              console.log("showPage3");
	              this.showPagesStart = pageIndex - (this.showPages - 3) / 2;
	              if(!isNaN(pageIndex)){//用于处理用户输入的不是数字的处理

	              }else{

	              }
	              this.showPageEnd = Number(pageIndex) + (Number(this.showPages) - 3) / 2;//将输入的值强制转成数字
	            }
	          }
	          console.log("showPagesStart:" + this.showPagesStart + ",showPageEnd:" + this.showPageEnd + ",pageIndex:" + pageIndex);
	        }
	      }

	    }
  	}
</script>

<style>
	.ls{
		/*position: absolute;*/
		/*margin-left: 100px;*/
		/*width: calc(100% - 240px);*/
		/*text-align: center;*/
	}
</style>