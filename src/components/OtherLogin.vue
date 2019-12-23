<template>
    <div class="other fd-float">
        <div class="text">第三方账号登录：</div>
        <div class="oauth">
            <div class="oauth-box">
                <img src="../assets/img/login/weibo.svg" alt="">
            </div>
            <div class="oauth-box">
                <img src="../assets/img/login/wechat.svg" alt="">
            </div>
            <div class="oauth-box">
                <img src="../assets/img/login/github.svg" alt="">
            </div>
        </div>
        <div class="mar-top">
            <span>注册登录即表示同意</span>
            <span class="blue">用户协议、隐私政策</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.other{
    color: #767676;
    margin-top: 20px;
    .text{
        font-size: 14px;
        text-align: left;
    }
    .oauth{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 15px;
        .oauth-box{
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #f4f8fb;
            border-radius: 50%;
            cursor: pointer;
            img{
                height: 22px;
            }
        }
    }
    .mar-top{
        margin-top: 20px;
        text-align: left;
        span{
            font-size: 14px;
        }
        .blue{
            color: #0371df;
            cursor: pointer;
        }
    }
}
</style>