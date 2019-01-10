<template>
    <div class="agent-area">
        <el-container>
            <el-row>
                <el-col :span="12" class="agent-image">
                    <img src="../../assets/agent/1.png" alt="aa">
                </el-col>
                <el-col :span="12" class="agent-content">
                    <h2>{{ this.$t('contactUs.title') }} <span>{{ this.$t('contactUs.man') }}</span></h2>
                    <h3>09:00 - 18:00</h3>
                    <h5>{{ this.$t('contactUs.workingTime') }}</h5>
                    <p>{{ this.$t('contactUs.text') }}</p>
                    <ul class="agent-contact-info">
                        <li><span>{{ this.$t('contactUs.landline') }} :</span> +0755 - 84563130</li>
                        <li><span>email :</span>2642592347@QQ.COM </li>
                        <li><span>qq :</span> 2642592347 </li>
                        <li><span>{{ this.$t('contactUs.weChat') }} :</span> 13316967007</li>
                    </ul>
                    <div class="agent-contact-form">
                        <el-form action="#" v-model="form">
                            <div class="input-box-2">
                                <div class="input-box"><el-input  v-model="form.name" :placeholder="this.$t('contactUs.tip.name')"></el-input></div>
                            </div>
                            <div class="input-box"><el-input v-model="form.say" type="textarea" :placeholder="this.$t('contactUs.tip.content')"></el-input></div>
                            <div class="input-box "><el-input @click.native="submitHandle" type="button" :value="this.$t('contactUs.submit')"></el-input></div>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
import { sendFeedbackForm } from '@/api/feedback.js'
export default {
  name: 'Cases',
  data () {
    return {
      formDescribe: {
        phone: '',
        email: '',
        qq: '',
        wechat: ''
      },
      form: {
        name: '',
        say: ''
      }
    }
  },
  methods: {
    submitHandle () {
      sendFeedbackForm(this.form)
    }
  }
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
            font-size: 24px;
            text-transform: uppercase;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 40px;
        }
        h3 {
            font-size: 22px;
            font-family: "Open Sans" , sans-serif;
            font-weight: 300;
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
            font-weight: 300;
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
