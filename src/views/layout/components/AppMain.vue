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
                                        <a :href="list.linkUrl || '#'">
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
        title: this.$t('footer.aboutMeTitle'),
        slogan: this.$t('footer.aboutMe')
      }, {
        id: '2',
        title: this.$t('footer.Thesolution'),
        context: [{
          id: '1',
          text: this.$t('footer.solution[0].text')
        }, {
          id: '2',
          text: this.$t('footer.solution[1].text')
        }, {
          id: '3',
          text: this.$t('footer.solution[2].text')
        }, {
          id: '4',
          text: this.$t('footer.solution[3].text')
        }]
      }, {
        id: '3',
        title: this.$t('footer.ContactUs'),
        context: [{
          id: '1',
          text: this.$t('footer.contactUsDetail[0].text')
        }, {
          id: '2',
          text: this.$t('footer.contactUsDetail[1].text')
        }, {
          id: '3',
          text: this.$t('footer.contactUsDetail[2].text')
        }, {
          id: '4',
          text: this.$t('footer.contactUsDetail[3].text')
        }, {
          id: '5',
          text: this.$t('footer.contactUsDetail[4].text'),
          linkUrl: 'http://www.miitbeian.gov.cn'
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
