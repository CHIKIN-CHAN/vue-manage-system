<template>
    <div id="app-login">
        <div class="login-input">
            <h1 class="ac">login</h1>
            <label for="user">帐号:</label>
            <el-input v-model="user" placeholder="请输入帐号" id="user" type="text"></el-input>
            <label for="password">密码:</label>
            <el-input v-model="password" placeholder="请输入密码" id="password" type="password"></el-input>
            <el-row class="ac">
                <el-button type="sumbit" @click="login">登录</el-button>
            </el-row>
        </div>
    </div>
</template>


<script>
    import { mapState } from 'vuex';//引入mapstate辅助函数,帮助我们生成计算属性
    export default {
        name: 'AppLogin',
        data() {
            return {
                user: '',
                password: ''
            }
        },
        computed: {//计算属性做数据验证
            ...mapState({//ES6对象展开运算符
                user_state: state => state.commons.user_state
            })
        },
        methods: {
            login () {
                if(!this.user || !this.password){
                    alert('用户名或密码不能为空')
                    return false
                }
                this.$store.dispatch('action_login', {
                    username:this.user,
                    password:this.password,
                    success: (user_state) => {//user_state是actions调用success(item)的item
                        console.log('登陆成功')
                        //存cookies
                        for(var key in user_state){
                            //若user_state中存在key
                            if(user_state.hasOwnProperty(key)){
                                var element = user_state[key]
                                this.$cookies.set(key, element, '1d', '/')//文档中1d是1day的缩写
                                // console.log(key)//name
                                // console.log(user_state[key])//小绿
                            }
                        }
                        this.$router.push({name: 'home'})
                    },
                    fail: () => {
                        console.log('用户名或密码错误')
                    }
                })  
            }
        }
    }
</script>


<style lang="scss" scoped>
    .login-input{
        width: 500px;
        height: 250px;
        border: 1px solid #ddd;
        padding: 20px;
        .el-row{
            margin-top:10px;
        }
    }
</style>
