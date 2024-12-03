import axios from "axios";

const commonAPI = async(httpMethord,url,reqBody,reqHeader)=>{
    const reqConfig ={
        method : httpMethord,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI