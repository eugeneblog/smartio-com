<template>
    <div class="header-box">
        <el-container>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="navbar-header">
                    <button
                    class="menu-toggle navbar-toggle collapsed"
                    v-show="isShow"
                    >
                        <svg-icon class="menu-svgicon open" icon-class="menu" />
                        <svg-icon class="menu-svgicon close" icon-class="close" />
                    </button>
                    <a href="" class="navbar-brand logo"><img src="../../../../assets/logo.png" alt=""></a>
                </div>
                <menu-item v-show="!isShow" :list = "getMenuList"></menu-item>
            </el-col>
        </el-container>
    </div>
</template>
<script>
import MenuItem from './menu/MenuItem'
import { mapGetters } from 'vuex'
export default {
  name: 'MenuList',
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapGetters([
      'getMenuList'
    ])
  },
  components: {
    MenuItem
  },
  methods: {
    getScreenWidth () {
      return window.outerWidth
    },
    changeMediaScreen (el) {
      let winWidth = this.getScreenWidth()
      if (winWidth >= 820) {
        el.isShow = false
      } else {
        el.isShow = true
      }
    },
    isShowHandleClick () {
      this.isShowMobScreen = !this.isShowMobScreen
    }
  },
  created () {
    this.changeMediaScreen(this)
  },
  mounted () {
    const _this = this
    window.onresize = () => {
      _this.changeMediaScreen(_this)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-box {
    position: relative;
    float: left;
    display: block;
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    z-index: 10;
    .navbar-header {
        .logo {
            height: auto;
            padding: 0;
            ul {
                margin: 0px;
                padding: 0px;
            }
            img {
                width: 100%;
            }
        }
        .menu-toggle {
            padding: 0;
            margin: 9px 0;
            .svg-icon {
                font-size: 30px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                width: 40px;
                opacity: 1;
                color: #0071b0 !important;
                &.open {
                    display: none;
                }
                &.close {
                    display: block;
                }
            }
            &.collapsed {
               .svg-icon {
                    &.open {
                        display: block;
                    }
                    &.close {
                        display: none;
                    }
               }
            }
        }
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header-box {
        padding: 5px 0;
    }
    .navbar-header {
        .logo {
            width: 130px;
            margin: 8px 0;
        }
    }
}
@media (min-width: 820px) {
    .navbar-header {
        float: left;
    }
}
@media only screen and (max-width: 767px) {
    .header-box {
        padding: 5px 0;
    }
    .navbar-header {
        .logo {
            width: 110px;
            margin: 12px 0 11px;
        }
    }
}
</style>
