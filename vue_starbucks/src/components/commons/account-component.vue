<template>
  <div class="account-components">
    <router-link to="/account">
      <img src="@/assets/icons/icon-account.svg" alt="" />
      <button type="button" class="sign-smile btn text-success mr-4">
        登录
      </button>
    </router-link>
    <router-link to="/account/register">
      <button type="button" class="logon-smile btn btn-outline-success">
        注册
      </button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logon-smile {
  padding: 2px 12px;
  background: none;
  border: 1px solid #00a862;
  border-radius: 48px;
  box-sizing: border-box;
  color: #00a862;
  display: inline-block;
  font-weight: 500;
  outline: none;
  overflow: hidden;
  padding: 6px 18px;
  position: relative;
  transition-duration: 0.1s;
  transition-property: background, border-color, color;
}
</style>