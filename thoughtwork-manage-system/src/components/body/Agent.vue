<template>
  <div class="main-right">
    <div class="container">
      <status-total/>
      <status-nav/>
      <status-list/>
    </div>
  </div>
</template>

<script>
import StatusTotal from '@/components/body/components/StatusTotal.vue'
import StatusNav from '@/components/body/components/StatusNav.vue'
import StatusList from '@/components/body/components/StatusList.vue'

export default {
  name: 'Agent',
  components: {
    StatusTotal,
    StatusNav,
    StatusList
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.main-right {
  width: 800px;
  height: 88vh;
  display: inline-block;
  position: absolute;
  width: 100%;
  max-width: 900px;
  overflow: auto;
}
.container {
  margin: 20px;
}
</style>
