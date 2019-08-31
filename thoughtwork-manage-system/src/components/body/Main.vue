<template>
  <div class="main">
    <div class="container">
      <NavBar/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/body/NavBar.vue'

export default {
  name: 'm-main',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.main {
  position: relative;
  top: 60px;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
}
.container {
  max-width: 1200px;
  border: 1px solid #fff;
  margin: 0 auto;
  height: 100%;
}
</style>
