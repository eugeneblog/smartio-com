<template>
    <div>
        <el-row
        v-for="item of instructionsDataCom"
        :key="item.id"
        >
            <el-col
            :span="6"
            v-for="list in item.feature"
            :key="list.id"
            style="margin-bottom: 20px;"
            >
                <el-card :body-style="{ padding: '0px' }" class="card_items">
                    <img :src="list.type == 'doc' ? 'static/resource/docLogo.jpg' : 'static/resource/xlsLogo.jpg' " class="image"/>
                    <div style="padding: 14px;">
                        <a class="link-hover" :href="'http://localhost:8082/static/resource/productlist/' + list.text" download><span>{{ list.text }}</span></a>
                        <div class="bottom clearfix">
                          <time class="time">{{ list.date }}</time>
                          <el-button type="text" class="button" @click="downloadHandle(list.text)">点击下载</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      booksData: [{
        id: '1',
        text: 'SmartIO楼宇自控报价样本.xls',
        type: 'xls',
        date: '2018'
      }, {
        id: '2',
        text: 'SmartIO楼宇自控设备表.xls',
        type: 'xls',
        date: '2019'
      }]
    }
  },
  methods: {
    downloadHandle (id) {
      window.location.href = process.env.NODE_ENV === 'production' ? 'http://www.smartio.cc/static/resource/productlist/' + id : 'http://localhost:8082/static/resource/productlist/' + id
    }
  },
  computed: {
    instructionsDataCom () {
      let len = this.booksData.length
      let arr = []
      for (let i = 1; i <= Math.ceil(len / 4); i++) { // 循环 l / 4 次
        let o = {}
        o.id = i
        o.feature = this.booksData.slice(i * 4 - 4, i * 4)
        arr.push(o)
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
    display: block;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .card_items {
      margin-right: 40px;
      a:hover {
        text-decoration: underline;
      }
  }
</style>
