<template>
    <div class="customer-box">
        <el-row>
            <el-col :span="24" class="customer-title">
                <h2>
                    {{ this.$t('about.cooperation') }}
                </h2>
            </el-col>
        </el-row>
        <el-row class="customer-content">
            <el-col :span="6">
                <img src="../../assets/partner/1.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/2.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/3.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/4.jpg" alt="">
            </el-col>
        </el-row>
        <el-row class="customer-content">
            <el-col :span="6">
                <img src="../../assets/partner/5.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/6.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/7.jpg" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/partner/8.jpg" alt="">
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Customer'
}
</script>

<style lang="scss" scoped>
.customer-box {
    background: #ffffff;
    .customer-content {
        margin-top: 35px;
        img {
            height: 58px;
        }
    }
    h2 {
        text-align: center;
        margin-top: 35px;
        font-size: 28px;
        font-weight: 300;
    }
}
</style>
