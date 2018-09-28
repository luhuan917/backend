/*
* 从后台获取数据
* 返回值promise对象  异步返回的是response. data数据
* */
import axios from 'axios'
/*
*@method: ajax方法，向后台发送axios请求数据，
*@param
* url  请求的路径
* data 请求的数据
* type  请求的方式
* @return
* 返回一个promise对象
* */
export default function ajax(url,data={},type="GET") {
  return new Promise((resolve,reject)=>{
    //发送ajax请求
    let promise;
    if(type=='GET'){
      //准备url query数据
      let dataStr='';
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr!==''){
        dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'));
        url=url+'?'+dataStr;
      }
      //发送get请求
      promise=axios.get(url);
    }else{
      //发送post请求
      promise=axios.post(url,data);
    }
    promise.then(response=>{
      //成功啦
      resolve(response.data);
    }).catch(error=>{
      //失败啦
      reject(error)
    })
  })




}
