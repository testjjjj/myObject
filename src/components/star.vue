<template>
    <ul class="fd-float fd-r">
        <li @mouseover="mouseover(0)" @mouseout="mouseout(0)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="this.iconList[0]"></use>
            </svg>
            <span>{{starNum}}</span>
        </li>
        <li @mouseover="mouseover(1)" @mouseout="mouseout(1)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="this.iconList[1]"></use>
            </svg>
            <span>{{commentNum}}</span>
        </li>
        <li @mouseover="mouseover(2)" @mouseout="mouseout(2)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="this.iconList[2]"></use>
            </svg>
            <span>{{viewNum}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        starNum: {
            type: Number,
            default: 0
        },
        commentNum: {
            type: Number,
            default: 0
        },
        viewNum: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            iconList: ['#icon-changyongtubiao-xianxingdaochu-zhuanqu-', '#icon-pinglun', '#icon-yanjing'],
            iconList_black: ['#icon-changyongtubiao-xianxingdaochu-zhuanqu-', '#icon-pinglun', '#icon-yanjing'],
            iconList_blue:['#icon-changyongtubiao-xianxingdaochu-zhuanqu--copy', '#icon-pinglun-copy', '#icon-yanjing-copy']
        }
    },
    methods: {
        mouseover(index) {
            this.iconList[index] = this.iconList_blue[index]
            this.$forceUpdate()
        },
        mouseout(index) {
            this.iconList[index] = this.iconList_black[index]
            this.$forceUpdate()
        }
    },
}
</script>

<style lang="less" scoped>
ul{
    li{
        display: flex;
        align-items: center;
        float: left;
        padding-right: 10px;
        cursor: pointer;
        span{
            padding-left: 3px;
            color: #3399ea;
        }
    }
}
.icon {
  width: 19px;
  height: 19px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>