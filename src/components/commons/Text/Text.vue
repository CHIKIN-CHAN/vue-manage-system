<template>
    <div id="app-text">
        <el-main>
            <label for="search">查看:</label>
            <el-input v-model="see" placeholder="请输入内容" class="search" id="search" @keyup.enter.native="searchKey"></el-input>
            <el-button type="button" @click="dialogFormVisible = true">新增</el-button>
            <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="日期" :label-width="formLabelWidth">
                        <el-input v-model="form.date" auto-complete="off" placeholder="请输入日期" style="width: 400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" placeholder="请输入姓名" style="width: 400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="职级" :label-width="formLabelWidth">
                        <el-input v-model="form.level" placeholder="请输入职级" style="width: 400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                        <el-input v-model="form.address" placeholder="请输入地址" style="width: 400px;"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = true">确 定</el-button>
                </div>
            </el-dialog>
            <el-table :data="searchTableData()">
                <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="level" label="职级" width="120"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button type="text">修改</el-button>
                                    
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-main> 
    </div>
</template>


<script>
    export default {
        name: 'AppText',
        filters: {

        },
        data () {
            // const item = {
            //     date: '2016-05-02',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // };
            return {
                //es6 数组实例的 fill()  fill方法使用给定值，填充一个数组
                // tableData: Array(20).fill(item)

                tableData: [],//所有员工信息的数组
                change_id: null,
                see:'',//查看框value
                dialogFormVisible: false,//新增框确认和取消按钮参数
                form: {
                    date: '',
                    name: '',
                    level: '',
                    address: ''
                },
                formLabelWidth: '120px',
                dialogVisible: false
            }
        },
        methods: {
            searchTableData () {
                //includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
                //trim()去掉输入的值的收尾空格
                return this.tableData.filter(item => {
                    let flag = false
                    if (item.name.includes(this.see.trim())) {
                        flag = true
                    }
                    if (item.date.includes(this.see.trim())) {
                        flag = true
                    }
                    return flag
                })
            },
            getLogin () {
                this.$http.get('/static/json/login.json').then(res => {
                    // console.log(res.data)
                    this.tableData = res.data
                })
            },
            deleteRow (index, rows) {
                rows.splice(index, 1)
            },
            searchKey () {
                
                
            }
            
        },
        created () {
            this.getLogin()
        }
    }
</script>


<style lang="scss" scoped>
    #app-text{
        width: 1061px;
        position: absolute;
        right: 30px;
        top: 60px;
        .search{
            width: 200px;
            margin: 10px;
        }
    }
</style>
