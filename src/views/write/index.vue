<template>
    <div class="write">
        <div class="wr-head">
            <div class="title">
                <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            </div>
            <div class="release">
                <el-button type="danger" size="medium" @click="release" plain disabled>保存草稿</el-button>
                <el-button type="primary" size="medium" @click="release" plain>发表文章</el-button>
            </div>
        </div>
        <div class="wr-main">
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
        <el-dialog title="收货地址" :visible.sync="dialog" width="30%">
            <re-dialog></re-dialog>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
import reDialog from './dialog'
export default {
    components: {
        reDialog,
    },
    data() {
        return {
            title: 'tste',      // 文章标题
            value: 'seteste',      // 文章html
            dialog: false   // 弹窗
        }
    },
    methods: {
        /**
         * @description: 点击发表
         * @param {type} 
         * @return: 
         */        
        release() {
            if(!this.title){
                this.$message({
                    message: '你没写标题啊，老弟！',
                    type: 'warning'
                })
                return
            } else if (!this.value) {
                this.$message({
                    message: '没写内容发表啥呢，老弟！',
                    type: 'warning'
                })
                return
            }
            this.dialog = true
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
    height: calc(100% - 20px);
    .wr-head{
        height: 50px;
        width: 100%;
        background-color: #ffff;
        border-radius: 5px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            width: 700px;
        }
    }
    .wr-main{
        width: 100%;
        height: calc(100% - 60px);
        .mavon{
            height: 100%;
        }
    }
}
</style>