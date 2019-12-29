<template>
    <div class="write">
        <div class="wr-head">
            <button @click="test">发表文章</button>
        </div>
        <div class="wr-main"></div>
        <mavon-editor v-model="value" ref=md @imgAdd="imgAdd" heigth="100%" class="mavon"/> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        test() {
            console.log(this.value)
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
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm.$img2Url 详情见本页末尾
            //    $vm.$img2Url(pos, url);
            console.log(url)
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