<template>
    <div class="header-top">
      <el-container>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="header-info text-left">
            <p><span>Phone:</span> +0755-84563100</p>
            <p><span>Email:</span> 13316967007@126.com</p>
        </el-col>
        <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="header-social text-right">
            <a target="_blank" href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=www.smartio.cc&sharesource=qzone&title=思麦尔楼宇自控设备有限公司官网&pics=www.smartio.cc/static/logo.png&summary=以客户需求为导向，以客户价值为目标，以客户满意为标准 坚持变革，倡导创新，持续成长。 快速反应，快速决策，快速行动 企业与员工共同成长， 专注主营业务。"><svg-icon icon-class="qzone" /></a>
            <el-popover
            placement="bottom"
            width="160"
            v-model="visible">
            <p style="text-align: center">{{ this.$t('navbar.wechat') }}</p>
            <div style="text-align: right; margin: 0" class="wechat_img">
              <img src="static/resource/wechat/mmqrcode1546927520316.jpeg" alt="">
            </div>
            <a href="javascript:void();" slot="reference"><svg-icon icon-class="gongzhonghao" /></a>
          </el-popover>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2642592347&site=qq&menu=yes"><svg-icon icon-class="qq" /></a>
            <el-dropdown style="padding-left: 10px;" @command="handleCommand">
              <span class="el-dropdown-link">
                {{ this.$t('navbar.language') }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">chinese</el-dropdown-item>
                <el-dropdown-item command="en">english</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleCommand (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  }
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
.wechat_img {
  overflow: hidden;
    img {
      display: block;
      height: 160px;
      margin: 0 auto;
    }
  }
.header-social{
  a {
    display: inline-block;
    margin-left: 20px;
    color: #757575;
    vertical-align: top;
    &:hover {
      color: #71b100 !important;
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
