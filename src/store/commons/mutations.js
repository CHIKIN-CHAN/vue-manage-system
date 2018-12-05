
import {
    CHANGE_USER_STATE
} from './const'

const mutations = {
    [CHANGE_USER_STATE] (state, payload) {
        //[CHANGE_USER_STATE](){}：ES6语法，允许变量值作为属性名。在对象中这个函数的写法是ES6方法简写
        state.user_state = payload.user_state
    } 
}

export default mutations