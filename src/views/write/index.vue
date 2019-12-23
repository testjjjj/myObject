<template>
    <div class="write">
        <mavon-editor v-model="value" heigth="100%"/> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        test() {
            console.log(this.value)
        }
    },
}
</script>

<style lang="less" scoped>
.write{
    margin: 10px;
    width: 100%;
    height: 100%;
}
</style>