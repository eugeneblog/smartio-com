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
                        <a class="link-hover" :href="'http://localhost:8082/static/resource/trainbooks/' + list.text" download><span>{{ list.text }}</span></a>
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
  name: 'TrainBooks',
  data () {
    return {
      booksData: [{
        id: '1',
        text: '01第一课楼宇自控系统介绍.docx',
        type: 'doc',
        date: '2018'
      }, {
        id: '2',
        text: '02第二课认识BACnet路由器.docx',
        type: 'doc',
        date: '2019'
      }, {
        id: '3',
        text: '03第三课BACnet网络和路由器设置.docx',
        type: 'doc',
        date: '2019'
      }, {
        id: '4',
        text: '04第四课配置MSTP网络和硬件.docx',
        type: 'doc',
        date: '2019'
      }, {
        id: '5',
        text: '05第五课配置MSTP设备BACnet对象性配置.docx',
        type: 'doc',
        date: '2019'
      }, {
        id: '6',
        text: '06第六课浏览器编程工具使用教程.docx',
        type: 'doc',
        date: '2019'
      }, {
        id: '7',
        text: 'SmartIO思麦尔楼宇自控标准点表样式.xls',
        type: 'xls',
        date: '2019'
      }]
    }
  },
  methods: {
    downloadHandle (id) {
      window.location.href = process.env.NODE_ENV === 'production' ? 'http://www.smartio.cc/static/resource/trainbooks/' + id : 'http://localhost:8082/static/resource/trainbooks/' + id
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
