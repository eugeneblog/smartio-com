<template>
    <div class="header-top">
        nav top
    </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="scss" scoped>
.header-top {
  width: 100%;
  display: block;
  float: left;
  background-color: #f5f5f5;
  padding: 10px 0;
}
@media only screen and (max-width: 479px) {
    .header-top {
      display: none;
    }
}
</style>
