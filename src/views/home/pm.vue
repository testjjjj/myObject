<template>
    <div class="home-pm fd-f fd-border fd-margin">
        <header>🎖️作者榜</header>
        <ul>
            <li class="fd-float">
                <div class="pm-img fd-f"></div>
                <div class="pm-main fd-f">
                    <div class="pm-name fd-textover">大大的叹号</div>
                    <div class="fd-textover">前端工程师 @ 大连华宇</div>
                    <div class="fd-textover">javascript 贡献者</div>
                </div>
            </li>
            <li class="fd-float">
                <div class="pm-img fd-f"></div>
                <div class="pm-main fd-f">
                    <div class="pm-name fd-textover">大大的叹号</div>
                    <div class="fd-textover">前端工程师 @ 大连华宇</div>
                    <div class="fd-textover">javascript 贡献者</div>
                </div>
            </li>
            <li class="fd-float">
                <div class="pm-img fd-f"></div>
                <div class="pm-main fd-f">
                    <div class="pm-name fd-textover">大大的叹号</div>
                    <div class="fd-textover">前端工程师 @ 大连华宇</div>
                    <div class="fd-textover">javascript 贡献者</div>
                </div>
            </li>
            <li class="fd-float">
                <div class="pm-img fd-f"></div>
                <div class="pm-main fd-f">
                    <div class="pm-name fd-textover">大大的叹号</div>
                    <div class="fd-textover">前端工程师 @ 大连华宇</div>
                    <div class="fd-textover">javascript 贡献者</div>
                </div>
            </li>
            <li class="fd-float">
                <div class="pm-img fd-f"></div>
                <div class="pm-main fd-f">
                    <div class="pm-name fd-textover">大大的叹号</div>
                    <div class="fd-textover">前端工程444444师 @ 大连华宇</div>
                    <div class="fd-textover">javascript 贡献者</div>
                </div>
            </li>
        </ul>
        <footer>
            完整榜单<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-NMStubiao-"></use>
            </svg>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.home-pm{
    width: 25%;
    background-color: #fff;
    header{
        padding: 10px 15px;
        border-bottom: 1px solid #dad9d9;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
    }
    ul{
        li{
            padding: 10px 15px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: .2s ease-in-out;
            &:hover{
                position: relative;
                box-shadow: 0 2px 7px rgba(0,0,0,.15);
                transform: scale(1,1.1);
            }
            .pm-img{
                flex: 0 0 auto;
                width: 50px;
                height: 50px;
                background-image: url('../../assets/img/user/test.jpg');
                background-size: 100%;
                border-radius: 50%;
                margin-right: 10px;
            }
            .pm-main{
                overflow: hidden;
                div{
                    color: #909090;
                    text-align: left;
                    margin-bottom: 3px;
                }
                .pm-name{
                    color: #333;
                    font-size: 14px;
                    font-weight:700;
                }
            }
        }
    }
    footer{
        padding: 10px 15px;
        border-top: 1px solid #dad9d9;
        color: #6ebee9;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
    }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>