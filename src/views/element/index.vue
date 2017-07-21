<template>
<div class="content">
  <headerd AddBtnName="创建线索" BatchBtnName="批量分配" :IsData="IsData" :IsAddBtns="true" :IsBatchBtns="true" :AddBtn="AddBtns" :BatchBtn="BatchBtns"></headerd>

  <div class="filters">
    <el-form ref="form" :model="ruleForm" class="ruleForm">
      <el-form-item class="clearfix">
        <el-select v-model="ruleForm.timeType" clearable placeholder="全部">
          <el-option label="创建时间" value="CLUE_CREATE_TIME"></el-option>
          <el-option label="最后处理时间" value="CLUE_HANDLE_TIME"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="clearfix">
        <el-date-picker v-model="ruleForm.startDate" type="date" placeholder="起始时间"></el-date-picker>
      </el-form-item>
      <el-form-item class="clearfix" label="至">
        <el-date-picker v-model="ruleForm.endDate" type="date" placeholder="结束时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="状态" class="clearfix">
        <el-select v-model="ruleForm.clueStatus" clearable placeholder="请选择">
          <el-option label="待分配" value="CLUE_STATUS_01"></el-option>
          <el-option label="待处理" value="CLUE_STATUS_02"></el-option>
          <el-option label="已完成" value="CLUE_STATUS_03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="处理结果" class="clearfix">
        <el-select v-model="ruleForm.handleResult" clearable placeholder="请选择">
          <el-option label="暂未联系到联系人" value="CLUE_HANDLE_STATUS_01"></el-option>
          <el-option label="联系信息错误" value="CLUE_HANDLE_STATUS_02"></el-option>
          <el-option label="客户当前无购买意向" value="CLUE_HANDLE_STATUS_03"></el-option>
          <el-option label="已转化商机" value="CLUE_HANDLE_STATUS_04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" class="clearfix">
        <el-select v-model="ruleForm.source" clearable placeholder="请选择">
          <el-option label="创建时间" value="CLUE_CREATE_TIME"></el-option>
          <el-option label="最后处理时间" value="CLUE_HANDLE_TIME"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <el-table :data="LeadsData" border  style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column fixed label="线索单号" width="150">
      <template scope="scope">
              <router-link :to="{ name: 'leadsView', params: { id: scope.row.clueCode }}">{{scope.row.clueCode}}</router-link>
      </template>
    </el-table-column>
    <el-table-column prop="custName" label="客户名称" width="200"></el-table-column>
    <el-table-column prop="linkmanName" label="联系人" width="100"></el-table-column>
    <el-table-column prop="mobile" label="手机" width="150"></el-table-column>
    <el-table-column prop="province" label="地区"></el-table-column>
    <el-table-column prop="source" label="来源"></el-table-column>
    <el-table-column prop="createrName" label="创建人" width="120"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" width="120"></el-table-column>
    <el-table-column prop="clueStatus" label="状态" ></el-table-column>
    <el-table-column prop="handlePersonName" label="处理人" width="100"></el-table-column>
    <el-table-column prop="handleResult" label="处理结果" width="120"></el-table-column>
    <el-table-column prop="handleTime" label="最新处理时间" width="120"></el-table-column>

    <el-table-column fixed="right" label="操作" width="100">
      <template scope="scope">
        <el-button @click="handleClick(scope.row.clueCode)" type="text" size="small">处理</el-button>
        <el-button type="text" size="small" @click="dialogFormVisible = true">分配</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-dialog title="分配列表" size="small" :visible.sync="dialogFormVisible">
      <el-form :model="distributionform">
        <el-form-item :label-width="formLabelWidth">
          <el-select v-model="distributionform.region">
            <el-option label="部门1" value="shanghai"></el-option>
            <el-option label="部门1" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="ml35">
        <el-radio-group v-model="distributionform.radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group> 
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center;">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="distributionOK">确 定</el-button>
      </div>
    </el-dialog>

   <el-pagination class="fr" @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next" :total="totalPage"></el-pagination>

</div>
</template>
<script>
  import headerd from '@v/components/titleBar';
  export default {
    created(){
       this.$api("index.clueList")
         .then(function(response){
           console.log(response)
           this.LeadsData = response.data;
         })
         .then(function(errs){
           console.log(errs)
         });
    },
    data(){
     return {
         IsData:true, //批量分配数量是否大于1
         dialogFormVisible: false,
         formLabelWidth: '35px',
         distributionform: {
              region: '',
              radio2:2,
        },
        ruleForm:{
          timeType:'CLUE_CREATE_TIME',
          startDate: '',
          endDate: '',
          clueStatus: '',
          handleResult:'',
          source:''
        },
        status: '',
        totalPage:100,
        currentPage:1,
        pageSize:20,
        LeadsData:[]
      }
  },
  props: ['headerd'],
  components:{
    headerd
  },
  methods:{
    handleSelectionChange(val) {
          this.multipleSelection = val;
          this.IsData = true
          console.log(val)
          if(val.length>1){
            this.IsData = false
          }
        },
      //分配列表的确定
      distributionOK(){   
      this.dialogFormVisible = false
    },
    AddBtns(){
      this.$router.push({name: 'creatLeads'});
    },
    BatchBtns() {
    },
    handleClick(id){//线索处理
          console.log(id);
      this.$router.push({name: 'handleLeads',params: {id: id}});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    query(){
      console.log(this.ruleForm.startDate.toLocaleString()+' '+this.ruleForm.endDate.toLocaleString()+' '
                +this.ruleForm.clueStatus+' '+this.ruleForm.handleResult+' '+this.ruleForm.source+' '+this.ruleForm.timeType);
      this.$api("index.clueList",
      {timeType:this.ruleForm.timeType,
          startDate:this.ruleForm.startDate.toLocaleString(),
          endDate:this.ruleForm.endDate.toLocaleString(),
          clueStatus:this.ruleForm.clueStatus,
          handleResult:this.ruleForm.handleResult,
          source:this.ruleForm.source
      })
      .then(function(response){
          console.log(response)
          this.LeadsData = response.data;
      })
      .then(function(errs){
          console.log(errs)
      });
    }
  }
}
</script>
<style>
  .el-table th>.cell{width: auto;line-height: 23px}
</style>
