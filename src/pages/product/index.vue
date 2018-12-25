<template>
    <div class="gallery-area">
        <el-container>
            <div class="gallery-item">
                <el-col :span="8">
                    <a href="#"><img src="static/product/1.jpg" alt=""></a>
                    <div class="product_explain">DDC控制器 E1022+EX-0804+EX-4240</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/2.jpg" alt=""></a>
                    <div class="product_explain">BACnet路由器i100</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/3.jpg" alt=""></a>
                    <div class="product_explain">DDC控制器E1020 16DI 4DO</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/4.jpg" alt=""></a>
                    <div class="product_explain">EX-0804 8DI 4DO</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/5.jpg" alt=""></a>
                    <div class="product_explain">DDC控制器 E1022 6UI 8DI 4AO 4DO</div>
                </el-col>
                <el-col :span="8">
                    <a href="#"><img src="static/product/6.jpg" alt=""></a>
                    <div class="product_explain">防冻开关 TS4.5</div>
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
