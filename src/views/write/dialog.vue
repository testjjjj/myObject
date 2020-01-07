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
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm">
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+添加标签</el-button>
            </div>
        </div>
        <div class="item">
            <label>文章专栏 :</label>
            <el-button type="primary" size="small">+新建专栏</el-button>
        </div>
        <div class="column fd-float">
            <el-radio-group v-model="radio">
                <el-radio :label="0">公开公开</el-radio>
                <el-radio :label="0">公开公开公开</el-radio>
                <el-radio :label="0">公公开公开公开</el-radio>
                <el-radio :label="0">公开公公开公开公开</el-radio>
                <el-radio :label="0">公开公开公开</el-radio>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
            }
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(() => {
                this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
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