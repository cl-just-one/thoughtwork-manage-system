<template>
  <div class="total">
    <div class="total-block">
      <div class="icon icon-cog icon-setting"></div>
      <div class="content">Building</div>
      <div class="number">3</div>
    </div>
    <div class="total-block">
      <div class="icon icon-coffee icon-cup"></div>
      <div class="content">Idle</div>
      <div class="number">5</div>
    </div>
    <div class="total-block">
      <div class="all">
        <span>ALL</span>
        <span class="total-number">8</span>
      </div>
      <div class="physical">
        <span>PHYSICAL</span>
        <span class="total-number">4</span>
      </div>
      <div class="virtual">
        <span>VIRTUAL</span>
        <span class="total-number">4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusTotal',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.total {
  display: flex;
}
.total > .total-block {
  width: 30%;
  height: 120px;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 3;
  background-color: #ddd;
}
.total-block {
  position: relative;
}
.total-block:first-child {
  margin-right: 20px;
  background-color: #ff9a2a;
}
.total-block:nth-child(2) {
  background-color: #7fbc39;
}
.total-block:last-child {
  margin-left: 20px;
  background-color: #fff;
  padding: 0 3%;
  box-sizing: border-box;
}
.icon-setting,
.icon-cup {
  font-size: 124px;
  color: #fff;
  opacity: .2;
  text-align: center;
}
.content {
  position: absolute;
  top: 15px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.number {
  position: absolute;
  bottom: 15%;
  right: 10%;
  font-size: 48px;
  color: #fff;
}
.all,
.physical,
.virtual {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.total-number {
  float: right;
  font-size: 20px;
}
</style>
