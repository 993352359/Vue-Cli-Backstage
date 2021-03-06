import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/'; //配置请求地址前缀
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'; //post请求
axios.defaults.crossDomain = true; //跨域
axios.defaults.withCredentials = true; //携带cookie
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'; //设置请求头为 Authorization
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; //设置请求头为 Authorization

//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('auth-token');
    if(token){
        config.headers.token = `${token}`;
    }
    return config;
}, error => {

    return Promise.reject(error);
});

// 配置响应拦截器 
axios.interceptors.response.use(res => {
    //这里面写所需要的代码
    if (res.data.code == '401') {
        //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
        return false;
    };
    return Promise.resolve(res);
}, error => {
    return Promise.reject(error);
});

export default axios;


