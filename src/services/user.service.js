import axios from "axios";
const API_URL = "http://localhost:3030/allorder";
const getPublicContent = () => {
    return axios.get(API_URL);
  };

  const postTheOrder = (obj) => {
    console.log(obj)
    return axios.post(API_URL,obj)
  }

  const patchTheOrder = (id,obj) => {
    console.log(API_URL+`/`+id)
    console.log(obj)
    return axios.patch(API_URL+`/`+id,obj)
  }

  const getSingleOrder = (id) => {
    console.log(API_URL+`/`+id)
    return axios.get(API_URL+`/`+id)
  }

  const deleteOrder = (id) => {
    console.log(API_URL+`/`+id)
    return axios.delete(API_URL+`/`+id)
  }

  const UserService = {
    getPublicContent,
    patchTheOrder,
    postTheOrder,
    getSingleOrder,
    deleteOrder
  }

  export default UserService;