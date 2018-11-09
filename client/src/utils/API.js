import axios from "axios";

export default {
  getMsg: function(){
    return axios.get('/api/msg')
  },
  sendMsg: function(data){
    return axios.post('/api/msg', data)
  }
}