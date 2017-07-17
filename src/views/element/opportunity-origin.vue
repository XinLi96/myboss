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
                    <span class="row12">固话：&nbsp;0562-85321547</span>
                    <span class="row13">QQ：&nbsp;5321456215</span>
                    <span class="row14">微信：&nbsp;5321456215</span>
                </div>
                <div class="col1" style="margin-top: 20px">
                    <span>邮箱：&nbsp;5321456215@qq.com</span>
                    <span class="row12">来源：&nbsp;400</span>
                    <span class="row13">行业：&nbsp;制造业/农副食品加工业</span>
                    <span class="row14">主营业务：&nbsp;软件开发</span>
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
                    <span class="ap-row12">预算：<span style="color: red">12000元</span></span>
                    <span class="ap-row13">交付周期：一个月</span>
                    <span class="ap-row14">推广类</span>
                    <span class="ap-row15">预算：<span style="color: red">12000元</span></span>
                    <span class="ap-row16">交付周期：一个月</span>
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
                <div style="margin-top: 20px">
                    <span style="margin-top: 20px">回访：客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字，客户回访文字</span>
                </div>
            </div>
        </div>
        <div class="result">
            <div class="head">处理结果</div>
            <div style="margin-left: 60px;">
                暂无购买意向
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
                    <span style="position: absolute;left: 300px">处理结果：北京</span>
                    <span style="position: absolute;left: 600px">处理人：张三</span>
                </div>
            </div>
        </div>
        <div class="cut-line"></div>
        <el-button style="margin-left: 20px;width: 88px;margin-top: 22px">返回</el-button>
    </div>
</template>
<script>

</script>

<style>
    .con{
        font-family: 微软雅黑;
    }
    .basic-info{
        margin-top: 20px;
        margin-left: 20px;
    }
    .head{
        font-size: 15px;
        font-weight: 800;
    }
    .bi-con{
        margin-top: 20px;
    }
    .col1{
        margin-left: 60px;
    }
    .row12{
        position: absolute;
        left: 310px;
    }
    .row13{
        position: absolute;
        left: 630px;
    }
    .row14{
        position: absolute;
        left:850px;
    }
    .ask-product{
        margin-top: 30px;
        margin-left: 20px;
    }
    .ap-con{
        margin-left: 60px;
    }
    .ap-row12{
        position: absolute;
        left:148px;
    }
    .ap-row13{
        position: absolute;
        left:258px;
    }
    .ap-row14{
        position: absolute;
        left:400px;
    }
    .ap-row15{
        position: absolute;
        left:448px;
    }
    .ap-row16{
        position: absolute;
        left:558px;
    }
    .ap-need{
        display: inline-block;
        width: 520px;
        height: 50px;
        vertical-align: top;
        /*border: 1px solid #000;*/
    }
    .other{
        margin-top: 30px;
        margin-left: 20px;
    }
    .handle-info{
        margin-top: 30px;
        margin-left: 20px;
    }
    .result{
        margin-top: 30px;
        margin-left: 20px;
    }
    .cut-line{
        width: 100%;
        height: 5px;
        margin-top: 165px;
        /*background-color: #c0ccda;*/
        box-shadow: 10px 10px 5px #e5e5e5;
    }
</style>