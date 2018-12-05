
import axios from 'axios' 
import {
    CHANGE_USER_STATE
} from './const'

const actions = {
    action_login (context, {username, password, success, fail}) {
        axios.get('/static/json/login.json').then(res => {
            res.data.forEach(item => {
                if(username == item.user && password == item.password){
                    // console.log(item)
                    //登录完以后需要改变state，所以需要调用mutations的方法
                    context.commit({
                        type: CHANGE_USER_STATE,
                        user_state: item
                        
                    })
                    success(item)
                }else{
                    fail()
                } 
            })
        })
    }
}

export default actions