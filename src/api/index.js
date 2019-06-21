import axios from 'axios';
axios.defaults.baseURL="http://react.zbztb.cn/";
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
export const getGoods=()=>axios.get('http://react.zbztb.cn/site/goods/gettopdata/goods')
