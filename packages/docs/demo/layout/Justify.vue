<template>
  <div>
    <l-row class="row-bg">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>

    <l-row class="row-bg" justify="center">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>

    <l-row class="row-bg" justify="end">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>
    
    <l-row class="row-bg" justify="space-between">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>

    <l-row class="row-bg" justify="space-around">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>

    <l-row class="row-bg" justify="space-evenly">
      <l-col :span="6"><div class="bg-2 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-3 grid-content"></div>
      </l-col>
      <l-col :span="6">
        <div class="bg-2 grid-content"></div>
      </l-col>
    </l-row>
  </div>
</template>
<style scoped>
.lotus-row {
  margin-bottom: 20px;
}
.lotus-row:last-child {
  margin-bottom: 0px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-1 {
  background-color: #99a9bf;
}
.bg-2 {
  background-color: #d3dce6;
}
.bg-3 {
  background-color: #e5e9f2;
}
.row-bg {
  background-color: #f9fafc;
}
</style>
