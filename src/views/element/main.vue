<template>
    <div class="con">
        <div class="head">
            <div class="block st-left">
                <el-date-picker
                        v-model="startTime"
                        type="datetime"
                        placeholder="起始时间">
                </el-date-picker>
            </div>
            <div class="block" style="display: inline-block">
                <el-date-picker
                        v-model="endT"
                        type="datetime"
                        placeholder="结束时间">
                </el-date-picker>
            </div>
            <div class="state-select">
                <span style="font-size: 14px;color: #333333;margin-right: 10px">状态</span>
                    <el-select v-model="value" placeholder="全部" style="width: 95px">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                <el-button type="primary" style="margin-left: 10px">查询</el-button>
            </div>
            <div class="search">
                <el-input
                        placeholder="请输入内容"
                        icon="search"
                        v-model="input2"
                        :on-icon-click="handleIconClick">
                </el-input>
            </div>
        </div>
        <el-table
            :data="tableData"
            border
            stripe="true"
            style="width: 100%">
        <el-table-column
                fixed
                prop="date"
                label="商机单号"
                width="150">
        </el-table-column>
        <el-table-column
                prop="name"
                label="客户名称"
                width="120">
        </el-table-column>
        <el-table-column
                prop="province"
                label="联系人"
                width="120">
        </el-table-column>
        <el-table-column
                prop="city"
                label="手机"
                width="120">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地区"
                width="300">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="创建人"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="创建时间"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="分配区域"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="分配商务"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="状态"
                width="120">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">线索</el-button>
                <el-button type="text" size="small">回访</el-button>
            </template>
        </el-table-column>
    </el-table>
        <div class="page">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next"
                    :total="3529">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick() {
        console.log(1);
    }
    },

    data() {
        return {
            tableData: [{
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
            },
                {
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
                }
            ],
            startTime: '',
            endTime: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    }
    }
</script>

<style>
    .con{
        margin-top: 97px;
        margin-left: 20px;
        font-family: 微软雅黑;
    }
    .head{
        margin-bottom: 20px;
    }
    .st-left{
        display: inline-block;
        margin-right: 10px;
    }
    .state-select{
        display: inline-block;
        margin-left: 40px;
    }
    .state-select>span{
        font-family: 微软雅黑;
    }
    .search{
        float: right;
    }
    .page{
        float: right;
        margin-top: 20px;
    }
</style>