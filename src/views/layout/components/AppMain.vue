<template>
    <section class="app-main">
        <transition v-if="$route.meta.keepAlive"  name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view :key="key"/>
            </keep-alive>
        </transition>
        <transition v-else name="fade-transform" mode="out-in">
          <router-view :key="key"></router-view>
        </transition>
        <footer class="app-footer">
            <el-container>
                <div class="footer-main">
                    <template
                    v-for="item in footerContext"
                    >
                        <el-col
                        :key="item.id"
                        :span="8" class="footer-item">
                            <div>
                                <h4>{{ item.title }}</h4>
                                <p
                                v-if="item.slogan"
                                class="specific-text footer-slogan">
                                    {{ item.slogan }}
                                </p>
                                <ul class="specific-text">
                                    <li v-for="list in item.context" :key="list.id">
                                        <a href="#">
                                            {{ list.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </template>
                </div>
            </el-container>
        </footer>
    </section>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      footerContext: [{
        id: '1',
        title: '关于我们',
        slogan: '以客户需求为导向，以客户价值为目标，以客户满意为标准 坚持变革，倡导创新，持续成长。 快速反应，快速决策，快速行动 企业与员工共同成长， 专注主营业务。'
      }, {
        id: '2',
        title: '解决方案',
        context: [{
          id: '1',
          text: '空调风机解决方案'
        }, {
          id: '2',
          text: '楼宇系统解决方案'
        }, {
          id: '3',
          text: '行业应用解决方案'
        }, {
          id: '4',
          text: '案例精选'
        }]
      }, {
        id: '3',
        title: '联系我们',
        context: [{
          id: '1',
          text: '服务专线:0755-84563100'
        }, {
          id: '2',
          text: '企业邮箱: 13316967007@126.com'
        }, {
          id: '3',
          text: '深圳市龙岗区横岗街道麟恒中心广场J栋806'
        }, {
          id: '4',
          text: '周一至周六,9:00 - 18:00'
        }, {
          id: '5',
          text: '粤ICP备16067960号-1'
        }]
      }]
    }
  },
  computed: {
    key () {
      return this.$router.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
    float: left;
    height: 100%;
    width: 100%;
    .app-footer {
      position: relative;
      bottom: 0;
      margin-top: 60px;
      background: #f6f6f6;
      .footer-main {
        margin-top: 40px;
        margin-bottom: 40px;
        .footer-item {
          padding-left: 40px;
          .specific-text {
              margin-top: 20px;
              color: #949494;
          }
          .footer-slogan {
            padding-right: 40px;
            text-align: left;
          }
        }
      }
    }
}
</style>
