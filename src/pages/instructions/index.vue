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
                    <img src="static/resource/pdfLogo.jpg" class="image"/>
                    <div style="padding: 14px;">
                        <a :href="'http://localhost:8082/static/resource/pdffiles/' + list.text"><span>{{ list.text }}</span></a>
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
import axios from 'axios'
export default {
  name: 'Instructions',
  data () {
    return {
      currentDate: new Date().getDate(),
      instructionsData: [
        {
          id: '1',
          text: '1000AQS空气质量监测预警系统.pdf',
          date: '2018'
        }, {
          id: '2',
          text: '扩展型DDC控制器- E1020、E1022说明书.pdf',
          date: '2018'
        }, {
          id: '3',
          text: '物联网型风机盘管控制器.pdf',
          date: '2018'
        }, {
          id: '4',
          text: 'C7234A1010物联网型PM2.5传感器.pdf',
          date: '2018'
        }, {
          id: '5',
          text: 'C7234A1012物联网型甲醛传感器.pdf',
          date: '2018'
        }, {
          id: '6',
          text: 'C7234A1014物联网型一氧化碳传感器.pdf',
          date: '2018'
        }, {
          id: '7',
          text: 'C7234A1016物联网型二氧化碳传感器.pdf',
          date: '2018'
        }, {
          id: '8',
          text: 'C7234A1018物联网型TVOC传感器.pdf',
          date: '2018'
        }, {
          id: '9',
          text: 'LSS-3-5耐腐蚀液位开关说明书.pdf',
          date: '2018'
        }, {
          id: '10',
          text: 'Lux7234A1008物联网型光照度传感器.pdf',
          date: '2018'
        }, {
          id: '11',
          text: 'SmartIO思麦尔楼宇自控系统选型手册2017.pdf',
          date: '2018'
        }, {
          id: '12',
          text: 'SmartIO物联网型风机盘管温控器介绍.pdf',
          date: '2018'
        }
      ]
    }
  },
  methods: {
    downloadHandle (id) {
      axios.post('http://localhost:8082/static/resource/pdffiles/' + id, {
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        let fname = id
        link.href = url
        link.setAttribute('download', fname)
        document.body.appendChild(link)
        link.click()
      })
    }
  },
  computed: {
    instructionsDataCom () {
      let len = this.instructionsData.length
      let arr = []
      for (let i = 1; i <= Math.floor(len / 4); i++) { // 循环 l / 4 次
        let o = {}
        o.id = i
        o.feature = this.instructionsData.slice(i * 4 - 4, i * 4)
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
  }
</style>
