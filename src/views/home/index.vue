<!--
 * @Author: cjd
 * @Date: 2019-10-28 08:30:15
 * @LastEditTime: 2019-10-29 17:10:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \display\src\views\home\index.vue
 -->
<template>
    <section class="content fd-float">
        <!-- 作者排名 -->
        <pm></pm>
        <!-- 推荐文章 -->
        <div class="home-article fd-border fd-f">
            <header>
                <ul class="fd-float">
                    <li class="long active">最热</li>
                    <li>最新</li>
                </ul>
            </header>
            <ul>
                <li>
                    <div class="content">
                        <div class="author">
                            <span class="red dian">热</span>
                            <span class="dian author-hover">有哥</span>
                            <span class="author-hover">后端</span>
                            <ul class="fd-float fd-r">
                                <li @mouseover="mouseover(0)" @mouseout="mouseout(0)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[0]"></use>
                                    </svg>
                                    <span>1025</span>
                                </li>
                                <li @mouseover="mouseover(1)" @mouseout="mouseout(1)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[1]"></use>
                                    </svg>
                                    <span>25</span>
                                </li>
                                <li @mouseover="mouseover(2)" @mouseout="mouseout(2)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[2]"></use>
                                    </svg>
                                    <span>6000</span>
                                </li>
                            </ul>
                        </div>
                        <div class="title fd-textover">java的不拉不拉当时的方式不拉不拉</div>
                        <div class="abstract fd-textover">java在经济案鼎折覆餗对方是否的说法是件结案件案件骄傲骄傲骄傲叫骄傲骄傲骄傲骄傲叫姐姐爱就爱经济案件聚焦</div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="author">
                            <span class="red dian">热</span>
                            <span class="dian author-hover">有哥</span>
                            <span class="author-hover">后端</span>
                            <ul class="fd-float fd-r">
                                <li @mouseover="mouseover(0)" @mouseout="mouseout(0)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[0]"></use>
                                    </svg>
                                    <span>1025</span>
                                </li>
                                <li @mouseover="mouseover(1)" @mouseout="mouseout(1)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[1]"></use>
                                    </svg>
                                    <span>25</span>
                                </li>
                                <li @mouseover="mouseover(2)" @mouseout="mouseout(2)">
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="iconList[2]"></use>
                                    </svg>
                                    <span>6000</span>
                                </li>
                            </ul>
                        </div>
                        <div class="title fd-textover">java的不拉不拉当时的方式不拉不拉</div>
                        <div class="abstract fd-textover">java在经济案鼎折覆餗对方是否的说法是件结案件案件骄傲骄傲骄傲叫骄傲骄傲骄傲骄傲叫姐姐爱就爱经济案件聚焦</div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import pm from './pm'
export default {
    components: {
        pm
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
.content{
    padding-top: 10px;
}
.home-article{
    width: calc(75% - 20px);
    background: #fff;
    header{
        padding: 15px 25px;
        border-bottom: 1px solid #dad9d9;
        text-align: left;
        ul{
            align-items: center;
            line-height: 1;
            li{
                display: block;
                float: left;
                font-size: 14px;
                color: #909090;
                padding: 0 10px;
                cursor: pointer;
                &:hover{
                    color: #007fff;
                }
            }
            .long{
                border-right: 1px solid #dcdcdc;
            }
            .active{
                color: #007fff;
            }
        }
    }
    ul{
        li{
            .content{
                padding: 20px 25px;
                border-bottom: 1px solid rgba(178,186,194,.15);
                text-align: left;
                overflow: hidden;
                div{
                    margin-bottom: 3px;
                }
                .author{
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
                    span{
                        color: #b2bac2;
                        font-size: 14px;
                    }
                    .dian::after{
                        content: '·';
                        margin: 5px;
                        color: #b2bac2;
                    }
                    .author-hover{
                        cursor: pointer;
                        &:hover{
                            color: #007fff;
                        }
                    }
                    .red{
                        color: red;
                    }
                }
                .title{
                    color: #2e3135;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: 600;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .abstract{
                    font-size: 14px;
                    color: #b2bac2;
                }
            }
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