<template>
    <div class="case-box">
        <div class="feature-area">
            <el-container>
                <div class="feature-wrapper">
                    <h2>蛇口网谷-数码大厦BA系统</h2>
                    <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on</p>
                    <el-col :span="14">
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/1.png" alt="">
                            <h4>Awesome Amenities</h4>
                            <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on the</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/2.png" alt="">
                            <h4>Awesome Amenities</h4>
                            <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on the</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/3.png" alt="">
                            <h4>Awesome Amenities</h4>
                            <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on the</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/4.png" alt="">
                            <h4>Awesome Amenities</h4>
                            <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on the</p>
                        </el-col>
                    </el-col>
                </div>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cases'
}
</script>

<style lang="scss" scoped>
.case-box{
    // float: left;
    width: 100%;
    height: 100%;
    padding-top: 73px
}
.feature-area {
    background-image: url('../../assets/cases/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    z-index: -1;
    position: relative;
    &::before {
        background-color: #0071b0;
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        top: 0;
        width: 59.8%;
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
