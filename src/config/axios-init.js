import axios from 'axios'

axios.defaults.baseURL = ''; //配置请求地址前缀
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'; //post请求
axios.defaults.crossDomain = true; //跨域
axios.defaults.withCredentials = true; //携带cookie
axios.defaults.headers.common['Authorization'] = ''; //设置请求头为 Authorization

//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(config => {
    //loading开始
    loadingInstance.start();
    return config;
}, error => {
    //出错，也要loading结束
    loadingInstance.close();
    return Promise.reject(error);
});

// 配置响应拦截器 
axios.interceptors.response.use(res => {
    //loading结束
    loadingInstance.close();
    //这里面写所需要的代码
    if (res.data.code == '401') {
        //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
        return false;
    };
    return Promise.resolve(res);
}, error => {
    loadingInstance.close();
    return Promise.reject(error);
});
return axios;
