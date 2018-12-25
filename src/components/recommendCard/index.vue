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
        title: '关注室内空气污染保障公众呼吸安全',
        articleId: '201811122'
      }, {
        id: '2',
        title: '践行“中国制造2025”助推楼宇智造——smartio思麦尔首次亮相“高交会”定稿 ',
        articleId: '201811122'
      }, {
        id: '2',
        title: '科技监管室内空气污染保障公众呼吸安全 ',
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
