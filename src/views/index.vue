<template>
    <section style="height: 100%;">
        <cz-head></cz-head>
        <section class="main-Business" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-immediate="false">
            <div class="main">
                <router-view></router-view>
            </div>
        </section>
    </section>
</template>
<script>
import czHead from '../views/cz-header/index'
export default {
    components: {
        czHead
    },
    methods: {
        load(){
            this.$root.$emit('getArticleList')
        },
    },
}
</script>
<style lang="less" scoped>
.main-Business{
    height: calc(100% - 75px);
    margin-top: 75px;
    overflow: auto;
}
</style>
