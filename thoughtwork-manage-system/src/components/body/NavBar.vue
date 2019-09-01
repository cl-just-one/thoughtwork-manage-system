<template>
  <div class="nav">
    <ul class="nav-item">
      <li v-for="item in NavList" :key="item.id" @click="handleItemClick(item.id)">
        <span class="icon img" :class="item.img"></span>{{item.name}}
      </li>
    </ul>
    <div class="history-item">
      <div class="txt">History</div>
      <ul class="item">
        <li v-for="item in historyList" :key="item.id">
          {{item.value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      NavList: [{
        id: '0001',
        img: 'icon-dashboard',
        name: 'DASHBOARD'
      }, {
        id: '0002',
        img: 'icon-sitemap',
        name: 'AGENT'
      }, {
        id: '0003',
        img: 'icon-boat',
        name: 'MY CRUISE'
      }, {
        id: '0004',
        img: 'icon-info',
        name: 'HELP'
      }],
      historyList: [{
        id: '0001',
        value: 'qwertyuioopplkjhgfdsa/qwertyuu_test'
      }, {
        id: '0002',
        value: 'qwertyuioopplkjhgfdsa/qwertyuu_test'
      }]
    }
  },
  methods: {
    handleItemClick: function (id) {
      if (id === '0001') {
        this.$router.push({
          path: '/DashBoard'
        })
      } else if (id === '0002') {
        this.$router.push({
          path: '/Agent'
        })
      } else if (id === '0003') {
        this.$router.push({
          path: '/MyCruise'
        })
      } else {
        this.$router.push({
          path: '/Help'
        })
      }
    }
  }
}
</script>

<style scoped>
.nav {
  width: 300px;
  height: 100%;
  color: #fff;
  background-color: #2d4054;
  position: relative;
  display: inline-block;
}
.nav-item li {
  height: 45px;
  line-height: 50px;
  padding-left: 40px;
}
.nav-item li:hover {
  cursor: pointer;
  color: aqua;
  background-color: #435466;
}
.img {
  font-size: 20px;
  vertical-align: middle;
  padding-right: 15px;
}
.history-item {
  position: absolute;
  bottom: 20%;
  margin-left: 20px;
}
.history-item ul li {
  list-style-type: disc;
  padding: 6px 0;
}
.item {
  margin-left: 2%;
  font-size: 12px;
  color: #999;
}
.item li:hover {
  cursor: pointer;
  color: #00b4cf;
}
.txt {
  margin-left: -4%;
  padding: 8px 0;
  font-size: 20px;
  color: #ccc;
}
</style>
