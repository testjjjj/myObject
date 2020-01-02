<template>
    <div class="write">
        <div class="wr-head">
            <button @click="test">发表文章</button>
        </div>
        <div class="wr-main"></div>
        <mavon-editor 
            toolbarsBackground="#dcdbdb"
            previewBackground="#ffffff"
            placeholder="写点啥老弟。。。"
            codeStyle="atelier-lakeside-dark"
            v-model="value"
            ref=md
            @imgAdd="imgAdd"
            @change="mdChange"
            class="mavon"/> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            value: '<p><h3>js原型</h3><ul><ul><li><a href="#_1">什么是原型</a></li></ul></ul></p><h2><a id="_1"></a>什么是原型</h2>'
        }
    },
    methods: {
        test() {
        },
        mdChange() {
        },
        // 绑定@imgAdd event
        imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: 'https://mp.csdn.net/UploadImage?shuiyin=2',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               url
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm.$img2Url 详情见本页末尾
            //    $vm.$img2Url(pos, url);
           })
        }
    },
}
</script>

<style lang="less" scoped>
.write{
    margin: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 85px);
    .mavon{
        width: 100%;
        height: 100%;
    }
}
</style>