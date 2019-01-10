<template>
    <div class="gallery-area">
        <el-container>
            <div class="gallery-item">
                <el-col :span="8">
                    <a href="#"><img src="static/product/1.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.DDCController') }}</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/2.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.BACnetRoute') }}</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/3.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.DDCControllerE1020') }}</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/4.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.EX0804') }}</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/5.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.DDCControllerE1022') }}</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/6.jpg" alt=""></a>
                    <div class="product_explain">{{ this.$t('product.AntifreezeSwitch') }}</div>
                </el-col>
            </div>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'Product'
}
</script>
