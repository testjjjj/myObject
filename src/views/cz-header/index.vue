/*
 * @Author: cjd 
 * @Date: 2019-10-26 14:18:34 
 * @Last Modified by: cjd
 * @Last Modified time: 2019-10-26 15:36:23
 */
<template>
    <header>
        <div class="main">
            <!-- logo -->
            <div class="hd-logo fd-f">
                <img src="../../assets/img/header/logo.png" alt="" class="logo_pc">
                <img src="../../assets/img/header/logo_phone.png" alt="" class="logo_phone">
            </div>
            <!-- 菜单 -->
            <div class="hd-menu fd-f">
                <div class="menu-list">
                    <!-- pc -->
                    <el-menu :default-active="defalte_menu_index" mode="horizontal" @select="handleSelect" v-if="isPC">
                        <el-menu-item index="/home">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">专题</template>
                            <el-menu-item index="/special/fe">前端</el-menu-item>
                            <el-menu-item index="/special/rd">后端</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/download">下载</el-menu-item>
                        <el-menu-item index="/diary">日记</el-menu-item>
                        <el-menu-item index="/about">关于</el-menu-item>
                    </el-menu>
                    <!-- phone -->
                    <el-dropdown v-else trigger="click" @command="handleSelect">
                        <el-button type="primary" size="small">
                            菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="/home">首页</el-dropdown-item>
                            <el-dropdown-item command="/special/fe">前端</el-dropdown-item>
                            <el-dropdown-item command="/special/rd">后端</el-dropdown-item>
                            <el-dropdown-item command="/download">下载</el-dropdown-item>
                            <el-dropdown-item command="/diary">日记</el-dropdown-item>
                            <el-dropdown-item command="/about">关于</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <!-- 登录/注册、写博客 -->
            <div class="hd-use fd-r">
                <div class="fd-r">
                    <span class="hd-use-login" @click="openLogin('login')">登录</span>&sdot;
                    <span class="hd-use-login" @click="openLogin('regist')">注册</span>
                </div>
                <div class="hd-use-write fd-r" @click="goWrite">
                    <span>写博文</span>
                </div>
            </div>
            <!-- 搜索 -->
            <div class="hd-select fd-r">
                <div class="select-child">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <!-- 登录注册弹窗 -->
            <login :type="type"></login>
        </div>
    </header>
</template>
<script>
import login from '../login/index'
export default {
    components: {
        login
    },
    data() {
        return {
            defalte_menu_index: 'home',  // 默认菜单index
            isPC: true, // 菜单按pc端显示
            screenWidth: document.body.clientWidth,  // 屏幕width
            type: ''   // 登录或注册title
        }
    },
    watch: {
        /**
         * 监听屏幕screenWidth
         */
        screenWidth: {
            handler(newValue) {
                this.isPC = newValue > 960
            },
            immediate: true
        }
    },
    created() {
        // 当前的路由
        this.defalte_menu_index = this.$route.path
        // 监听屏幕变化
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth
        }
    },
    methods: {
        /**
         * 选择菜单
         */
        handleSelect(key) {
            key === this.$route.path ? '' : this.$router.push(key)
        },
        /**
         * 打开登录注册弹窗
         */
        openLogin(index) {
            this.type = index
        },
        /**
         * 跳转写文章
         */
        goWrite() {
            window.open('http://localhost:8000/write/')
            // this.$router.push('/write')
        }
    }
}
</script>
<style lang="less" scoped>
header{
    width: calc(100% - 2px);
    height: 65px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    position: fixed;
    top: 0;
    .hd-logo{
        height: 100%;
        img{
            height: 65px;
        }
    }
    .hd-menu{
        display: table;
        height: 65px;
        .menu-list{
            display: table-cell;
            vertical-align: middle;
        }
    }
    .hd-select{
        height: 65px;
        width: 165px;
        display: table;
        .select-child{
            display: table-cell;
            vertical-align: middle;
        }
    }
    .hd-use{
        height: 100%;
        div{
            width: 65px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            margin: 10px;
            color: #909399;
            transition: 0.7s;
            border-radius: 3px;
            cursor: pointer;
            .hd-use-login{
                font-size: 14px;
                transition: 0.7s;
                &:hover{
                    color: #0371df;
                }
            }
        }
        .hd-use-write{
            color: #ff3434;
            span{
                &::before{
                    content: '';
                    display: inline-block;   
                    width: 20px;   
                    height: 16px;
                    background: url('../../assets/img/header/write.png');
                }
            }
            &:hover{
                color: red;
                background-color: #ff757536;
            }
        }
    }
}
.logo_pc{
    display: block;
}
.logo_phone{
    display: none;
}
@media screen and (max-width: 960px){
    .logo_pc{
        display: none;
    }
    .logo_phone{
        display: block;
    }
    .hd-use-write{
        display: none;
    }
    .hd-select{
        width: 140px !important;
    }
}
</style>

