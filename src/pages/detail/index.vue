<template>
    <div class="detail-box">
        <el-row>
            <div class="article_title">
                <h1>{{ pageData.title }}</h1>
                <div class="article_subjoin">
                    <span>{{ pageData.time }}</span>
                    <span>{{ pageData.type }}</span>
                </div>
            </div>
        </el-row>
        <el-row>
            <el-col :span="24">
                <section class="textblock">
                    <p>
                        {{ pageData.context }}
                    </p>
                </section>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      pageData: ''
    }
  },
  methods: {
    getDetailInfo () {
      let id = this.$route.params.id
      if (this.$route.state) {
        this.$store.state.news.newsData.forEach(element => {
          if (element.id === id) {
            this.pageData = element
          }
        })
      } else {
        this.$store.dispatch('getArticle', id).then(data => {
          this.pageData = data.article
        })
      }
    }
  },
  beforeMount () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
.detail-box {
    width: 100%;
    height: 100%;
    .article_title {
        margin-bottom: 20px;
        h1 {
            margin-top: 20px;
            color: #3d464d;
            font-size: 26px;
            font-weight: 600;
        }
    }
    .textblock {
        line-height: 30px;
        font-size: 16px;
    }
}
</style>
