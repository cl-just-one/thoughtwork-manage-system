<template>
  <div class="home">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Main from '@/components/body/Main.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Main
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
