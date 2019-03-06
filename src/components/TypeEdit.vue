<template>
    <div class="type-edit">
        <el-row>
            <el-col :span="10" style="margin-right: 20px">
                <el-input v-model="input" placeholder="请输入名字"></el-input>
            </el-col>

            <el-button type="success" icon="el-icon-check" circle :loading="loading" @click="submit"></el-button>
        </el-row>
    </div>
</template>
<script>
    import typeService from '../service/type'
    export default {
        data() {
            return {
                input: '',
                loading: false
            }
        },
        methods: {
            submit() {
                if(this.$route.params.id) {
                    this.update()
                }else {
                    this.add()
                }
            },
            add() {
                this.loading = true;
                typeService.add({
                    name: this.input
                }).then(res => {
                    this.loading = false;
                    this.$router.push({
                        name: 'typeList'
                    })
                })
            },
            update() {
                this.loading = true;
                typeService.update({
                    name: this.input,
                    id: this.$route.params.id
                }).then(res => {
                    this.loading = false;
                    this.$router.push({
                        name: 'typeList'
                    })
                })
            }
        },
        created() {
            if (this.$route.params.id) {
                const type = this.$store.state.typeData;
                ({
                    name: this.input
                } = type)
            }
        }

    }
</script>
<style lang="less" scoped>

</style>