<!--
 * @Author: cjd
 * @Date: 2019-10-28 08:30:15
 * @LastEditTime: 2019-10-31 11:08:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \display\src\views\home\index.vue
 -->
<template>
    <section class="content fd-float">
        <!-- 作者排名 -->
        <pm></pm>
        <!-- 推荐文章 -->
        <articles></articles>
    </section>
</template>
<script>
import pm from './pm'
import articles from './article'
export default {
    components: {
        pm,
        articles
    }
}
</script>

<style lang="less" scoped>
.content{
    padding-top: 10px;
}

</style>