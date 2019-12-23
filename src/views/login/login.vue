<template>
    <div class="login">
        <div class="mar-bott">
            <el-input placeholder="请输入手机号"></el-input>
        </div>
        <div class="mar-bott">
            <el-input placeholder="请输入密码"></el-input>
        </div>
        <div class="login mar-bott">
            <el-button type="primary">登录</el-button>
        </div>
        <div class="text fd-float mar-bott">
            <div class="fd-f">还特么没有号？</div>
            <div class="fd-f blue" @click="goRegist">注册</div>
            <div class="fd-r blue">忘记密码</div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goRegist() {
            this.$emit('changeType', 'regist')
        }
    },
}
</script>

<style lang="less" scoped>
.login{
    .mar-bott{
        margin-bottom: 10px;
    }
    .text{
        font-size: 14px;
        div{
            font-size: 14px;
        }
        .blue{
            color: #0371df;
            cursor: pointer;
        }
    }
}
</style>