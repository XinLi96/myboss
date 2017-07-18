<template>
    <div class="content">
        <headerd AddBtnName="创建线索" BatchBtnName="批量分配" :IsData="true" :IsAddBtns="true" :IsBatchBtns="true" :AddBtn="AddBtns" :BatchBtn="BatchBtns"></headerd>
        <div class="filters">

            <el-form :model="ruleForm" class="ruleForm">
                <el-form-item>
                    <el-date-picker v-model="ruleForm.startTime" type="date" placeholder="起始时间"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-date-picker v-model="ruleForm.endTime" type="date" placeholder="结束时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="状态" class="clearfix">
                    <el-select v-model="ruleForm.status" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="query">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="BusinessData" border style="width: 100%">
            <el-table-column fixed prop="date" label="商机单号" width="150"></el-table-column>
            <el-table-column prop="name" label="客户名称" width="200"></el-table-column>
            <el-table-column prop="province" label="联系人" width="120"></el-table-column>
            <el-table-column prop="city" label="手机" width="120"></el-table-column>
            <el-table-column prop="address" label="地区"></el-table-column>
            <el-table-column prop="zip" label="创建人" width="120"></el-table-column>
            <el-table-column prop="zip" label="创建时间"></el-table-column>
            <el-table-column prop="city" label="分配区域"></el-table-column>
            <el-table-column prop="address" label="分配商务" width="120"></el-table-column>
            <el-table-column prop="zip" label="状态" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">线索</el-button>
                    <el-button type="text" @click="dialogTableVisible = true" size="small">回访</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="totalPage"></el-pagination>

        <!--回访 弹出层开始-->
        <el-dialog title="客户回访" :visible.sync="dialogTableVisible"  :size="large">
            <div class="head-row"></div>
            <div style="height: 488px;overflow: auto">
                <div class="basicInfo">
                    <div class="head">基本信息</div>
                    <div class="row1">
                        <span class="col11">客户名称：中企动力科技有限公司</span>
                        <span class="col12">地址：北京市大兴区地盛西路号数码庄园号数码庄园</span>
                        <span class="col13">联系人：张三丰&nbsp;男</span>
                    </div>
                    <div class="row1">
                        <span class="col11">手机：19216881423</span>
                        <span class="col12">固话：-</span>
                        <span class="col13">QQ：295951430</span>
                    </div>
                    <div class="row1">
                        <span class="col11">邮箱：295951430@qq.com</span>
                        <span class="col12">微信：-</span>
                        <span class="col13">职位：经理</span>
                    </div>
                    <div class="row1">
                        <span class="col11">行业：制造业/农副食品加工业</span>
                        <span class="col12">主营业务：制作鱼罐头</span>
                    </div>
                </div>
                <div class="ask-product-dialog">
                    <div class="head">咨询产品</div>
                    <div class="row2">
                        <span class="col21">建站类</span>
                        <span class="col22">预算：<span style="color: red;">30000元</span></span>
                        <span class="col23">交付周期：一个月</span>
                        <span class="col24">电商类</span>
                        <span class="col25">预算：<span style="color: red;">30000元</span></span>
                        <span class="col26">交付周期：一个月</span>
                    </div>
                    <div class="row2">
                        <span class="col21">推广类</span>
                        <span class="col22">预算：<span style="color: red;">30000元</span></span>
                        <span class="col23">交付周期：一个月</span>
                        <span class="col24">管理类</span>
                        <span class="col25">预算：<span style="color: red;">30000元</span></span>
                        <span class="col26">交付周期：一个月</span>
                    </div>
                    <div class="row2">
                        <span class="col21">解决方案</span>
                        <span class="col22">预算：<span style="color: red;">30000元</span></span>
                        <span class="col23">交付周期：一个月</span>
                    </div>
                    <div style="margin-top: 30px;font-size: 12px">
                        客户需求：<div style="vertical-align: top;width: 518px;height: 28px;display: inline-block;">比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急</div>
                    </div>
                </div>
                <div class="other-dialog">
                    <div class="head">其他</div>
                    <div class="row1">备注：无</div>
                    <div class="row1">回访：客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字</div>
                    <div class="row1">
                        <span class="col31">创建人：张三</span>
                        <span class="col32">创建时间：2017-07-11 15:25</span>
                        <span class="col33">分配区域：北京</span>
                        <span class="col34">分配商务：张三</span>
                    </div>
                    <div class="row1">状态：成交</div>
                </div>
                <div class="back-visit">
                    <div class="head">回访</div>
                    <!--<div class="row1">内容：</div>-->
                    <div class="row1">
                        <el-form :label-position="labelPosition" ref="form"  label-width="80px" :model="formLabelAlign">
                            <el-form-item label="内容：">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                           <el-form-item label="其他：">
                                <div class="row">
                                    <el-input
                                            type="textarea"
                                            :rows="4"
                                            placeholder="请输入内容"
                                            v-model="textarea">
                                    </el-input>
                                </div>
                            </el-form-item>
                            <div style="text-align: center;margin-top: 20px">
                                <el-button type="primary" size="large">确定</el-button>
                                <el-button size="large">取消</el-button>
                            </div>
                        </el-form>

                    </div>
                    <!--<div class="row1">其他：</div>-->
                    <!--<div class="row">-->
                        <!--<el-input-->
                                <!--type="textarea"-->
                                <!--:rows="4"-->
                                <!--placeholder="请输入内容"-->
                                <!--v-model="textarea">-->
                        <!--</el-input>-->
                    <!--</div>-->

                </div>
            </div>

        </el-dialog>
        <!--回访 弹出层结束-->
    </div>
