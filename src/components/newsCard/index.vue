<template>
    <router-link :to="'detail/' + newsData.id" tag="div">
        <div class="card_wrap"
        @click="handleClick(newsData.id)"
        >
            <el-card shadow="hover" class="card_items">
                <!-- <div class="card_headerImg">
                    <img src="../../../assets/card/Bitmap@3x.png" alt="">
                </div> -->
                <div class="card_header">
                    <h2>{{ newsData.title }}</h2>
                </div>
                <div class="card_content">
                    <div class="card_text">
                        <p>{{ newsData.describe }}</p>
                    </div>
                    <div class="card_footer">
                        <div class="card_section">
                            <span>{{ newsData.time }}</span>
                            <span>{{ newsData.type }} </span>
                        </div>
                        <router-link to="#">查看更多</router-link>
                    </div>
                </div>
            </el-card>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    newsData: Object
  },
  methods: {
    handleClick (id) {
      this.$emit('select', id)
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #878EA2;
.card_wrap {
    margin-top: 24px;
    cursor: pointer;
    .card_items {
        position: relative;
        .card_header {
            margin-left: 20px;
        }
        .card_headerImg {
            float: left;
            img {
                width: 34px;
            }
        }
        .card_content {
            float: left;
            margin-left: 20px;
            margin-bottom: 20px;
            .card_title{
                h3 {
                    margin-top: 0px;
                    margin-bottom: 10px;
                }
            }
            .card_text {
                p {
                    font-size: 14px;
                    overflow: hidden;
                    word-break: break-all;
                    display: -webkit-box;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: -o-box;
                    display: box;
                    -webkit-box-orient: vertical;
                    -moz-box-orient: vertical;
                    -ms-flex-direction: column;
                    -o-box-orient: vertical;
                    box-orient: vertical;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    -moz-line-clamp: 3;
                    -ms-line-clamp: 3;
                    padding-right: 20px;
                    // text-overflow: ellipsis;
                    color: $fontColor;
                }
            }
            .card_footer {
                margin-right: 20px;
                .card_section {
                    float: left;
                    span {
                        font-size: 14px;
                        color: $fontColor;
                    }
                }
                a {
                    float: right;
                }
                span {
                    font-size: 14px;
                    color: $fontColor;
                }
            }
        }
    }
}
</style>
