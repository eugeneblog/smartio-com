<template>
    <div class="case-box">
        <div class="feature-area">
            <el-container>
                <div class="feature-wrapper">
                    <h2>深圳机场</h2>
                    <p>Anything embarrassing hide in the middle of text. All the Lorem Ipsum generators on</p>
                    <el-col :span="14">
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/1.png" alt="">
                            <h4>温湿度控制</h4>
                            <p>合理调节温度、湿度、空气质量，在满足舒适度的前提下降低能耗是楼宇自控系统的主要任务之一。</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/2.png" alt="">
                            <h4>照明控制</h4>
                            <p>附属地下停车场照明、通风、污水管理，商场内照明管理和商场景观照明管理也是减少能耗、降低设备管理人员劳动力成本的重要因素。</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/3.png" alt="">
                            <h4>节能环保</h4>
                            <p>我们需要建设可持续的能源系统，尽可能的做到最大的节能</p>
                        </el-col>
                        <el-col :span="12" class="single-feature">
                            <img src="../../assets/cases/4.png" alt="">
                            <h4>节省人力</h4>
                            <p>百分之八十以上的设备都实现了自动化管理</p>
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