</template>
<script>
import headerd from '@v/components/titleBar';

export default {
    data() {
        return {
            options1: [
                {value: '客户有购买意愿，但客户预算较低',label: '客户有购买意愿，但客户预算较低'}, {value: '客户有购买意愿，但负面信息原因，客户有顾虑',label: '客户有购买意愿，但负面信息原因，客户有顾虑'},{value: '客户有购买意愿，但产品功能无法满足客户',label: '客户有购买意愿，但产品功能无法满足客户'},
            ],
            ruleForm: {
                startTime: '',
                endTime: '',
                status: ''
            },
            textarea: '',
            status: '',
            totalPage:100,
            currentPage:1,
            pageSize:20,
            dialogTableVisible: false,
            BusinessData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    },
    components:{
       headerd
    },
    props: ['headerd'],
    methods: {
        AddBtns() {
            console.log('创建线索')
        },
        BatchBtns() {
        },
        handleClick(){

        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        query(){

        }
    },
}
</script>
<style scoped>
    /*.back-dialog{*/
        /*width: 1048px;*/
        /*height:  614px;*/
    /*}*/

    .head-row{
        width: 100%;
        height: 1px;
        background-color: #dfe6ec;
    }
    .head{
        margin-top: 20px;
        font-weight: bold;
        color: #333333;
        font-size: 14px;
    }
    .row1{
        font-size: 12px;
        margin-top: 20px;
    }
    .col11{
        display: inline-block;
        min-width: 180px;
    }
    .col12{
        /*position: absolute;*/
        /*left:270px;*/
        display: inline-block;
        margin-left: 35px;
        min-width: 285px;
    }
    .col13{
        /*position: absolute;*/
        /*left:590px;*/
        margin-left: 30px;
    }
    .row2{
        font-size: 12px;
        margin-top: 20px;
    }
    .col21{
        display: inline-block;
        min-width: 50px;
    }
    .col22{
        /*position: absolute;*/
        /*left:88px;*/
        margin-left: 20px;
        display: inline-block;
        min-width: 93px;
    }
    .col23{
        /*position: absolute;*/
        /*left:197px;*/
        margin-left: 20px;
        display: inline-block;
        min-width: 100px;
    }
    .col24{
        /*position: absolute;*/
        /*left:321px;*/
        margin-left: 30px;
        display: inline-block;
        min-width: 45px;
    }
    .col25{
        /*position: absolute;*/
        /*left:377px;*/
        margin-left: 20px;
        display: inline-block;
        min-width: 93px;
    }
    .col26{
        /*position: absolute;*/
        /*left:487px;*/
        margin-left: 20px;
    }
    .other-dialog{
        margin-top: 30px;
    }
    .col31{
        display: inline-block;
        min-width: 110px;
    }
    .col32{
        margin-left: 60px;
        display: inline-block;
        min-width: 175px;
    }
    .col33{
        margin-left: 40px;
        display: inline-block;
        min-width: 92px;
    }
    .col34{
        margin-left: 40px;
    }
</style>
