<template>
    <div class="con">
        <div class="basic-info">
            <div class="head">基本信息</div>
            <div class="bi-con">
                <div class="col1">
                    <span>客户名称：&nbsp;中企动力科技股份有限公司</span>
                    <span class="row12">地址：&nbsp;北京市大兴区地盛西路号数码庄园号数码庄园</span>
                    <span class="row13">联系人：&nbsp;张三丰&nbsp;男</span>
                    <span class="row14">职位：&nbsp;经理</span>
                </div>
                <div class="col1" style="margin-top: 20px">
                    <span>手机：&nbsp;19216881423</span>
                    <span class="row12">固话：&nbsp;-</span>
                    <span class="row13">QQ：&nbsp;-</span>
                    <span class="row14">微信：&nbsp;-</span>
                </div>
                <div class="col1" style="margin-top: 20px">
                    <span>邮箱：&nbsp;-</span>
                    <span class="row12">行业：&nbsp;制造业/农副食品加工业</span>
                    <span class="row13">主营业务：&nbsp;制作鱼罐头</span>
                    <span class="row14" v-if="flag==1">来源：sdss</span>
                </div>
                <div class="col2 row1" style="position: relative">
                </div>
            </div>
        </div>
        <div class="ask-product">
            <div class="head">咨询产品</div>
            <div class="ap-con">
                <div style="margin-top: 20px">
                    <span>建站类</span>
                    <span class="ap-row12">预算：<span style="color: red">30000元</span></span>
                    <span class="ap-row13">交付周期：一个月</span>
                    <span class="ap-row14">电商类</span>
                    <span class="ap-row15">预算：<span style="color: red">30000元</span></span>
                    <span class="ap-row16">交付周期：一个月</span>
                </div>
                <div style="margin-top: 20px">
                    <span>推广类</span>
                    <span class="ap-row12">预算：<span style="color: red">30000元</span></span>
                    <span class="ap-row13">交付周期：一个月</span>
                    <span class="ap-row14">管理类</span>
                    <span class="ap-row15">预算：<span style="color: red">30000元</span></span>
                    <span class="ap-row16">交付周期：一个月</span>
                </div>
                <div style="margin-top: 20px" v-if="flag==2">
                    <span>解决方案</span>
                    <span class="ap-row12">预算：<span style="color: red">30000元</span></span>
                    <span class="ap-row13">交付周期：一个月</span>
                </div>
                <div style="margin-top: 20px">
                    客户需求：<span class="ap-need">比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急，需要尽快制作完成比较着急</span>
                </div>
            </div>
        </div>
        <div class="other">
            <div class="head">其他</div>
            <div style="margin-left: 60px;">
                <div style="margin-top: 10px">
                    <span>备注：无</span><br>
                </div>
                <div style="margin-top: 20px" v-if="flag==2">
                    <span style="margin-top: 20px">回访：客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字</span>
                </div>
            </div>
        </div>
        <div class="result" v-if="flag==1">
            <div class="head">处理结果</div>
            <div style="margin-left: 60px;">
                ddsadsa
            </div>
        </div>
        <div class="handle-info">
            <div class="head">操作信息</div>
            <div class="hi-con" style="margin-left: 60px">
                <div style="margin-top: 20px">
                    <span>创建人：张三</span>
                    <span style="position: absolute;left: 300px">创建时间：2017-07-11 15:25</span>
                </div>
                <div style="margin-top: 20px">
                    <span>状态：成交</span>
                    <span style="position: absolute;left: 300px" v-if="flag==2">分配区域：北京</span>
                    <span style="position: absolute;left: 300px" v-else-if="flag==1">处理结果：北京</span>
                    <span style="position: absolute;left: 600px" v-if="flag==2">分配商务：张三</span>
                    <span style="position: absolute;left: 600px" v-else-if="flag==1">处理人：张三</span>
                </div>
            </div>
        </div>
        <div class="cut-line"></div>
        <el-button style="margin-left: 20px;width: 88px;margin-top: 22px" @click="backBtn">返回</el-button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                flag: 2
            }
        },
        methods: {
            backBtn:function(){
                console.log(12)
            }
        }
    }
</script>

<style>

</style>