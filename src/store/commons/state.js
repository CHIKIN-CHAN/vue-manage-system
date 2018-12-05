
//cookies虽然配置了全局，但这里没有了this调用，所以再次引入
import Cookies from 'vue-cookies' 

const state = {
    user_state: getUserStateFromCookies()
}

function getUserStateFromCookies() {
    let user_state = {
        address: "",
        date: "",
        level: "",
        name: "",
        password: "",
        user: ""
    }

    //遍历整个cookies对象，取出值value
    for(var key in user_state){
        let value = Cookies.get(key)
        if(!value){
            user_state = null
            break
        }else{
            user_state[key] = value
        }
    } 
    return user_state
}

export default state