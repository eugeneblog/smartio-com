<template>
    <div class="header-top">
      <el-container>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="header-info text-left">
            <p><span>Phone:</span> +945 588 9966</p>
            <p><span>Email:</span> sopnovilla@email.com</p>
        </el-col>
        <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="header-social text-right">
            <a href="#"><svg-icon icon-class="weibo" /></a>
            <a href="#"><svg-icon icon-class="qq" /></a>
            <a href="#"><svg-icon icon-class="gongzhonghao" /></a>
            <a href="#"><svg-icon icon-class="pengyouquan" /></a>
          </div>
        </el-col>
      </el-container>
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
.header-info p {
  font-size: 13px;
  line-height: 25px;
  color: #757575;
  float: left !important;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 0px;
  margin-right: 30px;
  margin-bottom: 0;
}
.header-info p span {
  color: #71b100;
}
.header-social{
  a {
    display: inline-block;
    margin-left: 20px;
    color: #757575;
    vertical-align: top;
    &:hover {
      color: #71b100;
    }
    .svg-icon {
      font-size: 18px;
      line-height: 25px;
    }
  }
}
@media only screen and (max-width: 479px) {
  .header-top {
    display: none;
  }
}
</style>
