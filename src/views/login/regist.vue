<template>
    <div class="regist">
        <div class="mar-bott">
            <el-input placeholder="请输入用户名"></el-input>
        </div>
        <div class="mar-bott">
            <el-input placeholder="请输入手机号"></el-input>
        </div>
        <div class="mar-bott">
            <el-input placeholder="请输入密码（不少于6位）"></el-input>
        </div>
        <div class="login mar-bott">
            <el-button type="primary">注册</el-button>
        </div>
        <div class="text fd-float mar-bott">
            <div class="blue" @click="goLogin">已有账号登录</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        /**
         * 用登录组件
         */
        goLogin() {
            this.$emit('changeType', 'login')
        }
    },
}
</script>

<style lang="less" scoped>
.regist{
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
            text-align: center;
        }
    }
}
</style>