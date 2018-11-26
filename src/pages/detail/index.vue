<template>
    <div>
        <el-container>
            <div>
                {{ pageData.title }}
            </div>
        </el-container>
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
