<template>
  <div style="box-shadow : 10px 10px 10px black">
      <a href="#explain">
        <div class="wds">درباره پاسارگاد</div>
      </a>
      <a href="#gallery">
        <div class="wds">گالری تصاویر</div>
      </a>
      <a href="#footer">
        <div class="wds">درباره ما</div>
      </a>
  </div>
</template>

<script>
export default {
  name: "myHeader"
};
</script>

<style scoped>

.wds {
  width: 33.33%;
  direction: rtl;
  text-align: center;
  color: #fff;
  display: inline-block;
  height: 38px;
  line-height: 38px;
  background: #0f4c75;
  transition: all 0.5s;
  border-left: 1px solid black;
}
.wds:hover {
  opacity: 0.8;
  transition: all 0.5s;
}
</style>