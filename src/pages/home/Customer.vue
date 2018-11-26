<template>
    <div class="customer-box">
        <el-row>
            <el-col :span="24" class="customer-title">
                <h2>
                    我们的客户
                </h2>
            </el-col>
        </el-row>
        <el-row class="customer-content">
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
        </el-row>
        <el-row class="customer-content">
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
            </el-col>
            <el-col :span="6">
                <img src="../../assets/home/client8.png" alt="">
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
    }
    h2 {
        text-align: center;
        margin-top: 35px;
        font-size: 28px;
        font-weight: 300;
    }
}
</style>
