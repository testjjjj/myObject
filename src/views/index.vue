<template>
    <section>
        <cz-head></cz-head>
        <div class="main">
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
import czHead from './cz-header/index'
export default {
    components: {
        czHead
    }
}
</script>
<style lang="less" scoped>
</style>
