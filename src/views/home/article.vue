<template>
    <div class="home-article fd-border fd-f">
        <header>
            <ul class="fd-float">
                <li class="long" :class="type ? '' : 'active'" @click="changeType(0)">最热</li>
                <li :class="type ? 'active' : ''" @click="changeType(1)">最新</li>
            </ul>
        </header>
        <ul v-show="!type">
            <li v-for="(item, index) in hotArticleList" :key="index">
                <div class="content">
                    <div class="author">
                        <span class="red dian">热</span>
                        <span class="dian author-hover">{{item.author.nickName}}</span>
                        <span class="author-hover">{{item.subject.subjectName}}</span>
                        <star :starNum="item.favourSum" :commentNum="item.commentSum" :viewNum="item.visitSum"></star>
                    </div>
                    <div class="title fd-textover" @click="goArticle(item)">{{item.title}}</div>
                    <div class="abstract fd-textover">{{item.summary}}</div>
                </div>
            </li>
        </ul>
        <ul v-show="type">
            <li v-for="(item, index) in newArticleList" :key="index">
                <div class="content">
                    <div class="author">
                        <span class="green dian">New</span>
                        <span class="dian author-hover">{{item.author.nickName}}</span>
                        <span class="author-hover">{{item.subject.subjectName}}</span>
                        <star :starNum="item.favourSum" :commentNum="item.commentSum" :viewNum="item.visitSum"></star>
                    </div>
                    <div class="title fd-textover" @click="goArticle(item)">{{item.title}}</div>
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
            hotPage: {
                pageNum: 1,
                pageSize: 10
            },
            newPage: {
                pageNum: 1,
                pageSize: 10
            },
            type: 0,     // 文章列表类型0：最热，1：最新
            hotArticleList: [], // 最热文章列表数据
            newArticleList: [] // 最新文章列表数据
        }
    },
    watch: {
        /**
         * @description: 监听type变化，请求不同数据
         * @param {type} 
         * @return: 
         */        
        type() {
            if (this.newPage.pageNum === 1) {
                this.getData()
            }
        }
    },
    mounted() {
        this.$root.$on('getArticleList', this.getData)
        this.getData()
    },
    methods: {
        /**
         * @description: 切换type，最新最热
         * @param {type} 
         * @return: 
         */        
        changeType(flag) {
            this.type = flag
        },
        /**
         * 请求文章列表
         */
        getData() {
            let param = {
                type: this.type,
                pageNum: this.type ? this.newPage.pageNum : this.hotPage.pageNum,
                pageSize: this.type ? this.newPage.pageSize : this.hotPage.pageSize
            }
            this.$axios.post(this.$api.home.queryListByType.url, param).then(res => {
                if(res.data) {
                    if (this.type) {
                        this.newArticleList.push(...res.data.pageList)
                        this.newPage.pageNum++
                    } else {
                        this.hotArticleList.push(...res.data.pageList)
                        this.hotPage.pageNum++
                    }
                } else {
                    this.$message({
                        message: '暂无数据',
                        type: 'warning'
                    })
                }
            })
        },
        /**
         * @description: 查看文章
         * @param {type} 
         * @return: 
         */        
        goArticle(Information) {
            Information
        }
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
                    .green{
                        color: #07be07;
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