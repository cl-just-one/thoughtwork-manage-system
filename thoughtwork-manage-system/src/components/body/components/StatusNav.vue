<template>
  <div class="navbar">
    <ul class="title">
      <li :class="{active:selectType=='all'}" @click="handleLiClick('all')">All</li>
      <li :class="{active:selectType=='phy'}" @click="handleLiClick('phy')">Physical</li>
      <li :class="{active:selectType=='vir'}" @click="handleLiClick('vir')">Virtual</li>
    </ul>
    <div class="input-switch">
      <div class="input-box">
        <i class="icon icon-search"></i>
        <input type="text">
      </div>
    </div>
    <div class="expand">
      <span class="icon icon-th-card"></span>
      <span class="icon icon-th-list"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusNav',
  data () {
    return {
      selectType: 'all'
    }
  },
  methods: {
    handleLiClick (name) {
      this.selectType = name
    }
  }
}
</script>

<style scoped>
li.active {
  border-bottom: 3px solid #00b4cf;
  color: #00b4cf;
}
.navbar {
  height: 50px;
  background-color: #fff;
  margin: 15px 0;
}
.title {
  display: inline-block;
}
.navbar ul li {
  display: inline-block;
  line-height: 50px;
  width: 80px;
  text-align: center;
  border-right: 1px solid #f3f3f3;
}
.input-switch {
  display: inline-block;
}
.input-box {
  position: relative;
  left: 10%;
  display: inline-block;
}
.icon-search {
  position: absolute;
  top: 4px;
  left: 6px;
}
.input-box > input {
  height: 24px;
  padding-left: 26px;
  background-color: #eee;
  outline: none;
  border: none;
}
.expand {
  display: inline-block;
  font-size: 16px;
  float: right;
  position: relative;
  top: 18px;
  right: 20px;
}
.icon-th-card {
  margin-right: 20px;
}
.icon-th-list {
  color: #00b4cf;
}
.title li:hover {
  cursor: pointer;
}
</style>
