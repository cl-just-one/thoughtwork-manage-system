<template>
<div>
  <div class="status" v-for="(item, index) in StatusList" :key="item.id">
    <div class="status-img">
      <img :src="item.imgUrl" alt="logo">
    </div>
    <div class="status-content">
      <div class="content-box">
        <div class="status">
          <span class="icon icon-desktop"></span>
          <span class="status-text">{{item.content}}</span>
          <span class="status-txt"
            :class="{'status-yellow':item.status=='Idle','status-green':item.status=='Building'}">
            {{item.status}}
          </span>
        </div>
        <div class="ip">
          <span class="icon icon-info"></span>
          <span>{{item.ip}}</span>
        </div>
        <div class="address">
          <span class="icon icon-folder"></span>
          <span>{{item.address}}</span>
        </div>
      </div>
      <div class="content-operate">
        <div class="plus" @click="addBroswerClick(index)">
          <span class="icon icon-plus"></span>
        </div>
        <div class="broswer">
          <span class="broswer-icon" v-for="(obj, index1) in item.broswerList" :key="obj.id">
            {{obj.name}}
            <span @click="delBrowserClick(index, index1)" :id="obj.id" class="icon icon-trash"></span>
          </span>
        </div>
        <div class="deny">
          <span class="deny-icon"><span class="icon icon-deny"></span>Deny</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'StatusList',
  data () {
    return {
      imgUrl: require('@/assets/icons/windows.png'),
      StatusList: [{
        id: '01',
        imgUrl: require('@/assets/icons/windows.png'),
        content: 'yiskjljasdja.89hsdgb',
        status: 'Idle',
        ip: '192.168.0.9',
        address: '/var/cms/text/ik',
        broswerList: [{
          id: '1',
          name: 'Firefox'
        }, {
          id: '2',
          name: 'Chrome'
        }, {
          id: '3',
          name: 'Safari'
        }],
        deny: false
      }, {
        id: '02',
        imgUrl: require('@/assets/icons/ubuntu.png'),
        content: 'yiskjljasdja.89hsdgb',
        status: 'Building',
        ip: '192.168.0.9',
        address: '/var/cms/text/ik',
        broswerList: [{
          id: '1',
          name: 'Firefox'
        }, {
          id: '2',
          name: 'Chrome'
        }, {
          id: '3',
          name: 'Safari'
        }],
        deny: false
      }, {
        id: '03',
        imgUrl: require('@/assets/icons/debin.png'),
        content: 'yiskjljasdja.89hsdgb',
        status: 'Idle',
        ip: '192.168.0.9',
        address: '/var/cms/text/ik',
        broswerList: [{
          id: '1',
          name: 'Firefox'
        }, {
          id: '2',
          name: 'Chrome'
        }, {
          id: '3',
          name: 'Safari'
        }],
        deny: false
      }, {
        id: '04',
        imgUrl: require('@/assets/icons/suse.png'),
        content: 'yiskjljasdja.89hsdgb',
        status: 'Idle',
        ip: '192.168.0.9',
        address: '/var/cms/text/ik',
        broswerList: [{
          id: '1',
          name: 'Firefox'
        }, {
          id: '2',
          name: 'Chrome'
        }, {
          id: '3',
          name: 'Safari'
        }],
        deny: false
      }]
    }
  },
  methods: {
    delBrowserClick (row, col) {
      this.StatusList[row].broswerList.splice(col, 1)
    },
    addBroswerClick () {
      // todo
    }
  }
}
</script>

<style scoped>
.status-yellow {
  background: #ff9a2a;
}
.status-green {
  background: #7fbc39;
}
.status {
  overflow: hidden;
  background: #fff;
  height: 100px;
  margin-bottom: 15px;
  position: relative;
}
.status-img {
  width: 15%;
  float: left;
  position: absolute;
  left: 8px;
  top: 8px;
}
.plus:hover {
  cursor: pointer;
}
.status-content {
  width: 85%;
  height: 100px;
  float: right;
  display: flex;
  flex-direction: column;
}
.content-box {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
}
.content-box .icon {
  color: #e1e4e6;
}
.content-box div:first-child {
  height: 50px;
  width: 40%;
}
.content-box div:nth-child(2) {
  height: 50px;
  width: 30%;
}
.content-box div:last-child {
  height: 50px;
  width: 30%;
}
.content-box div span {
  vertical-align: middle;
}
.icon {
  font-size: 20px;
  vertical-align: middle;
}
.content-operate {
  width: 100%;
  line-height: 50px;
  display: flex;
  flex-direction: row;
}
.status-txt {
  margin-left: 6%;
  padding: 2px 4px;
}
.broswer {
  margin-left: 10px;
  width: 82%;
}
.plus {
  height: 50px;
}
.icon-plus {
  background: #00b4cf;
  color: #fff;
  padding: 2px 4px;
}
.broswer-icon {
  margin-left: 2%;
  background-color: #eee;
  padding: 5px 8px;
}
.icon-trash {
  font-size: 15px;
  font-weight: bold;
  margin-left: 2%;
}
.deny {
  float: right;
  color: #fff;
}
.deny-icon {
  background: #00b4cf;
  padding: 6px 12px;
}
.icon-deny {
  font-size: 14px;
  margin-right: 10px;
}
.status-text {
  color: #00b4cf;
  font-weight: bold;
}
.broswer-icon .icon {
  cursor: pointer;
}
</style>
