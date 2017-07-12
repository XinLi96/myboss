<template>
  <div class="content">
  <h2 style="text-align:center;">表单校验</h2>
  <hr/>
    <form class="form-horizontal" style="margin-left:30px;">
      <div class="form-group" :class="{error: validation.hasError('email')}">
        <div class="controls text-left">
          <label class="control-label" for="inputEmail" style="width: 80px;text-align: left">*Email:</label>
          <input type="text" class="form-control inline-block" id="inputEmail" placeholder="Email" v-model="email">
          <span class="message">{{ validation.firstError('email') }}</span>
        </div>
      </div>
      <div class="form-group" :class="{error: validation.hasError('password')}">
        <div class="controls text-left">
          <label class="control-label" for="inputPassword" style="width: 80px;text-align: left">*Password:</label>
          <input type="password" class="form-control inline-block"  id="inputPassword" placeholder="Password"  v-model="password">
          <span class="message">{{ validation.firstError('password') }}</span>
        </div>
      </div>
      <div class="form-group">
        <div class="controls text-left">
          <button type="button" class="btn btn-primary"  @click="submit">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  /*引入vee验证插件*/
  import Vue from 'vue'
  import SimpleVueValidation from 'simple-vue-validator';
  var Validator = SimpleVueValidation.Validator;
  Vue.use(SimpleVueValidation);
  export default {
    data: function () {
      return {
        email: '',
        password: '',
      };
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email();
        //return Validator.value(value).required("此项必填").email("请输入正确的邮箱格式");
      },
      password: function (value) {
        return Validator.value(value).required().regex('^[0-9A-Za-z]*$', '只能是字母数字类型');
      },
    },
    methods: {
      submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('验证通过');
            }
          });
      }
    }
  }

</script>
<style>
  .layout-form .form-group.error .message{ color: #f66;}
  .layout-form .form-group.error .control-label {color: #f66;}
  .layout-form .form-group.error input[type=password].form-control, .layout-form .form-group.error input[type=password].form-control:focus, .layout-form .form-group.error input[type=text].form-control, .layout-form .form-group.error input[type=text].form-control:focus {border-color: #f66;  }
  .inline-block{display: inline-block!important;width: auto}
</style>
