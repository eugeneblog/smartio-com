<template>
  <div class="gallery-area">
    <div class="feature-area">
          <el-container>
              <div class="feature-wrapper">
                  <h2>产品中心</h2>
                  <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on</p>
                  <div class="single-feature" v-for="(o, index) of childrens" :key="index">
                      <img src="../../assets/cases/1.png" alt="">
                      <h4>{{o.text}}</h4>
                      <p></p>
                      <router-link :to="o.link">{{o.text}}>>></router-link>
                  </div>
              </div>
          </el-container>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      currentDate: new Date(),
      childrens: []
    }
  },
  beforeMount () {
    this.childrens = this.$store.getters.getTodoById('product').children
    console.log(this.childrens)
  }
}
</script>

<style lang="scss" scoped>
.gallery-area{
    // float: left;
    width: 100%;
    height: 100%;
}
.feature-area {
    background-image: url('../../assets/product/bg2.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    position: relative;
    &::before {
        background-color: #00b0b0;
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        opacity: 0.9;
    }
    .feature-wrapper {
        padding-top: 60px;
        position: relative;
        z-index: 1;
        .single-feature {
            margin-bottom: 60px;
            padding-right: 60px;
            h4 {
                color: #ffffff;
            }
            a {
              color: #ffffff;
            }
        }
        h2 {
            z-index: 1;
            font-size: 30px;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 8px;
            color: #ffffff;
        }
        p {
            font-size: 15px;
            line-height: 23px;
            margin-bottom: 45px;
            color: #ebebeb;
            font-weight: 500;
        }
    }
}
</style>
