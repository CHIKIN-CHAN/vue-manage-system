
// computed_rem   计算rem
// picture_width  设计图宽度（750），750表示默认参数，也可以写required表示必传参数
// picture_width  使用的rem宽度（100），100表示默认参数，也可以写required表示必传参数
// return void    表示没有返回值

const computed_rem = function(picture_width = 750, rem_width = 100){
    let html = document.documentElement
    html.style.fontSize = html.clientWidth / (picture_width / (2 * rem_width)) + 'px'

    window.onresize = function(){
        let html = document.documentElement
        html.style.fontSize = html.clientWidth / (picture_width / (2 * rem_width)) + 'px'
    }
}

export default computed_rem