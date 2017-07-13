<template>
  <div id="app">
    <nav class="nav" style="z-index:2">
      <img src="./assets/img/headlogo.jpg" style="float:left" alt="">
      <ul class="nav-menu">
        <!-- <router-link to="/" exact tag="li"></router-link> -->
        <li>
            <router-link :to="{path:'/bi'}">
              <a><span>BI&nbsp;系统</span></a>
            </router-link>
            
        </li>
        <li>
          <router-link :to="{path:'/bs'}">
            <a href=""><span>商务代表</span></a>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/order'}">
            <a href=""><span>订单管理</span></a>
          </router-link>
        </li>
        <li>
          <a href=""><span>ICP备案</span></a>
        </li>
        <li>
          <a href=""><span>业务受理</span></a>
        </li>
        <li>
          <a href=""><span>事件系统</span></a>
        </li>
        <li>
          <a href=""><span>财务到账</span></a>
        </li>
        <li>
          <a href=""><span>商务特批</span></a>
        </li>
        <li>
          <a href=""><span>系统设置</span></a>
        </li>
        <li>
          <a href=""><span>400预占</span></a>
        </li>
        <li>
          <a href=""><span>呼叫中心</span></a>
        </li>
        <li>
          <a href="">XXX</a>
          <a href="">注销</a>
        </li>
      </ul>
    </nav>
    <div id="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  height: 700px;
}
.nav{
  width: 100%;
  height: 70px;
  background: url("./assets/img/headbg.jpg") repeat-x 0 0;
  position: fixed;
}
.nav-menu{
  list-style: none;
  display: inline-block;
  /*width: 922px;*/
  height: 50px;
  margin-top: 8px;
}
.nav-menu li{
  display: inline-block;
  width: 71px;
  height: 50px;
  float: left;
  text-align: center;
  margin-right: 10px;
}
.nav-menu li:hover{
  background: #ccc;
}
.nav-menu li a{
  text-decoration: none;
  color: #fff;
  line-height: 50px;
}
</style>
