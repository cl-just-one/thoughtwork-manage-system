<template>
  <div class="header">
    <div class="header-container">
      <div class="header-img">
        <img class="img" :src="headerImg" alt="picture">
        <img class="avatar" :src="avatarImg" alt="avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-header',
  data () {
    return {
      headerImg: require('@/assets/logo.svg'),
      avatarImg: require('@/assets/avatar.jpg')
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 60px;
    position: fixed;
    box-shadow: 0 5px 5px #e1e4e6;
    border: 1px solid #e1e4e6;
    overflow: hidden;
  }
  .header-container {
    max-width: 1200px;
    height: 60px;
    margin: 0 auto;
    text-align: center;
  }
  .header-img {
    width: 100%;
    margin: 0 auto;
    display: inline-block;
  }
  .header-img img {
    margin: 10px auto;
    display: inline-block;
    height: 40px;
  }
  .header-img > .img {
    width: 100px;
  }
  .header-img > .avatar {
    height: 40px;
    margin-right: 2%;
    border-radius: 20px;
    float: right;
  }
</style>
