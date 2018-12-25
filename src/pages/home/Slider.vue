<template>
    <div class="hero-area">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <template v-for="item in slideItems">
                    <div class="swiper-slide" :key="item.id">
                        <div class="slide-items">
                            <img :src="item.imgLink">
                            <div class="swipen-context">
                                <el-container>
                                    <el-col :span="24" class="hero-content">
                                        <h2>{{ item.context.title }}</h2>
                                        <h1>{{ item.context.content }}</h1>
                                        <router-link :to="item.articleLink">{{ item.context.button }}</router-link>
                                    </el-col>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Home',
  data () {
    return {
      slideItems: [{
        id: '1',
        imgLink: 'static/swiper/1.jpg',
        articleLink: '/index/detail/1',
        context: {
          title: 'Welcome To',
          content: '践行“中国制造2025”助推楼宇智造',
          button: '查看详情'
        }
      }, {
        id: '2',
        imgLink: 'static/swiper/2.jpg',
        articleLink: '/index/detail/2',
        context: {
          title: 'Welcome To',
          content: 'SmartIO思麦尔CEO出席《深圳市绿色建筑适用技术与产品推广目录》发布仪式',
          button: '查看详情'
        }
      }, {
        id: '3',
        imgLink: 'static/swiper/3.jpg',
        articleLink: '/index/detail/3',
        context: {
          title: 'Welcome To',
          content: '科技监管室内空气污染，保障公众呼吸安全',
          button: '查看详情'
        }
      }]
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: true
    })
  }
}
</script>

<style lang="scss" scoped>
.hero-area {
    .swiper-container {
        width: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            .slide-items {
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to right, #71b100 0%, #0071b0 100%);
                    opacity: 0.6;
                }
                img {
                    width: 100%;
                }
                .swipen-context {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    z-index: 1;
                    .hero-content {
                        position: relative;
                    }
                    * {
                        -webkit-animation-duration: 1s;
                        animation-duration: 1s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                        -webkit-animation-name: fadeOutDown;
                        animation-name: fadeOutDown;
                    }
                    h2 {
                        text-align: left;
                        text-transform: uppercase;
                        color: #fff;
                        font-weight: 300;
                        line-height: 38px;
                        font-size: 34px;
                        margin-bottom: 24px;
                    }
                    h1 {
                        text-align: left;
                        display: block;
                        text-align: left;
                        text-transform: uppercase;
                        color: #fff;
                        font-weight: 300;
                        line-height: 66px;
                        font-size: 40px;
                        margin-bottom: 28px;
                    }
                    a {
                        width: 68px;
                        display: block;
                        text-align: left;
                        text-transform: uppercase;
                        color: #fff;
                        height: 52px;
                        font-size: 15px;
                        font-weight: 300;
                        letter-spacing: 0.2px;
                        padding: 0px 40px;
                        border-radius: 5px;
                        box-shadow: 0 0 20px rgba(24, 24, 24, 0.3);
                        line-height: 52px;
                        background: linear-gradient(to right, #0071b0 0%, #71b100 51%, #0071b0 100%);
                        background-size: 200% auto;
                        &:hover {
                            background-position: right center;
                        }
                    }
                }
            }
        }
    }
}
</style>
