<template>
  <div class="gallery-area">
    <div class="feature-area">
          <el-container>
              <div class="feature-wrapper">
                  <h2>产品中心</h2>
                  <p>Our products and related materials</p>
                  <div class="single-feature" v-for="(o, index) of childrens" :key="index" @click="listClickHandle(o)">
                      <img src="../../assets/cases/1.png" alt="">
                      <h4>{{o.text}}</h4>
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
  },
  methods: {
    listClickHandle (o) {
      // console.log(this)
      this.$router.replace(o.link)
    }
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
        background-color: #089ab0;
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
          overflow: hidden;
          padding: 15px;
          cursor: pointer;
          margin-bottom: 60px;
          h4 {
              color: #ffffff;
          }
          a {
            color: #ffffff;
          }
          &:hover{
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            a {
              font-size: 16px;
            }
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
