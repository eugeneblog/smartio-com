<template>
    <div class="agent-area">
        <el-container>
            <el-row>
                <el-col :span="12" class="agent-image">
                    <img src="../../assets/agent/1.png" alt="aa">
                </el-col>
                <el-col :span="12" class="agent-content">
                    <h2>CONTACT <span>OUR AGENT</span></h2>
                    <h3>Hamidur Khan</h3>
                    <h5>Agent.Sopno</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    <ul class="agent-contact-info">
                        <li><span>Phone :</span> +999 999 999</li>
                        <li><span>email :</span> +999 999 999</li>
                        <li><span>Web :</span> +999 999 999</li>
                        <li><span>skype :</span> +999 999 999</li>
                    </ul>
                    <div class="agent-contact-form">
                        <el-form action="#">
                            <div class="input-box-2">
                                <div class="input-box"><el-input placeholder="Full Name"></el-input></div>
                                <div class="input-box"><el-input placeholder="Full Name"></el-input></div>
                            </div>
                            <div class="input-box"><el-input type="textarea" placeholder="Message"></el-input></div>
                            <div class="input-box"><el-input type="submit" value="Submit"></el-input></div>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'Cases'
}
</script>

<style lang="scss" scoped>
.agent-area {
    padding-top: 73px;
    .agent-image {
        padding-right: 85px;
    }
    .agent-content {
        margin-left: -30px;
        margin-top: 46px;
        .agent-contact-info {
            float: left;
            margin-bottom: 40px;
            li {
                font-weight: 600;
                float: left;
                min-width: 200px;
                color: #828282;
                span {
                    color: #71b100;
                    font-weight: 700;
                    text-transform: uppercase;
                }
            }
        }
        h2 {
            font-size: 30px;
            text-transform: uppercase;
            font-weight: 800;
            line-height: 22px;
            margin-bottom: 60px;
        }
        h3 {
            font-size: 22px;
            font-family: "Open Sans" , sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 7px;
        }
        h5 {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: #71b100;
            margin-bottom: 16px;
        }
        p {
            font-weight: 500;
            margin-bottom: 22px;
        }
    }
    .agent-contact-form {
        max-width: 374px;
        form {
            margin-left: -8px;
            margin-right: -8px;
            .input-box-2 {
                width: 100%;
                float: left;
                display: block;
                .input-box {
                    box-sizing: border-box;
                    padding-left: 8px;
                    padding-right: 8px;
                    width: 50%;
                    float: left;
                    margin-bottom: 16px;
                }
            }
        }
    }
}
</style>
