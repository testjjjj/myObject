<template>
    <el-dialog :title="title" :visible.sync="isShow" width="20%" :center="false" @close="close">
        <component :is="logComponent" @changeType="changeType"></component>
        <other-login></other-login>
    </el-dialog>
</template>

<script>
import login from './login'
import regist from './regist'
import otherLogin from '../../components/OtherLogin'
export default {
    components: {
        login,  // 登录组件
        otherLogin, // 其他方式登录
        regist  // 注册组件
    },
    props: {
        type: { // login：登录，regist：注册
            type: String,
            default: ''
        }
    },
    watch: {
        type(newValue) {
            if(newValue === 'login') {
                this.title = '登录'
                this.isShow = true
                this.logComponent = 'login'
            } else if(newValue === 'regist') {
                this.title = '注册'
                this.isShow = true
                this.logComponent = 'regist'
            }
        }
    },
    data() {
        return {
            title: '',  // 标题
            isShow: false,  // 是否显示弹窗
            logComponent: ''    // 动态组件
        }
    },
    methods: {
        /**
         * 关闭弹窗是的回调
         */
        close() {
            this.$parent.type = ''
        },
        /**
         * login：登录，regist：注册
         */
        changeType(type) {
            this.$parent.type = type
        }
    },
}
</script>

<style lang="less" scoped>

</style>