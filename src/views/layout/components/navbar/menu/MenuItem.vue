<template>
    <div id="main-menu" class="main-menu onepage-nav collapse navbar-collapse float-right">
        <nav>
            <ul>
                <li
                @click = "clickHandle(item, item.id)"
                @mouseover = "item.children ? childrenShow = true : childrenShow = false"
                @mouseleave = "item.children ? childrenShow = false : childrenShow = false"
                :class="{ active: item.show }"
                v-for="item in list"
                :key="item.id"
                >
                <router-link :to="item.link">{{ item.text }}</router-link>
                    <transition name="fade">
                        <div
                        v-if="item.children"
                        v-show="childrenShow"
                        class="menu_children">
                            <ul>
                                <li
                                v-for="child of item.children"
                                :key="child.id"
                                ><router-link :to="child.link">{{ child.text }}</router-link></li>
                            </ul>
                        </div>
                    </transition>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data () {
    return {
      childrenShow: false,
      clickIndex: 0
    }
  },
  props: {
    list: Array
  },
  methods: {
    clickHandle (item, index) {
      this.list.forEach(element => {
        element.show = false
      })
      this.clickIndex = index - 1
      item.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
    margin: 20px 0;
    padding: 0;
    nav {
        ul {
            li {
                display: block;
                float: left;
                margin-left: 40px;
                position: relative;
                .menu_children {
                    position: absolute;
                    background: #fff;
                    width: 100%;
                    border: 1px solid #f3f3f3;
                    padding: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    top: 40px;
                    z-index: 999 !important;
                    &::before {
                        content: '';
                        position: absolute;
                        top: -5px;
                        transform: rotate(45deg);
                        border-top: 5px solid #71b100;
                        border-left: 5px solid #71b100;
                        border-bottom: 5px solid rgba(255, 255, 255, 0);
                        border-right: 5px solid rgba(255, 255, 255, 0);
                        // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        background: #ffffff;
                        // border: 1px solid #f3f3f3;
                        z-index: 0 !important;
                    }
                    li {
                        margin-bottom: 10px;
                        margin-left: 0px;
                    }
                    a {
                        color: black !important;
                        font-size: 13px;
                    }
                }
                &:first-child {
                    margin-left: 0;
                }
                &:active > a {
                    background: #71b100;
                    background: -moz-linear-gradient(left, #71b100 0%, #0071b0 100%);
                    background: -webkit-gradient(left top, right top, color-stop(0%, #71b100), color-stop(100%, #0071b0));
                    background: -webkit-linear-gradient(left, #71b100 0%, #0071b0 100%);
                    background: -o-linear-gradient(left, #71b100 0%, #0071b0 100%);
                    background: -ms-linear-gradient(left, #71b100 0%, #0071b0 100%);
                    background: linear-gradient(to right, #71b100 0%, #0071b0 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$theme-color-1', endColorstr='$theme-color-2', GradientType=1 );
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                a {
                    font-size: 18px;
                    font-weight: 300;
                    &:hover {
                        background: #71b100;
                        background: -moz-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -webkit-gradient(left top, right top, color-stop(0%, #71b100), color-stop(100%, #0071b0));
                        background: -webkit-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -o-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -ms-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: linear-gradient(to right, #71b100 0%, #0071b0 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$theme-color-1', endColorstr='$theme-color-2', GradientType=1 );
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 767px) {
    .main-menu {
        margin: 0;
        float: left;
        width: 100%;
        nav {
            padding: 15px 0;
            ul {
                li {
                    margin-left: 0;
                    float: none;
                }
            }
        }
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .main-menu nav ul li {
        margin-left: 25px;
    }
}
@media screen and (min-width: 0\0) and (min-resolution: 72dpi) {
    .main-menu nav ul li a:hover, .main-menu nav ul li.active a {
        filter: none;
        background-color: transparent;
        background-image: none;
        color: #71b100;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
