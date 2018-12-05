<template>
    <div id="app-top">
        <el-container>
            <el-header style="text-align: right; font-size: 12px; overflow: hidden;">
                <h1 style="display: inline-block; float: left; font-size: 22px; padding-left: 10px;">Background Management System</h1>
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{this.$store.state.commons.user_state.name}}</span>
            </el-header>
        </el-container>
    </div>
</template>


<script>
    import {
        CHANGE_USER_STATE
    } from '@/store/commons/const'  //@表示src
    export default {
        name: 'AppTop',
        methods: {
            exit () {
                this.$store.commit({
                type: CHANGE_USER_STATE,     //也可以写成type: 'CHANGE_USER_STATE'，这个写法不需要引入模块               
                    user_state: null
                })
                //调用在config配置中写的一次性清空cookies的方法
                this.$cookies.clear()
                this.$router.replace('/login')
            }
        }
    }
</script>


<style lang="scss" scoped>
    #app-top{
        width: 100%;
        height: 60px;
        .el-header {
            background-color: #B3C0D1;
            color: #333;
            line-height: 60px;
        }
    }
</style>