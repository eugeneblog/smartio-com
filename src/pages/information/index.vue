<template>
    <div class="information_box">
      <el-row
      :gutter="20"
      >
        <el-col :span="16">
          <div
          class="grid-content bg-purple"
          v-for="item in pageData"
          :key="item.id"
          >
            <card
            @select="handleSelect"
            :newsData = 'item'>
            </card>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <div class="hot_article">
              <h3>热门文章</h3>
              <span></span>
              <div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import Card from '@/components/newsCard'
export default {
  name: 'Infomation',
  data () {
    return {
      pageData: []
    }
  },
  components: {
    Card
  },
  methods: {
    handleSelect (data) {
    //   alert(data)
    //   console.log(data)
    }
  },
  beforeCreate () {
    this.$store.dispatch('getNewsData', 5).then(data => {
      this.pageData = data
    })
  }
}
</script>

<style lang="scss" scoped>
.information_box {
    width: 100%;
    height: 100%;
}
</style>
