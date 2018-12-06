<template>
    <div class="tools_box">
        <el-row>
            <h2>program编程工具</h2>
        </el-row>
        <el-row>
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="0">
                <iframe frameborder="0" scrolling="yes" src="static/resource/lyzkxxsc2016.pdf" width="100%" height="1000px">
                    <html><body style="height: 100%; width: 100%; overflow: hidden; margin: 0px; background-color: rgb(82, 86, 89);"><embed width="100%" height="100%" name="plugin" id="plugin" src="static/resource/lyzkxxsc2016.pdf" type="application/pdf" internalinstanceid="25"></body></html>
                </iframe>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Tool'
}
</script>

<style lang="scss" scoped>
.tools_box {
}
</style>
