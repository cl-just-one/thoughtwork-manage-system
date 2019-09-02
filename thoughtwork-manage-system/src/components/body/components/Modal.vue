<template>
  <div class="modal">
    <div class="md-modal">
      <div class="md-header">
        <div class="close">X</div>
      </div>
      <div class="md-body">
        <div class="md-content">
          <div class="content">Separate multiple resource name with commas</div>
          <input class="content-input" type="text" placeholder="Input Value">
        </div>
      </div>
      <div class="md-footer">
        <button class="add">Add Resource</button>
        <button class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // todo
}
</script>

<style scoped>
.modal {
  width: 570px;
  position: fixed;
  top: 50%;
  left: 30%;
  z-index: 10000;
  background: #fff;
  border: 1px solid #00b4cf;
  box-shadow: 0 3px 5px #000;
}
.md-modal {
  margin: 15px;
}

.md-footer {
  margin: 10px 0;
}
.md-footer button {
  height: 30px;
  width: 120px;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  color: #fff;
}
.add {
  background: #00b4cf;
  margin-right: 2% !important;
}
.cancel {
  background: #2d4054;
}
.content-input {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgb(82, 80, 80);
  padding-left: 10px;
  box-sizing: border-box;
}
.content {
  padding: 10px 0;
}
.md-header .close {
  float: right;
  font-size: 18px;
  font-weight: bold;
  color: #00b4cf;
}
</style>
