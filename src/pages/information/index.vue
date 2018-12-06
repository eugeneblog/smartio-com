<template>
    <div class="information_box">
        <card
        v-for="item in pageData"
        @select="handleSelect"
        :key="item.id"
        :newsData = 'item'></card>
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
