<template>
    <div class="dialog">
        <div class="item">
            <label>文章标签 :</label>
            <div>
                <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
                <el-input
                    class="input-new-tag"
                    :class="dynamicTags.length>0 ? 'fd-marl10': ''"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    maxlength="5"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
                </el-input>
                <el-button v-else class="button-new-tag" :class="dynamicTags.length>0 ? 'fd-marl10': ''" size="small" @click="showInput">+添加标签</el-button>
            </div>
        </div>
        <div class="item">
            <label>文章专栏 :</label>
            <el-button size="small" @click="isShowColumn = true">+新建专栏</el-button>
        </div>
        <div class="column fd-float" v-if="column.length">
            <el-radio-group v-model="radio">
                <el-radio v-for="(item, index) in column" :key="index" :label="item"></el-radio>
            </el-radio-group>
        </div>
        <div class="item">
            <label>文章类型 :</label>
            <el-select v-model="value" placeholder="请选择">
                <el-option label="原创" value="0"></el-option>
                <el-option label="转载" value="1"></el-option>
                <el-option label="翻译" value="2"></el-option>
            </el-select>
        </div>
        <div class="item">
            <label>发布形式 :</label>
            <el-radio-group v-model="radio">
                <el-radio :label="0">公开</el-radio>
                <el-radio :label="1">私密</el-radio>
                <el-radio :label="2" disabled >vip可见</el-radio>
            </el-radio-group>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialog = false">取 消</el-button>
            <el-button type="primary" @click="dialog = false">发 布</el-button>
        </div>
        <!-- 新建文章专栏弹窗 -->
        <el-dialog
            width="400px"
            title="添加专栏"
            :visible.sync="isShowColumn"
            append-to-body>
            <el-input v-model="colunmInput" size="small" maxlength="10"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeColumn">取 消</el-button>
                <el-button type="primary" @click="addColumn">发 布</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                config: {           // 配置项
                    // 文章标签的最大个数
                    tagLength: 3,
                },
                dynamicTags: [],    // 文章标签tag
                inputVisible: false,    // input 和 button切换
                inputValue: '',     // input的值
                column: ['es6', 'java', 'js'],     // 文章专栏
                isShowColumn: false,    //新建文章专栏弹窗
                colunmInput: '',    //新建文章专栏值
            }
        },
        methods: {
            /**
             * tag删除
             */
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            /**
             * 显示input
             */
            showInput() {
                if(this.dynamicTags.length >= this.config.tagLength) {
                    this.$message({
                        message: '最多添加3个标签',
                        type: 'warning'
                    })
                    return
                }
                this.inputVisible = true;
                this.$nextTick(() => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            /**
             * input不聚焦执行
             */
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            /**
             * 添加新建文章专栏
             */
            addColumn() {
                if (this.colunmInput) {
                    this.column.push(this.colunmInput)
                }
                this.closeColumn()
            },
            /**
             * 关闭新建文章专栏弹窗
             */
            closeColumn() {
                this.isShowColumn = false
                this.colunmInput = ''
            }
        },
    }
</script>

<style lang="less" scoped>
.dialog{
    .item{
        display: flex;
        align-items: center;
        margin: 20px 0;
        label{
            font-size: 14px;
            margin-right: 20px;
        }
    }
    .column{
        margin-left: 84px;
        background-color: #f0f0f0;
        border-radius: 5px;
    }
}
</style>