<template>
    <div class="about-area">
        <el-container>
            <el-col :span="24">
                <div class="about-image">
                    <img src="../../assets/about/1.jpg" alt="">
                </div>
                <div class="about-content">
                    <h1>{{ this.$t('about.introduceCompany.about') }}<span>SmartIO</span></h1>
                    <h4>{{ this.$t('about.introduceCompany.about') + this.$t('about.introduceCompany.company') }}</h4>
                    <p>{{ this.$t('about.introduceCompany.context') }}</p>
                    <div class="funfact fix">
                        <div class="single-funfact text-center">
                            <h2 class="counter">1500</h2>
                            <p>{{ this.$t('about.introduceCompany.thecooperativeenterprise') }}</p>
                        </div>
                        <div class="single-funfact text-center">
                            <h2 class="counter">0.6%</h2>
                            <p>{{ this.$t('about.introduceCompany.Repairrate') }}</p>
                        </div>
                        <div class="single-funfact text-center">
                            <h2 class="counter">2000+</h2>
                            <p>{{ this.$t('about.introduceCompany.service') }}</p>
                        </div>
                        <div class="single-funfact text-center">
                            <h2 class="counter">0.02%</h2>
                            <p>{{ this.$t('about.introduceCompany.Damagerate') }}</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'AboutWe'
}
</script>

<style lang="scss" scoped>
.about-area {
    margin-top: 60px;
    .about-image {
        margin-right: 52px;
        float: left;
        width: 318px;
    }
    .about-content {
        overflow: hidden;
        h1 {
            font-size: 40px;
            font-weight: 800;
            line-height: 40px;
            margin-bottom: 2px;
            color: #4a4a4a;
            span {
                color: #71b100;
            }
        }
        h4 {
            font-size: 18px;
            font-weight: 300;
            color: #9b9b9b;
            margin-bottom: 23px;
        }
        p {
            font-size: 16px;
            line-height: 27px;
            font-weight: 300;
        }
        .funfact {
            border: 1px solid #eeeeee;
            margin-top: 32px;
            float: left;
            width: 99%;
            .single-funfact {
                float: left;
                width: 25%;
                padding: 28px 15px 28px;
                text-align: center;
                box-sizing: border-box;
                -moz-box-sizing:border-box; /* Firefox */
                -webkit-box-sizing:border-box; /* Safari */
                h2 {
                    font-size: 30px;
                    color: #71b100;
                    line-height: 24px;
                    margin-top: 8px;
                    margin-bottom: 0;
                }
                p {
                    line-height: 27px;
                    margin: 0;
                }
            }
        }
    }
}
</style>
