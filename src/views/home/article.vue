<template>
    <div class="home-article fd-border fd-f">
        <header>
            <ul class="fd-float">
                <li class="long active">最热</li>
                <li>最新</li>
            </ul>
        </header>
        <ul>
            <li v-for="(item, index) in articleList" :key="index">
                <div class="content">
                    <div class="author">
                        <span class="red dian">热</span>
                        <span class="dian author-hover">{{item.author.nickName}}</span>
                        <span class="author-hover">{{item.subject.subjectName}}</span>
                        <star :starNum="item.favourSum" :commentNum="item.commentSum" :viewNum="item.visitSum"></star>
                    </div>
                    <div class="title fd-textover">{{item.title}}</div>
                    <div class="abstract fd-textover">{{item.summary}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import star from '../../components/star'
export default {
    components: {
        star,
    },
    data() {
        return {
            type: 0,     // 文章列表类型0：最热，1：最新
            articleList: [] // 文章列表数据
        }
    },
    mounted() {
        this.getData(this.type)
    },
    methods: {
        /**
         * 请求文章列表
         */
        getData() {
            let param = {
                type: 0,
                pageNum: 1,
                pageSize: 15
            }
            this.$axios.post(this.$api.home.queryListByType.url, param).then(res => {
                if(res.data) {
                    this.articleList = res.data.pageList
                } else {
                    this.$message({
                        message: '暂无数据',
                        type: 'warning'
                    })
                }
            })
        },
        
    },
}
</script>

<style lang="less" scoped>
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
</style>