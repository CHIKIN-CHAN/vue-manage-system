<template>
    <div id="app-left">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>员工信息</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-3" @click="getText">详细信息</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-2">
                            <template slot="title">重要信息</template>
                            <el-menu-item index="1-2-1">信息园地</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>考勤管理</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="2-1" @click="getMoney">加班</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-2">
                            <template slot="title">请假</template>
                            <el-menu-item index="2-2-1">休息时间表</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>薪酬管理</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="3-1" @click="getManage">岗位薪酬</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-2">
                            <template slot="title">员工薪酬</template>
                            <el-menu-item index="3-2-1">薪酬组成明细</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
    </div>
</template>


<script>
    export default {
        name: 'AppLeft',
        methods: {
            getText () {
                this.$router.push({name: 'home'})
            },
            getMoney () {
                this.$router.push({name: 'home-money'})
            },
            getManage () {
                this.$router.push({name: 'home-manage'})
            }
        }
    }
</script>


<style lang="scss" scoped>
    #app-left{
        .el-aside {
            color: #333;
        }
    }
</style>