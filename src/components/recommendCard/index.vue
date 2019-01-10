<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>推荐文章</span>
            </div>
            <div v-for="o in recommendData" :key="o.id" class="text item">
                {{ o.title }}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'ReCommendCard',
  data () {
    return {
      recommendData: [{
        id: '1',
        title: this.$t('main.slider[0].text'),
        articleId: '201811122'
      }, {
        id: '2',
        title: this.$t('main.slider[1].text'),
        articleId: '201811122'
      }, {
        id: '2',
        title: this.$t('main.slider[2].text'),
        articleId: '201811122'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 20px;
    box-shadow: none;
  }
</style>
